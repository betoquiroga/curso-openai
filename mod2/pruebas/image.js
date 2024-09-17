import dotenv from "dotenv"
import OpenAI from "openai"

const mensaje = "Un gato corriendo una maratón"

dotenv.config();
const openai_key = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openai_key
});

const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: mensaje,
})

console.log(response)