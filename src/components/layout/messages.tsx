'use client'
import messagesStore from '@/stores/messages-store'
import UserMessage from './user-message'
import SystemMessage from './system-message'
import { useEffect, useRef } from 'react'
import { UIMessage } from 'ai'

const Messages = () => {
    const { messages, status } = messagesStore()
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to the bottom when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView()
        }
    }, [messages])

    return (
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="flex flex-col ">
                {messages?.map((message: UIMessage) =>
                    message.role === 'user' ? (
                        <UserMessage
                            key={message.id}
                            message={message.content}
                        />
                    ) : (
                        <SystemMessage
                            key={message.id}
                            message={message.content}
                        />
                    )
                )}
                {status === 'submitted' && (
                    <SystemMessage message={'Thinking...'} />
                )}
                {status === 'error' && (
                    <h2 className="text-red-500">
                        Something went wrong!. Please try again later
                    </h2>
                )}
            </div>
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Messages
