import { GoogleGenerativeAI } from "@google/generative-ai";
import md from "markdown-it";

// Initialize the model
const API_KEY = "AIzaSyBHTWteUDD-aJMm2Dzy2uupeSN_Qg6yQa0";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

let history = [];

async function getResponse(prompt) {
  const chat = await model.startChat({ history: history });
  const result = await chat.sendMessage(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
  return text;
}

// user chat div
export const userDiv = (data) => {
  return `
  <!-- User Chat -->
          <div class="flex items-center gap-2 justify-start">
            <img
              src="user.jpg"
              alt="user icon"
              class="w-10 h-10 rounded-full"
            />
            <p class="bg-gemDeep text-white p-1 rounded-md shadow-md  ">
              ${data}
            </p>
          </div>
  `;
};

// AI Chat div
export const aiDiv = (data) => {
  return `
  <!-- AI Chat -->
          <div class="flex gap-2 justify-end">
            <pre class="bg-gemRegular/40 text-gemDeep p-1 rounded-md shadow-md whitespace-pre-wrap">
              ${data}
            </pre>
            <img
              src="chat-bot.jpg"
              alt="user icon"
              class="w-10 h-10 rounded-full"
            />
          </div>
  `;
};

async function initialPrompt() {
  const initialMessage = `You are Rhea, a supportive chatbot designed to offer guidance, support, and assistance to women in tech seeking career advancement, especially those who are just starting out their careers. Your primary goal is to empower women in tech by providing them with resources, mentorship opportunities, and a supportive community. 

Your tasks include:
1. Providing information on career opportunities in the tech industry.
2. Sharing inspirational articles and videos tailored to women in tech.
3. Facilitating connections within a supportive community through Slack.
4. Offering 1:1 mentorship opportunities through Slack and Firebase.
5. Assisting users with any questions or challenges they may face in their tech careers.

Remember to be empathetic, encouraging, and understanding in your interactions with users, and tailor your responses to address the specific needs and concerns of women in tech.

**Prompt:**
Hello! 👋 It's wonderful to have you join our community of ambitious women in tech! I'm Rhea, and I'll be your companion as you navigate your career journey.
Feel free to ask me anything from exploring career paths in tech to seeking advice on overcoming challenges. I'm here to listen, guide, and cheer you on every step of the way! ✨`;

  const aiResponse = await getResponse(initialMessage);
  let md_text = md().render(aiResponse);
  document.getElementById("chat-container").innerHTML += aiDiv(md_text);
}

window.onload = initialPrompt;

async function handleSubmit(event) {
  event.preventDefault();

  let userMessage = document.getElementById("prompt");
  const chatArea = document.getElementById("chat-container");

  var prompt = userMessage.value.trim();
  if (prompt === "") {
    return;
  }

  console.log("user message", prompt);

  chatArea.innerHTML += userDiv(prompt);
  userMessage.value = "";
  const aiResponse = await getResponse(prompt);
  let md_text = md().render(aiResponse);
  chatArea.innerHTML += aiDiv(md_text);

  let newUserRole = {
    role: "user",
    parts: prompt,
  };
  let newAIRole = {
    role: "model",
    parts: aiResponse,
  };

  history.push(newUserRole);
  history.push(newAIRole);

  console.log(history);
}

const chatForm = document.getElementById("chat-form");
chatForm.addEventListener("submit", handleSubmit);

chatForm.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) handleSubmit(event);
});
