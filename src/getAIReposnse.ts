
import { Groq } from "groq-sdk";

export const getGroqResponse = async (prompt: string) => {
    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY
    });

    try {
        const response = await groq.chat.completions.create({
            model: "mixtral-8x7b-32768",  // or "llama2-70b-4096"
            messages: [{ role: "user", content: prompt }],
            max_tokens: 1024,
            temperature: 0.5,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error getting response from Groq:', error);
        throw error;
    }
};

// Example usage:

