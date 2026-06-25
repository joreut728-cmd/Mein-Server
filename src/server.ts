import express from "express";
import tweetRoutes from "./routes/tweet.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tweets", tweetRoutes);

app.get("/", (req, res) => {
  res.send("Server läuft!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});