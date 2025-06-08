# ✨ AI Chatbot using Ollama

A simple chat UI built with Next.js 14, allowing users to send messages and receive responses from an LLM loaded on Ollama locally.

## 💻 Tech Stack

-   Next.js with TypeScript
-   [Ollama](https://github.com/ollama/ollama)
-   [AI SDK UI](https://ai-sdk.dev/docs/ai-sdk-ui)
-   [Shadcn UI](https://ui.shadcn.com/)
-   **State Management:** [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

## 🎥 Demo

![ai chatbot demo](/ai-chatbot-demo.gif)

## 🛠️ Setup Instructions

Before you start, make sure you have [Ollama](https://github.com/ollama/ollama) and [`llama3.2:1b`](https://ollama.com/library/llama3.2:1b) model installed on your machine.

use `ollama list` in the terminal to list available models.

```bash
ollama list
```

check that ollama is running on http://127.0.0.1:11434

```bash
Ollama is running
```

### clone the repo

```bash
git clone https://github.com/MahmoudDahdouh/nextjs-ollama-chatbot.git
```

### install dependencies

```bash
cd nextjs-ollama-chatbot
npm install
```

### run the app

```bash
npm run dev
```

visit [`http://localhost:3000`](http://localhost:3000) to see the app

## ✍️ Author

[Mahmoud Dahdouh](https://github.com/MahmoudDahdouh)

## 📄 License

This project is licensed under the MIT License.
