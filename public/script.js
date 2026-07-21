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

    const name=document.querySelector("#name").value||"Nama Lengkap";

    const role=document.querySelector("#role").value||"Developer";

    const email=document.querySelector("#email").value||"example@gmail.com";

    const wa=document.querySelector("#whatsapp").value||"+62812xxxxxxxx";

    const html=`

<!DOCTYPE html>
<html>
<body style="font-family:Arial;background:#f1f5f9;padding:40px;">

<div style="max-width:650px;margin:auto;background:white;border-radius:15px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.15);">

<div style="background:#0f172a;padding:30px;text-align:center;color:white;">

<h1 style="color:#38bdf8;">PT Legion Teknologi</h1>

<p>Built in Indonesia, Trusted Worldwide.</p>

</div>

<div style="padding:30px;">

<h2>🎉 Registration Successful</h2>

<p>Hello <b>${name}</b>,</p>

<p>Welcome to <b>PT Legion Teknologi</b>.</p>

<table width="100%" cellpadding="10">

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

</table>

</div>

</div>

</body>
</html>

`;

    document.querySelector("#previewModal").style.display="flex";

    document.querySelector("#previewFrame").srcdoc=html;

}

function closePreview(){

    document.querySelector("#previewModal").style.display="none";

}
