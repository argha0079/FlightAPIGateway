import express from "express";

const app = express();
const PORT = 3005;

app.get("/home", (req, res) => {
    res.json({message: 'OK'});
})
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

