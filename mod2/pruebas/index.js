import dotenv from "dotenv"
import OpenAI from "openai"

const mensaje = "Qué quires jugar hoy?"

dotenv.config();
const openai_key = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openai_key
});

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini-2024-07-18",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "text",
          text: "Actúa como un padre cariñoso"
        }
      ]
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: mensaje
        }
      ]
    }
  ],
  temperature: 1,
  max_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  response_format: {
    "type": "text"
  },
})

console.log(response.choices[0])