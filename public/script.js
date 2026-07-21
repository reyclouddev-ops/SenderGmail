async function sendEmail() {

    const data = {

        to: document.querySelector("#to").value,

        subject: document.querySelector("#subject").value,

        name: document.querySelector("#name").value,

        role: document.querySelector("#role").value,

        email: document.querySelector("#email").value,

        whatsapp: document.querySelector("#whatsapp").value

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

        alert("❌ Gagal menghubungi server.");

        console.error(err);

    }

}
