const express = require("express")
const app = express()

app.get("/data", (req, res) => {
    res.json({name: "Gabe", favfood: "Salmon"})
})

app.listen(8080)