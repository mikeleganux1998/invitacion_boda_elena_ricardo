const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "DDLV Global | Congreso Internacional 2025",
        description: "Únete al Congreso DDLV Global 2025, una experiencia espiritual transformadora que recorrerá diferentes países este año.",
        keywords: "DDLV Global, Congreso 2025, fe, espiritualidad, eventos cristianos",
        url: "https://www.ddlvglobal.com/",
        image: "/public/images/1.jpg",
    });
});

router.get("/index", (req, res) => {
    res.render("index", {
        title: "DDLV Global | Congreso Internacional 2025",
        description: "Únete al Congreso DDLV Global 2025, una experiencia espiritual transformadora que recorrerá diferentes países este año.",
        keywords: "DDLV Global, Congreso 2025, fe, espiritualidad, eventos cristianos",
        url: "https://www.ddlvglobal.com/",
        image: "/public/images/1.jpg",
    });
});

module.exports = router;
