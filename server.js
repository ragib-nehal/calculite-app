import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(__dirname));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/api/joke", async (_req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        {
          role: "user", 
          content: "Tell a short, clean, one-line math joke. No preface."
        }
      ], 
      max_tokens: 50, 
      temperature: 0.8
    });

    const joke = completion.choices?.[0]?.message?.content?.trim() || "Math joke unavilable.";

    res.json({ joke });
  } catch(err) {
    console.error("OpenAI API Error:", err);
    res.status(500).json({
      joke: "Why was the math book? It had too many problems."
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
