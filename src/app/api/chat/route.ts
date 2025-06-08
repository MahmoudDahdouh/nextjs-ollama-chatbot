import { createOllama } from 'ollama-ai-provider'
import { streamText } from 'ai'

const ollama = createOllama({
    baseURL: 'http://127.0.0.1:11434/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

const model = ollama('llama3.2:1b')

export async function POST(req: Request) {
    const { messages } = await req.json()

    const result = await streamText({
        model: model,
        messages: messages,
    })

    return result.toDataStreamResponse({
        getErrorMessage: errorHandler,
    })
}

export function errorHandler(error: unknown) {
    if (error == null) {
        return 'unknown error'
    }

    if (typeof error === 'string') {
        return error
    }

    if (error instanceof Error) {
        return error.message
    }

    return JSON.stringify(error)
}
