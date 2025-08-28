const Confirmation = require('../models/confirmation.model');

const sendWhatsapp = async (req, res) => {
    const { name, email, phone, confirmation, notes } = req.body;

    try {
        const existing = await Confirmation.findOne({ phone });

        if (existing) {
            return res.json({
                success: true,
                message: "Ya recibimos tu confirmación, ¡gracias!"
            });
        }

        const newConfirmation = new Confirmation({ name, email, phone, confirmation, notes });
        await newConfirmation.save();

        const token = process.env.WHATSAPP_TOKEN;
        const fromNumberId = process.env.WHATSAPP_PHONE_ID;
        const to = process.env.CLIENT_PHONE;

        const message = `👋 Hola, soy ${name}.
Mi confirmación es: ${confirmation}.
📧 Email: ${email}
📱 Tel: ${phone}
📝 Nota: ${notes || "Sin notas"}`;

        const response = await fetch(`https://graph.facebook.com/v22.0/${fromNumberId}/messages`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messaging_product: "whatsapp",
                to,
                type: "text",
                text: { body: message }
            })
        });

        const data = await response.json();
        console.log("Respuesta WhatsApp:", data);

        res.json({ success: true, message: "Confirmación recibida, gracias.", data });

    } catch (error) {
        console.error("Error al enviar WhatsApp:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { sendWhatsapp };