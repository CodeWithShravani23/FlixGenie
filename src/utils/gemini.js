import { GoogleGenAI } from "@google/genai";
console.log("Gemini API Key:", process.env.REACT_APP_GEMINI_API_KEY);
const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });
export default ai;