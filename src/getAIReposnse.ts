// import axios from 'axios';
import { OpenAI } from "openai";
import dotenv from "dotenv"
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API,
    organization: process.env["OPENAI_ORG"]
});

export const getChatGPTResponse = async (prompt: string) => {


    try {
        const response = await openai.chat.completions.create({
            // model: "text-davinci-003",
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 1024,
            temperature: 0.5,
        });
        return response.choices[0].message.content
    } catch (error) {
        console.error('Error getting response from ChatGPT:', error);
        throw error;
    }
    
}

// Example usage:

