const express = require("express");
const router = express.Router();
const module = require("module");

router.get('/soups', (req, res) => {
    const soups = ['Tomato soup', 'Onion soup', 'Potato soup'];
    res.json(soups);
});

router.get('/salads', (req, res) => {
    const salads = ['Greek Salad', 'Cesar salad', 'Caprese salad'];
    res.json(salads);
});

module.exports = router;