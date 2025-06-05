import { Bot } from "lucide-react"

const Header = () => {
    return (
        <div className="flex items-center gap-4 justify-center">
            <Bot size={48} />
            <h1 className="text-2xl font-bold">AI Chatbot</h1>
        </div>
    )
}

export default Header