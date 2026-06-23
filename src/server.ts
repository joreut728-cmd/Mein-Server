import express, { Request, Response } from "express";
import users from "../data/users.json";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server läuft!");
});

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).send("Syntax!");
});

app.get("/echo", (req: Request, res: Response) => {
  res.status(200).send("Echo");
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/greet", (req: Request, res: Response) => {
  const name = req.query.name as string;
  const lang = req.query.lang;

  const message =
    lang === "en" ? `Hello ${name}` : `Hallo ${name}`;

  res.status(200).json({ message });
});

app.get("/users", (req: Request, res: Response) => {
  res.status(200).json(users);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});