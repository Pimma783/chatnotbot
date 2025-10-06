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


    // === 3. ข้อมูลที่ควรถูกปฏิเสธ (OUT_OF_SCOPE) ===
    { content: "อัตราดอกเบี้ยนโยบายปัจจุบันของธนาคารแห่งประเทศไทยอยู่ที่ 2.50%.", source: "ข้อมูลการเงิน", uri: "#out-of-scope", category: 'OUT_OF_SCOPE' },
    { content: "ข่าวสารการเมืองในปัจจุบัน.", source: "ข่าวทั่วไป", uri: "#out-of-scope-news", category: 'OUT_OF_SCOPE' },

    // === 4. ไม่มีพื้นฐานมาก่อนเลย จะเรียนได้มั้ย? (CS_FOCUS) ===
    {content: "ไม่ต้องกังวลเลยครับหากไม่มีพื้นฐานมาก่อน เพราะภาควิชานี้มีการสอนตั้งแต่ระดับพื้นฐาน เช่น การเขียนโปรแกรมเบื้องต้น และคณิตศาสตร์สำหรับคอมพิวเตอร์.", source: "กิจกรรมภาควิชา", uri: "/docs/curriculum-2567.pdf", category: 'CS_FOCUS' },
    {content: "หากไม่มีพื้นฐานมาก่อนเลย ทางสาขาก็ยังมีกิจกรรมการปรับพื้นฐานภาควิชานี้อยู่อีกด้วย.", source: "กิจกรรมภาควิชา", uri: "#activities", category: 'CS_FOCUS' },

    // === 5. การรับสมัครและค่าธรรมเนียม (CS_FOCUS) ===
    {content: "เกณฑ์การรับสมัครหลักใช้คะแนน A-Level ในวิชา คณิตศาสตร์1, ฟิสิกส์, และภาษาอังกฤษ ผ่านระบบ TCAS.",source: "ลงทะเบียน", uri:"#admission", category: 'CS_FOCUS' },
    {content: "รอบโควต้า (TCAS 2) มักจะเปิดรับช่วงเดือนกุมภาพันธ์ โดยใช้ GPAX และ Portfolio ประกอบ.",source: "ลงทะเบียน", uri:"#admission", category: 'CS_FOCUS' },
    {content: "ค่าธรรมเนียมการศึกษาโดยประมาณสำหรับหลักสูตร CS คือ 18,500 บาทต่อภาคเรียน (Mockup Data).",source: "ลงทะเบียน", uri:"#tuition", category: 'CS_FOCUS' },
    {content: "มหาวิทยาลัยมีทุนการศึกษาสำหรับนักศึกษาที่มีผลการเรียนดีเด่น หรือขาดแคลนทุนทรัพย์ (สอบถามที่กองพัฒนานักศึกษา).",source: "ลงทะเบียน", uri:"#scholarship", category: 'CS_FOCUS' },

    // === 6. โอกาสในการทำงาน (CS_FOCUS) ===
    {content: "ศิษย์เก่าส่วนใหญ่ทำงานเป็น Software Developer, Data Analyst, และ System Administrator ในบริษัท Tech.",source: "โอกาสทำงาน", uri:"#career", category: 'CS_FOCUS' },
    {content: "เนื่องจากแม่โจ้เน้นเกษตร นักศึกษาสาขา CS มีความโดดเด่นในการพัฒนา Agri-Tech และ Smart Farm Solutions.",source: "โอกาสทำงาน", uri:"#career", category: 'CS_FOCUS' },
    {content: "มีการจัดงาน Job Fair และ Career Talk ประจำปี เพื่อให้นักศึกษาพบปะบริษัทชั้นนำ.",source: "โอกาสทำงาน", uri:"#career", category: 'CS_FOCUS' },

    // === 7. อาจารย์ในสาขามีใครบ้าง? (CS_FOCUS) ===
    {content: "อาจารย์ประจำภาควิชาวิทยาการคอมพิวเตอร์ ได้แก่ อ. อรรถวิท ชังคมานนท์ (หัวหน้าภาค)",source:"อาจารย์วิทย์คอม", uri:"#career", category: 'CS_FOCUS' },
    {content: "ผศ.ดร. สมนึก สินธุปวน",source:"อาจารย์วิทย์คอม", uri:"#career", category: 'CS_FOCUS' },
    {content: "อ.ดร. พยุงศักดิ์ เกษมสำราญ.",source:"อาจารย์วิทย์คอม", uri:"#career", category: 'CS_FOCUS' },
    {content: "อาจารย์ทุกท่านมีประสบการณ์ทั้งในด้านการสอนและการวิจัยในสาขาต่างๆ ของวิทยาการคอมพิวเตอร์.",source:"อาจารย์วิทย์คอม", uri:"#career", category: 'CS_FOCUS' },

    // === 8. การใช้สถานที่สำหรับเรียน (CS_FOCUS) ===
    {content: "มีห้องปฏิบัติการคอมพิวเตอร์ที่ทันสมัย พร้อมซอฟต์แวร์และฮาร์ดแวร์ล่าสุดสำหรับการเรียนการสอน.", source: "CS Facilities", uri: "#cs-lab", category: 'CS_FOCUS' },
    {content: "มีบริการอินเทอร์เน็ตความเร็วสูง และ Wi-Fi ครอบคลุมทั่วทั้งอาคาร.", source: "CS Facilities", uri: "#cs-lab", category: 'CS_FOCUS' },
    {content: "มีพื้นที่สำหรับการทำงานกลุ่ม และห้องสมุดที่มีหนังสือและวารสารทางวิทยาการคอมพิวเตอร์มากมาย.", source: "CS Facilities", uri: "#cs-lab", category: 'CS_FOCUS' },

    // === 9. ข้อมูลทั่วไปอื่นๆ (GENERAL_INFO) ===
    { content: "มหาวิทยาลัยแม่โจ้ก่อตั้งขึ้นในปี พ.ศ. 2467 โดยมีจุดมุ่งหมายเพื่อส่งเสริมการเกษตรและเทคโนโลยีในภาคเหนือของประเทศไทย.", source: "MJU History", uri: "#mju-history", category: 'GENERAL_INFO' },
    { content: "มหาวิทยาลัยมีวิทยาเขตหลักที่เชียงใหม่ และมีวิทยาเขตย่อยที่ลำปาง, แพร่, และสกลนคร.", source: "MJU Campuses", uri: "#mju-campuses", category: 'GENERAL_INFO' },
    { content: "คณะวิทยาศาสตร์มีภาควิชาต่างๆ เช่น ภาควิชาชีววิทยา, ภาควิชาเคมี, ภาควิชาฟิสิกส์, และภาควิชาวิทยาการคอมพิวเตอร์.", source: "Science Faculty", uri: "#science-faculty", category: 'GENERAL_INFO' },
    { content: "มหาวิทยาลัยมีความร่วมมือกับสถาบันการศึกษาชั้นนำทั้งในและต่างประเทศ เพื่อส่งเสริมการวิจัยและการแลกเปลี่ยนนักศึกษา.", source: "MJU Collaborations", uri: "#mju-collaborations", category: 'GENERAL_INFO' },
    { content: "มหาวิทยาลัยมีสิ่งอำนวยความสะดวกต่างๆ เช่น ห้องสมุด, ศูนย์กีฬา, และที่พักนักศึกษา.", source: "MJU Facilities", uri: "#mju-facilities", category: 'GENERAL_INFO' },

    // === 10. ข้อมูลที่ควรถูกปฏิเสธเพิ่มเติม (OUT_OF_SCOPE) ===
    { content: "ข้อมูลส่วนบุคคลของนักศึกษาและบุคลากร.", source: "ข้อมูลส่วนบุคคล", uri: "#out-of-scope-personal", category: 'OUT_OF_SCOPE' },
    { content: "รายละเอียดทางการเงินของมหาวิทยาลัย เช่น งบประมาณและรายรับรายจ่าย.", source: "ข้อมูลการเงิน", uri: "#out-of-scope-financial", category: 'OUT_OF_SCOPE' },
    { content: "ข้อมูลภายในของมหาวิทยาลัย เช่น นโยบายภายในและการประชุมคณะกรรมการ.", source: "ข้อมูลภายใน", uri: "#out-of-scope-internal", category: 'OUT_OF_SCOPE' },
    { content: "ข่าวสารทั่วไปที่ไม่เกี่ยวข้องกับมหาวิทยาลัย เช่น ข่าวบันเทิง กีฬา หรือเหตุการณ์ปัจจุบัน.", source: "ข่าวทั่วไป", uri: "#out-of-scope-news", category: 'OUT_OF_SCOPE' },
    
];

/**
 * ฟังก์ชัน Retrieval ที่ถูกปรับปรุงให้ดึงทั้ง Content และ Source ออกมา
 * @param query ข้อความคำถามจากผู้ใช้
 * @returns { {context: string, sources: Array<{title: string, uri: string}>, isOutOfScope: boolean } } 
 */
export function mockRetrieval(query: string): { context: string, sources: Array<{title: string, uri: string}>, isOutOfScope: boolean } {
    const queryLower = query.toLowerCase();
    
    // Keywords สำหรับการค้นหา CS โดยเฉพาะ
    const csKeywords = ["หลักสูตร", "ค่าเทอม", "สมัคร", "ติดต่อ", "คณะ", "วิชา", "จบ", "ทำงาน", "e-sports", "คอมพิวเตอร์", "จุฬาภรณ์", "lab", "อาจารย์", "พื้นฐาน" ];
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