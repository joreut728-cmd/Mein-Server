import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import users from "../data/users.json";

const app = express();
const PORT = 3000;

const registeredUsers = new Map<string, string>([
  ["alice", "1234"],
  ["bob", "secret"],
  ["charlie", "qwerty"],
]);

const sessions = new Map<string, string>();

const tweets: {
  id: number;
  text: string;
  author: string;
}[] = [];

app.use(express.json());
app.use(cookieParser());

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

app.post("/auth/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  const storedPassword = registeredUsers.get(username);

  if (!storedPassword || storedPassword !== password) {
    return res.status(401).json({
      error: "Invalid credentials",
    });
  }

  const sessionId = crypto.randomUUID();

  sessions.set(sessionId, username);

  res.cookie("sessionId", sessionId, {
    httpOnly: true,
  });

  res.json({
    message: "Login succeeded",
  });
});