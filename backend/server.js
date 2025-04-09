import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI with a free alternative API key
const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY || 'AIzaSyBxyAFpFYea-M1qM5H09JkxQ6_zln489fg',
  baseURL: 'https://api.free-ai-provider.com/v1', // Replace with actual free AI API endpoint
});

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // For demonstration, we'll use a simple response system
    // In production, you would integrate with your chosen AI provider
    const response = await generateResponse(message);

    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Simple response generation function
async function generateResponse(message) {
  // Simulate AI response based on keywords
  const lowercaseMessage = message.toLowerCase();
  
  if (lowercaseMessage.includes('eco') || lowercaseMessage.includes('sustainable')) {
    return {
      text: "I can help you find eco-friendly products! We have a wide range of sustainable items including clothing, home goods, and electronics. What specific category interests you?",
      suggestions: [
        "Eco-friendly clothing",
        "Sustainable home goods",
        "Green electronics"
      ]
    };
  }
  
  if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost')) {
    return {
      text: "Our eco-friendly products are competitively priced. While they might cost slightly more upfront, they often save money in the long run through durability and energy efficiency.",
      suggestions: [
        "View price comparison",
        "See cost benefits",
        "Check current deals"
      ]
    };
  }
  
  if (lowercaseMessage.includes('material') || lowercaseMessage.includes('made')) {
    return {
      text: "Our products use sustainable materials like organic cotton, recycled plastics, bamboo, and other eco-friendly alternatives. Each product listing includes detailed material information.",
      suggestions: [
        "Learn about materials",
        "View certifications",
        "Check sourcing"
      ]
    };
  }

  // Default response
  return {
    text: "I'm here to help you with sustainable shopping! You can ask me about our eco-friendly products, materials, pricing, or environmental impact.",
    suggestions: [
      "Browse eco-friendly products",
      "Learn about sustainability",
      "Check our impact"
    ]
  };
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});