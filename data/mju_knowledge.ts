/**
 * @typedef {Object} KnowledgeChunk
 * @property {string} content - เนื้อหาของข้อมูล
 * @property {string} source - ชื่อย่อของเอกสาร/แหล่งที่มา
 * @property {string} uri - ลิงก์ที่สามารถตรวจสอบได้ (Mockup URL)
 */
export interface KnowledgeChunk {
    content: string;
    source: string;
    uri: string;
    category: 'CS_FOCUS' | 'GENERAL_INFO' | 'OUT_OF_SCOPE'; // เพิ่ม category สำหรับการดึงข้อมูล
}

/**
 * Knowledge Base (Mockup Data)
 * * @type {KnowledgeChunk[]}
 */
export const extendedKnowledgeBase: KnowledgeChunk[] = [
    // === 1. ข้อมูลติดต่อและที่ตั้ง (GENERAL_INFO) ===
    { content: "มหาวิทยาลัยแม่โจ้ (Maejo University) ตั้งอยู่ที่ 63 หมู่ 4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290.", source: "MJU General Info", uri: "#mju-location", category: 'GENERAL_INFO' },
    { content: "เบอร์โทรศัพท์กลางของมหาวิทยาลัยคือ 053-873000 และเว็บไซต์หลักคือ www.mju.ac.th.", source: "MJU General Info", uri: "#mju-contact", category: 'GENERAL_INFO' },
    { content: "ภาควิชาวิทยาการคอมพิวเตอร์ (CS) สังกัดคณะวิทยาศาสตร์.", source: "CS Overview", uri: "#cs-faculty", category: 'CS_FOCUS' },
    { content: "สำนักงานภาควิชาวิทยาการคอมพิวเตอร์ตั้งอยู่ที่ อาคารจุฬาภรณ์ ชั้น 3.", source: "CS Contact", uri: "#cs-building", category: 'CS_FOCUS' },
    
    // === 2. หลักสูตรและการเรียนการสอน (CS_FOCUS) ===
    { content: "หลักสูตรที่เปิดสอนคือ วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์ (วท.บ. วท.ค.).", source: "หลักสูตร CS 2567", uri: "/docs/curriculum-2567.pdf", category: 'CS_FOCUS' },
    { content: "หลักสูตร CS เน้นการพัฒนาซอฟต์แวร์ประยุกต์, ระบบฐานข้อมูล, และความรู้ด้านปัญญาประดิษฐ์ (AI) และ Machine Learning.", source: "หลักสูตร CS 2567", uri: "/docs/curriculum-2567.pdf", category: 'CS_FOCUS' },
    { content: "กิจกรรมเด่นของภาควิชาคือ 'MJU Coding War' และ 'IT Camp' สำหรับนักเรียนมัธยม.", source: "กิจกรรมภาควิชา", uri: "#activities", category: 'CS_FOCUS' },
    // ... (ข้อมูลอื่นๆ)

    // === 3. ข้อมูลที่ควรถูกปฏิเสธ (OUT_OF_SCOPE) ===
    { content: "อัตราดอกเบี้ยนโยบายปัจจุบันของธนาคารแห่งประเทศไทยอยู่ที่ 2.50%.", source: "ข้อมูลการเงิน", uri: "#out-of-scope", category: 'OUT_OF_SCOPE' },
    { content: "ข่าวสารการเมืองในปัจจุบัน.", source: "ข่าวทั่วไป", uri: "#out-of-scope-news", category: 'OUT_OF_SCOPE' },
];

/**
 * ฟังก์ชัน Retrieval ที่ถูกปรับปรุงให้ดึงทั้ง Content และ Source ออกมา
 * @param query ข้อความคำถามจากผู้ใช้
 * @returns { {context: string, sources: Array<{title: string, uri: string}>, isOutOfScope: boolean } } 
 */
export function mockRetrieval(query: string): { context: string, sources: Array<{title: string, uri: string}>, isOutOfScope: boolean } {
    const queryLower = query.toLowerCase();
    
    // Keywords สำหรับการค้นหา CS โดยเฉพาะ
    const csKeywords = ["หลักสูตร", "ค่าเทอม", "สมัคร", "ติดต่อ", "คณะ", "วิชา", "จบ", "ทำงาน", "e-sports", "คอมพิวเตอร์", "จุฬาภรณ์", "lab"];
    const userKeywords = queryLower.split(' ').filter(k => k.length > 2);
    const searchTerms = Array.from(new Set([...csKeywords, ...userKeywords]));

    // 1. ลองค้นหา Chunk ที่เกี่ยวข้องกับ CS
    const relevantCSChunks = extendedKnowledgeBase.filter(chunk => 
        chunk.category === 'CS_FOCUS' && searchTerms.some(term => chunk.content.toLowerCase().includes(term))
    );

    // 2. ถ้าไม่พบ CS Chunk ให้ตรวจสอบ Out of Scope Keywords (ตัวอย่าง)
    if (relevantCSChunks.length === 0) {
        if (queryLower.includes('ดอกเบี้ย') || queryLower.includes('การเงิน') || queryLower.includes('การเมือง')) {
            return { context: "", sources: [], isOutOfScope: true };
        }
    }

    // 3. รวม Context: ถ้าเจอ CS Chunk ให้เอา CS Chunk + ข้อมูลทั่วไป (GENERAL_INFO) มาเสริม
    let chunksToUse = relevantCSChunks;
    const generalInfoChunks = extendedKnowledgeBase.filter(c => c.category === 'GENERAL_INFO');
    
    // ใส่ข้อมูลทั่วไปเสริมเข้าไป เพื่อให้ LLM เห็นที่ตั้ง/เบอร์โทรมหาลัยเสมอ
    if (relevantCSChunks.length > 0) {
        chunksToUse = [...relevantCSChunks, ...generalInfoChunks];
    } else {
        // ถ้าไม่เจออะไรเลย ให้ LLM ได้ลองพิจารณาข้อมูลทั่วไปด้วยตัวเอง
        chunksToUse = generalInfoChunks; 
    }

    // 4. จัดการ Context, Sources, และ OutOfScope Flag
    const context = chunksToUse.map(c => `[Source: ${c.source}] ${c.content}`).join('\n---\n');
    const uniqueSources = chunksToUse.reduce((acc, chunk) => {
        const isDuplicate = acc.some(s => s.uri === chunk.uri);
        if (!isDuplicate) {
            acc.push({ title: chunk.source, uri: chunk.uri });
        }
        return acc;
    }, [] as Array<{title: string, uri: string}>);

    return { context, sources: uniqueSources, isOutOfScope: false };
}