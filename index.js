const express = require("express");
const app = express();
const PORT = 3000;
 
// Arrays für Hobbies u. Einkaufliste festlegen
let hobbies = ["Tauchen", "Wandern", "Lesen"];
let einkaufliste = ["Kirschen","Birnen","Bananane","Bier"];

// GET-Endpoint für Hobbies einrichten:
app.get('/hobbies', (req, res) => {
    res.json(hobbies);
});

// GET-Endpoint für Einkaufliste einrichten:
app.get('/einkaufliste', (req, res) => {
    res.json(einkaufliste);
});
// Listener auf PORT anlegen
app.listen(PORT, () => {
    console.log(`Der Server läuft auf http://127.0.0.1:${PORT}`)})