# 📩 Legion Email Sender

![PT Legion Teknologi](https://img.shields.io/badge/PT%20Legion%20Teknologi-Email%20Sender-blue)

> Professional Email Sender System menggunakan Node.js, Nodemailer, dan Vercel Serverless Function.

Project ini digunakan untuk mengirim email otomatis seperti:
- Welcome Member
- Registration Success
- Notification Email
- Custom Email Template

---

# ✨ Features

✅ Nodemailer Gmail SMTP  
✅ Vercel Serverless API  
✅ Custom HTML Email Template  
✅ Responsive Email Design  
✅ Secure Environment Variable  
✅ Easy Customization  

---

# 📂 Project Structure

```
Legion-Email-Sender/

├── api/
│   └── send.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── register.html
│
├── package.json
├── vercel.json
└── .env
```

---

# ⚙️ Installation

Pastikan sudah install:

- Node.js
- Git

Clone project:

```bash
git clone https://github.com/username/Legion-Email-Sender.git
```

Masuk folder:

```bash
cd Legion-Email-Sender
```

Install package:

```bash
npm install
```

---

# 🔐 Setup Gmail Sender

Project ini menggunakan Gmail SMTP.

## 1. Aktifkan 2-Step Verification

Masuk:

Google Account  
→ Security  
→ 2-Step Verification

---

## 2. Buat App Password

Buka:

https://myaccount.google.com/apppasswords

Buat aplikasi baru:

```
Legion Email Sender
```

Google akan memberikan password 16 karakter.

Contoh:

```
abcd efgh ijkl mnop
```

Hapus spasi:

```
abcdefghijklmnop
```

---

# 🔑 Environment Variable

Buat file:

```
.env
```

Isi:

```env
GMAIL_USER=email@gmail.com
GMAIL_PASS=app_password_gmail
```

Contoh:

```env
GMAIL_USER=reyclouddev@gmail.com
GMAIL_PASS=abcdefghijklmnop
```

---

# ✏️ Mengubah Template Email

Template berada di:

```
templates/register.html
```

Edit bagian:

```html
PT Legion Teknologi
```

untuk mengganti nama perusahaan.

---

## Placeholder Data

Template mendukung:

```
{{NAME}}

{{ROLE}}

{{EMAIL}}

{{WHATSAPP}}

{{MEMBER_ID}}

{{DATE}}

{{NOTE}}
```

Jangan hapus format:

```
{{ }}
```

karena akan diganti otomatis oleh sistem.

---

# 🖼️ Mengubah Logo / Branding

Edit file:

```
templates/register.html
```

Cari bagian:

```html
<h1>
PT Legion Teknologi
</h1>
```

Ganti sesuai brand kamu.

---

# 📧 Mengubah Pengirim Email

Edit:

```
api/send.js
```

Cari:

```javascript
from:
```

Contoh:

```javascript
from: `"PT Legion Teknologi" <${process.env.GMAIL_USER}>`
```

Ubah nama sesuai kebutuhan.

---

# 🚀 Deploy Vercel

Install Vercel CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel
```

Production:

```bash
vercel --prod
```

---

# 🔒 Setting Environment Vercel

Masuk:

Vercel Dashboard

↓

Project

↓

Settings

↓

Environment Variables


Tambahkan:

```
GMAIL_USER
```

dan

```
GMAIL_PASS
```

Lalu Redeploy.

---

# 🧪 Testing

Buka website:

```
https://domain-kamu.vercel.app
```

Isi form dan kirim.

Jika berhasil:

```
Email berhasil dikirim
```

---

# ⚠️ Troubleshooting

## Invalid Login

Penyebab:

- Gmail salah
- App Password salah
- Menggunakan password Gmail biasa


Solusi:

Gunakan Google App Password.

---

## Template Tidak Terbaca

Pastikan:

```
templates/register.html
```

tidak dipindah.

---

## API Error

Cek:

```
api/send.js
```

dan Environment Variable Vercel.

---

# 📜 License

Copyright © 2026 PT Legion Teknologi

All rights reserved.

Project ini hanya untuk pembelian resmi.
Dilarang menjual ulang atau mendistribusikan tanpa izin.

---

# ❤️ Credits

Developed by:

**ReyCloudDev**

PT Legion Teknologi

Built with ❤️ in Indonesia
