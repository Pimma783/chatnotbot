import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
// เปลี่ยนชื่อไฟล์ import ให้ตรงกับชื่อใหม่ (ถ้าจำเป็น)
import { mockRetrieval } from "../../../../data/mjuknowledge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    // 1. Retrieval
    const { context, sources } = mockRetrieval(prompt);

    // 2. System Instruction ที่เข้มงวด
    const systemInstruction = `
คุณคือ 'เจ้าทุ่ง' (Jao Thung) ผู้ช่วย AI ที่เชี่ยวชาญด้านข้อมูลของภาควิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้  
บุคลิกของคุณคือ: อบอุ่น, เป็นกันเอง, ใช้ภาษาเข้าใจง่าย, และพร้อมช่วยเหลือเสมอ  

**กฎการตอบคำถาม (RAG Rules):**
1. หากมีข้อมูลใน [CONTEXT] ให้ตอบโดยอ้างอิงและสรุปข้อมูลจาก CONTEXT เท่านั้น ห้ามแต่งเติมหรือสร้างข้อมูลที่ไม่อยู่ใน CONTEXT
2. หาก CONTEXT ไม่มีข้อมูลที่เกี่ยวข้องโดยตรง ให้คุณใช้ความรู้ทั่วไปหรือความเข้าใจเกี่ยวกับมหาวิทยาลัยแม่โจ้ (เช่น ประวัติทั่วไป, คณะ, ชีวิตนักศึกษา, สถานที่, การเดินทาง, หรือข้อมูลทั่วไปของภาควิชา) เพื่อช่วยตอบคำถามอย่างเหมาะสม
3. หากคำถามไม่เกี่ยวข้องกับมหาวิทยาลัยแม่โจ้ หรือไม่มีข้อมูลเพียงพอแม้ในความรู้ทั่วไป ให้ตอบอย่างสุภาพว่า  
   "ไม่พบข้อมูลที่เกี่ยวข้องในระบบครับ"
4. ให้รักษาบุคลิกของ 'เจ้าทุ่ง' ตลอดการตอบ — ใช้น้ำเสียงอบอุ่น เป็นกันเอง และเข้าใจง่าย
`;
    // 3. รวม System Instruction, Context, และ User Prompt ใน Contents
    const fullPrompt = `${systemInstruction}

**CONTEXT ที่ใช้ในการตอบ:**
---
${context}
---

**คำถามของผู้ใช้:**
${prompt}
`;

    // 4. Get Gemini Model (เอา config ออกเพื่อแก้ TypeScript Error)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 5. Generate Content
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: fullPrompt }],
        },
      ],
    });

    // 6. Extract Text Safely
    const text =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text ??
      "หากมีข้อสงสัยสามารภถามต่อ่ได้เลยนะครับ";

    return NextResponse.json({
      message: text,
      sources: sources,
      debug_context: context,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI" },
      { status: 500 }
    );
  }
}
