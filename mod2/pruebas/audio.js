import fs from "fs";
import path from "path";
import OpenAI from "openai";
import dotenv from "dotenv";

const mensaje = "En español nadie explica mejor que e-d-tim"

dotenv.config();
const openai_key = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: openai_key
});

const speechFile = path.resolve("./speech.mp3");

async function main() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "nova",
    input: mensaje,
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}
main();