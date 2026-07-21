const nodemailer = require("nodemailer");

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
            html

        } = req.body;

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

            message: "Email berhasil dikirim."

        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({

            success: false,

            message: "Gagal mengirim email."

        });

    }

};
