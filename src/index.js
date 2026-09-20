import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));

app.use("/bookingservice", createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true }))

app.get("/home", (req, res) => {
    res.json({message: 'OK'});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

