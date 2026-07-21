async function sendEmail() {

    const data = {

        to: document.querySelector("#to").value,

        subject: document.querySelector("#subject").value,

        html: "<h1>Hello from PT Legion Teknologi</h1>"

    };

    const res = await fetch("/api/send", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(data)

    });

    const json = await res.json();

    alert(json.message);

}
