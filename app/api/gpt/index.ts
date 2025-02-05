import { GoogleGenerativeAI } from "@google/generative-ai";
import { createUserPrompt, system_prompt } from "./prompt";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: system_prompt,
});

export default async function run({
  topic,
  outline,
  template,
  category,
  aiPrompt,
}: {
  topic: string;
  outline: string;
  template: string;
  category: string;
  aiPrompt: string;
}) {
  const chat = model.startChat({
    // history: [
    //   {
    //     role: "user",
    //     parts: [
    //       {
    //         text: createUserPrompt({
    //           topic,
    //           outline,
    //           template,
    //           category,
    //           aiPrompt,
    //         }),
    //       },
    //     ],
    //   },
    // ],
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
  });

  const result = await chat.sendMessage(
    createUserPrompt({
      topic,
      outline,
      template,
      category,
      aiPrompt,
    })
  );

  return result.response.text();
}
