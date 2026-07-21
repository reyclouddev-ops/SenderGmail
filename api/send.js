const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed"
        });
    }

    try {

        const {
            to,
            subject,
            name,
            role,
            email,
            whatsapp
        } = req.body;

        const templatePath = path.join(
            process.cwd(),
            "templates",
            "register.html"
        );

        let html = fs.readFileSync(templatePath, "utf8");

        html = html
            .replace(/{{NAME}}/g, name)
            .replace(/{{ROLE}}/g, role)
            .replace(/{{EMAIL}}/g, email)
            .replace(/{{WHATSAPP}}/g, whatsapp)
            .replace(/{{MEMBER_ID}}/g, "LEGION-" + Date.now())
            .replace(
                /{{DATE}}/g,
                new Date().toLocaleDateString("id-ID")
            );

        const transporter = nodemailer.createTransport({

            service: "gmail",

            auth: {

                user: process.env.EMAIL_USER,

                pass: process.env.EMAIL_PASS

            }

        });

        await transporter.sendMail({

            from: `"PT Legion Teknologi" <${process.env.EMAIL_USER}>`,

            to,

            subject,

            html

        });

        return res.status(200).json({

            success: true,

            message: "✅ Email berhasil dikirim."

        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({

            success: false,

            message: err.message

        });

    }

};
