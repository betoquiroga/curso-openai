import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
});

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "Cuales son los colores de la bandera de Colombia?"
        }
      ]
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  response_format: {
    "type": "text"
  },
});

console.log(response.choices[0].message)