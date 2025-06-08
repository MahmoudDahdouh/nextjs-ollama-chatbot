'use client'
import Header from '@/components/layout/header'
import Messages from '@/components/layout/messages'
import SendMessage from '@/components/layout/send-message'
import WelcomeMsg from '@/components/layout/welcome-msg'
import messagesStore from '@/stores/messages-store'

export default function Home() {
    const { messages } = messagesStore()
    return (
        <div className="max-w-3xl container py-4 h-screen">
            <div className="flex flex-col h-full gap-1">
                <Header />
                {messages?.length === 0 && <WelcomeMsg />}
                <Messages />
                <SendMessage />
            </div>
        </div>
    )
}
