# دليل التثبيت المفصل

## الخطوة 1: المتطلبات الأساسية

تأكد من تثبيت:
- **Node.js** (النسخة 16 أو أحدث)
  - قم بالتحميل من: https://nodejs.org/
  - تحقق: `node --version` و `npm --version`

## الخطوة 2: استنساخ المستودع

افتح Terminal/Command Prompt وأدخل:

```bash
git clone https://github.com/thb44744-gif/HamzaAds.git
cd HamzaAds
```

أو قم بتحميل ملف ZIP من الموقع وفك ضغطه.

## الخطوة 3: تثبيت المكتبات

```bash
npm install
```

سيتم تثبيت جميع المكتبات المطلوبة.

## الخطوة 4: إعداد البيئة (اختياري)

انسخ ملف `.env.example` إلى `.env`:

```bash
cp .env.example .env
```

عدّل المتغيرات حسب احتياجاتك.

## الخطوة 5: تشغيل التطبيق

### للتطوير:
```bash
npm run dev
```

### للإنتاج:
```bash
npm start
```

## الخطوة 6: الدخول للتطبيق

افتح متصفحك وتوجه إلى:
```
http://localhost:3000
```

ستظهر صفحة الترحيب.

## استكشاف الأخطاء

### الخطأ: "npm: command not found"
- تأكد من تثبيت Node.js بشكل صحيح

### الخطأ: "Port 3000 already in use"
- غيّر المنفذ في `.env`: `PORT=3001`

### الخطأ: "Module not found"
- جرّب: `npm install` مرة أخرى
- احذف `node_modules` وأعد التثبيت

## الدعم
للمزيد من المساعدة، تواصل معنا عبر GitHub Issues.
