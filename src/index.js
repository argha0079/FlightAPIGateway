import express from "express";
import morgan from "morgan";
import { createProxyMiddleware } from "http-proxy-middleware";
import { rateLimit } from "express-rate-limit";
const app = express();
const PORT = 3005;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 3,
})

app.use(morgan('combined'));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/bookingservice", createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true }))

app.get("/home", (req, res) => {
    res.json({message: 'OK'});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

