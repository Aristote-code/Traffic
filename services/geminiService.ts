import { GoogleGenAI } from "@google/genai";
import { Alert } from "../types";

// Note: In a real app, strict error handling and loading states would be managed by the caller.
export const analyzeTrafficIncidents = async (alerts: Alert[]): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. Returning mock analysis.");
    return "API Key missing. Unable to generate AI analysis. Please configure the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Prepare a summary of current alerts for the model
    const alertsSummary = alerts.map(a => 
      `- [${a.type}] at ${a.location} (${a.timeAgo}): ${a.description}. verified: ${a.verified}`
    ).join('\n');

    const prompt = `
      You are an advanced Traffic Control AI Assistant for the Kigali Police Department.
      Analyze the following list of active traffic incidents and provide a concise, tactical summary for the dispatch team.
      
      Incidents:
      ${alertsSummary}

      Please provide:
      1. A "Traffic Threat Level" (Low, Medium, Critical).
      2. Key areas requiring immediate police presence.
      3. A suggested diversion strategy for the most critical blockage.
      
      Keep the response under 150 words and format it clearly.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "No analysis could be generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System currently offline. Unable to reach AI services.";
  }
};