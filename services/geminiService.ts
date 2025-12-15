import { GoogleGenAI } from "@google/genai";

// API Key provided by user
const API_KEY = "AIzaSyCC6xYm1S3mo-wNgYy4RsY6Q6b_IDwu8KI";

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `Sən Eratravel turizm şirkətinin süni intellekt köməkçisisən. 
        Adın "Eratravel AI".
        Vəzifən müştərilərin suallarını Azərbaycan dilində, nəzakətli və peşəkar şəkildə cavablandırmaqdır.
        
        Şirkət haqqında məlumatlar:
        - Bizim xidmətlər: Şəxsi turlar, VIP transfer, Otel rezervasiyası, Korporativ tədbirlər (MICE).
        - Əlaqə nömrəsi: +994 50 444 22 00
        - Ünvan: Bakı şəhəri, Zərdabi küçəsi 55/81.
        
        Əgər müştəri qiymət soruşsa, təxmini rəqəm demə, onlardan əlaqə nömrəsini istə və ya menecerlə əlaqə saxlamağı tövsiyə et.`,
      },
    });

    return response.text || "Üzr istəyirəm, hazırda cavab verə bilmirəm.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xəta baş verdi. Zəhmət olmasa internet əlaqənizi yoxlayın.";
  }
};