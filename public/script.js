/*
=========================================
PT Legion Teknologi
Email Sender Dashboard
Version : 3.0
Author  : ReyCloudDev
=========================================
*/

// ===============================
// Helper
// ===============================

function getValue(id, fallback = "") {

    const el = document.getElementById(id);

    if (!el) return fallback;

    return el.value.trim() || fallback;

}

// ===============================
// Toast Notification
// ===============================

function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.className = "";

    if (type === "error") {

        toast.classList.add("error");

    }

    if (type === "warning") {

        toast.classList.add("warning");

    }

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

// ===============================
// Button Loading
// ===============================

function setLoading(status) {

    const btn = document.querySelector(".send");

    if (!btn) return;

    if (status) {

        btn.disabled = true;

        btn.innerHTML = "⏳ Mengirim...";

    } else {

        btn.disabled = false;

        btn.innerHTML = "🚀 Send Email";

    }

}

// ===============================
// Send Email
// ===============================

async function sendEmail() {

    const data = {

        to: getValue("to"),

        template: getValue("template", "register"),

        name: getValue("name"),

        role: getValue("role"),

        email: getValue("email"),

        whatsapp: getValue("whatsapp"),

        note: getValue("note")

    };

    if (!data.to) {

        showToast("⚠️ Email penerima wajib diisi.", "warning");

        return;

    }

    setLoading(true);

    try {

        const res = await fetch("/api/send", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        });

        const json = await res.json();

        if (json.success) {

            showToast("✅ " + json.message);

        } else {

            showToast("❌ " + json.message, "error");

        }

    } catch (err) {

        console.error(err);

        showToast("❌ Gagal menghubungi server.", "error");

    } finally {

        setLoading(false);

    }

}
