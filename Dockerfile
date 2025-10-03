# ------------------------------------------------------------------
# STAGE 1: ติดตั้ง Dependencies (base)
# ใช้ node:20-slim เพื่อให้ Image มีขนาดเล็ก
FROM node:20-slim AS base
WORKDIR /app

# คัดลอกไฟล์ package เพื่อใช้ประโยชน์จาก Docker Cache
COPY package.json  package-lock.json ./

# ติดตั้ง dependencies (ไม่รวม devDependencies)
RUN npm ci

# ------------------------------------------------------------------
# STAGE 2: Build Next.js Application (builder)
FROM base AS builder

# คัดลอกโค้ดทั้งหมดของโปรเจกต์
COPY . .

# สั่ง Build Next.js ในโหมด Production
# ต้องมีการตั้งค่า output: 'standalone' ใน next.config.js
RUN npm run build

# ------------------------------------------------------------------
# STAGE 3: Runtime Environment (runner)
# Image สุดท้ายที่เล็กและปลอดภัยสำหรับการรัน
FROM node:20-slim AS runner

WORKDIR /app

# ตั้งค่า Environment Variables
ENV NODE_ENV production
ENV PORT 3000

# สร้าง user ที่ไม่ใช่ root ('nextjs') เพื่อเพิ่มความปลอดภัย (สำคัญมาก)
RUN addgroup --gid 1001 --system nextjs
RUN adduser --uid 1001 --system --ingroup nextjs nextjs

# คัดลอกไฟล์ที่จำเป็นสำหรับการรันในโหมด Standalone
# ไฟล์ server.js และ node_modules ที่จำเป็นถูกรวมอยู่ใน .next/standalone
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# กำหนดสิทธิ์และเปลี่ยนไปใช้ user ที่ไม่ใช่ root
RUN chown -R nextjs:nextjs /app
USER nextjs

# คำสั่งสำหรับรัน Next.js server
CMD ["node", "server.js"]