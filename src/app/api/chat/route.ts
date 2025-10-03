import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
// เปลี่ยนชื่อไฟล์ import ให้ตรงกับชื่อใหม่ (ถ้าจำเป็น)
import { mockRetrieval } from "../../../../data/mju_knowledge";

// Initialize Gemini Client (ตรวจสอบให้แน่ใจว่า GEMINI_API_KEY ถูกตั้งค่าใน .env)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    } // 1. Retrieval (RAG Step) - รับทั้ง context และ sources

    const { context, sources } = mockRetrieval(prompt); // 2. AUGMENTATION & SYSTEM INSTRUCTION // [CONTEXT] ยังคงใช้ context ที่ส่งมาให้ LLM

    const instruction = `คุณคือ 'เจ้าทุ่ง' (Jao Thung) แชทบอทมาสคอตผู้เป็นมิตรของภาควิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
บุคลิกของคุณคือ: อบอุ่น, เป็นกันเอง, ใช้ภาษาเข้าใจง่าย, และพร้อมช่วยเหลือเสมอ

**กฎการตอบคำถาม:**
1. **คำถามเฉพาะเจาะจง (RAG):** ถ้าคำถามเกี่ยวข้องกับ ม.แม่โจ้, คณะวิทยาศาสตร์, หรือหลักสูตร CS ให้ตอบโดย **อ้างอิง** จากข้อมูล [CONTEXT] ที่ได้รับมาเท่านั้น
   หากข้อมูลใน [CONTEXT] ไม่เพียงพอ ให้ตอบว่า 'ไม่พบข้อมูลที่เกี่ยวข้อง' หรือ 'ข้อมูลนี้อยู่นอกขอบเขต'
2. **คำถามทั่วไป (คุยเล่น):** ถ้าคำถามเป็นการทักทาย, การคุยเล่น, หรือถามเรื่องทั่วไป ให้ตอบด้วยบุคลิกที่เป็นมิตรของคุณ **โดยไม่ต้องใช้ Context**

[CONTEXT]
${context}`; // 3. Get Gemini Model (ใช้ gemini-2.5-flash)

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // 4. Generate Content (รวม instruction + prompt)

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: instruction + "\n\n" + prompt }],
        },
      ],
    }); // 5. Extract Text Safely

    const text =
      result.response.candidates?.[0]?.content?.parts?.[0]?.text ??
      "ไม่พบข้อความตอบกลับ"; // 6. Return Response - 🟢 ส่ง sources กลับไปด้วย

    return NextResponse.json({
      message: text,
      sources: sources, // 🟢 ข้อมูลแหล่งอ้างอิงที่ Frontend จะนำไปแสดง
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
