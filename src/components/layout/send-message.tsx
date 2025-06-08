'use client'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { SendIcon } from 'lucide-react'
import { useChat } from '@ai-sdk/react'
import { useEffect } from 'react'
import messagesStore from '@/stores/messages-store'

const SendMessage = () => {
    let { input, handleInputChange, handleSubmit, messages, status } = useChat({
        api: '/api/chat',
    })

    const { setMessages, setStatus } = messagesStore()

    useEffect(() => {
        setMessages(messages)
    }, [messages])

    useEffect(() => {
        setStatus(status)
    }, [status])

    return (
        <div className="flex flex-col gap-y-4">
            <div className="border-2 border-gray-200 rounded-2xl bg-gray-50 p-2 focus-within:border-gray-500">
                <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                    <Textarea
                        autoFocus
                        rows={3}
                        placeholder="Send a message..."
                        value={input}
                        name="message"
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit(e)
                            }
                        }}
                        className="border-none shadow-none focus-visible:ring-0 !text-base resize-none max-h-20"
                    />
                    <Button
                        size="icon"
                        className="self-end"
                        type="submit"
                        disabled={!input || status === 'streaming'}
                    >
                        <SendIcon />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SendMessage
