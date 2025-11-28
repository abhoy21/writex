"use server";

import { GoogleGenAI } from "@google/genai";
import { system_prompt, createUserPrompt } from "@/actions/prompt";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth/auth";
import { revalidatePath } from "next/cache";

export async function generateAIContent(data: {
  topic: string;
  outline: string;
  template: string;
  category: string;
  aiPrompt: string;
}) {
  const session = await auth();
  if (!session || !session.user?.id) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const { topic, outline, template, category, aiPrompt } = data;

    const prompt = createUserPrompt({
      topic,
      outline,
      template,
      category,
      aiPrompt,
    });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: system_prompt,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 2048,
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    const generatedText = result.text || "";

    if (!generatedText) {
      return { success: false, error: "No content generated" };
    }

    // Save to database
    await prisma.content.create({
      data: {
        userId: session.user.id,
        template: template,
        topic: topic,
        prompt: prompt,
        response: generatedText,
      },
    });

    revalidatePath("/history");
    return { success: true, text: generatedText };
  } catch (error) {
    console.error("Error generating content:", error);
    return { success: false, error: "Failed to generate content" };
  }
}
