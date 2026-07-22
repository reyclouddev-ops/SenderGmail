async function sendEmail() {

    const data = {

        to: document.querySelector("#to").value,

        template: document.querySelector("#template").value,

        name: document.querySelector("#name").value,

        role: document.querySelector("#role").value,

        email: document.querySelector("#email").value,

        whatsapp: document.querySelector("#whatsapp").value,

        note: document.querySelector("#note").value

    };

    try {

        const res = await fetch("/api/send", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        });

        const json = await res.json();

        alert(json.message);

    } catch (err) {

        console.error(err);

        alert("❌ Gagal menghubungi server.");

    }

}

function previewEmail(){

    const template = document.querySelector("#template").value;

    const name = document.querySelector("#name").value || "Nama Lengkap";

    const role = document.querySelector("#role").value || "Developer";

    const email = document.querySelector("#email").value || "example@gmail.com";

    const wa = document.querySelector("#whatsapp").value || "+62812xxxxxxxx";

    const note = document.querySelector("#note").value || "-";

    let title = "";
    let message = "";

    switch(template){

        case "register":

            title = "🎉 Registration Successful";

            message = "Selamat! Akun Anda berhasil didaftarkan di PT Legion Teknologi.";

        break;

        case "welcome":

            title = "👋 Welcome";

            message = "Selamat datang di PT Legion Teknologi. Kami senang Anda bergabung bersama kami.";

        break;

        case "reset":

            title = "🔐 Reset Password";

            message = "Permintaan reset password telah diterima. Silakan ikuti petunjuk yang diberikan.";

        break;

        case "invoice":

const invoiceId = "INV-" + Date.now();

const amount = "Rp150.000";

const product = "VPS Ryzen 4GB";

const method = "QRIS";

const date = new Date().toLocaleDateString("id-ID");

const invoiceHtml = `

<!DOCTYPE html>

<html>

<body style="margin:0;background:#f5f7fb;padding:40px;font-family:Arial">

<div style="max-width:650px;margin:auto;background:#fff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

<div style="background:#2563eb;padding:35px;text-align:center;color:#fff;">

<h1 style="margin:0;">
PT Legion Teknologi
</h1>

<p style="margin-top:8px;">
Official Notification System
</p>

</div>

<div style="padding:35px;">

<h2 style="margin-top:0;">
💳 Invoice Pembayaran
</h2>

<p>
Halo <b>${name}</b>,
</p>

<p>
Terima kasih. Pembayaran Anda telah berhasil kami terima.
</p>

<table width="100%" cellpadding="10">

<tr>

<td><b>Invoice</b></td>

<td>${invoiceId}</td>

</tr>

<tr>

<td><b>Produk</b></td>

<td>${product}</td>

</tr>

<tr>

<td><b>Total</b></td>

<td><b>${amount}</b></td>

</tr>

<tr>

<td><b>Metode</b></td>

<td>${method}</td>

</tr>

<tr>

<td><b>Tanggal</b></td>

<td>${date}</td>

</tr>

<tr>

<td><b>Email</b></td>

<td>${email}</td>

</tr>

</table>

<div style="margin-top:30px;padding:20px;background:#eff6ff;border-radius:12px;text-align:center;">

<div style="display:inline-block;background:#22c55e;color:white;padding:12px 35px;border-radius:30px;font-weight:bold;">

✅ LUNAS

</div>

</div>

<p style="margin-top:30px;color:#64748b;">

Invoice ini dibuat otomatis oleh sistem PT Legion Teknologi.

</p>

</div>

</div>

</body>

</html>

`;

document.querySelector("#previewModal").style.display="flex";

document.querySelector("#previewFrame").srcdoc=invoiceHtml;

return;

        default:

            title = "PT Legion Teknologi";

            message = "";

    }

    const html = `

<!DOCTYPE html>

<html>

<body style="margin:0;padding:40px;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<div style="max-width:650px;margin:auto;background:#fff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">

<div style="background:#2563eb;padding:35px;text-align:center;">

<h1 style="margin:0;color:white;">

PT Legion Teknologi

</h1>

<p style="margin-top:8px;color:#dbeafe;">

Official Notification System

</p>

</div>

<div style="padding:35px;">

<h2 style="margin-top:0;">

${title}

</h2>

<p>

Halo <b>${name}</b>,

</p>

<p>

${message}

</p>

<table width="100%" cellpadding="10" style="margin-top:25px;border-collapse:collapse;">

<tr>

<td><b>Nama</b></td>

<td>${name}</td>

</tr>

<tr>

<td><b>Role</b></td>

<td>${role}</td>

</tr>

<tr>

<td><b>Email</b></td>

<td>${email}</td>

</tr>

<tr>

<td><b>WhatsApp</b></td>

<td>${wa}</td>

</tr>

<tr>

<td><b>Catatan</b></td>

<td>${note}</td>

</tr>

</table>

${
template === "invoice"
?

`

<div style="margin-top:30px;padding:20px;background:#eff6ff;border-radius:12px;">

<h3 style="margin-top:0;color:#2563eb;">

Status Pembayaran

</h3>

<div style="display:inline-block;background:#dcfce7;color:#15803d;padding:10px 25px;border-radius:30px;font-weight:bold;">

LUNAS

</div>

</div>

`

:

""

}

<p style="margin-top:35px;color:#64748b;font-size:14px;">

Email ini dikirim otomatis oleh sistem PT Legion Teknologi.

</p>

</div>

</div>

</body>

</html>

`;

    document.querySelector("#previewModal").style.display = "flex";

    document.querySelector("#previewFrame").srcdoc = html;

}

function closePreview(){

    document.querySelector("#previewModal").style.display = "none";

}
