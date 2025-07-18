import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(import.meta.env.VITE_VAPI_API_KEY);
const assistantId = import.meta.env.VITE_ASSISTANT_ID;

export const startAssistant = async (assistantOverrides) => {
  try {
    return await vapi.start(assistantId, assistantOverrides);
  } catch (error) {
    console.error("Failed to start assistant:", error);
    throw error;
  }
};

export const stopAssistant = () => {
  try {
    vapi.stop();
  } catch (error) {
    console.error("Failed to stop assistant:", error);
  }
};
