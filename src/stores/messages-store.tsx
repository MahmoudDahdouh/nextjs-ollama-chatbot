import { UIMessage } from 'ai'
import { create } from 'zustand'

interface MessageStoreState {
    messages?: UIMessage[]
    setMessages: (messages: UIMessage[]) => void
    status: string
    setStatus: (status: string) => void
}

const messagesStore = create<MessageStoreState>((set) => ({
    messages: [],
    setMessages: (messages: UIMessage[]) => set({ messages }),
    status: '',
    setStatus: (status: string) => set({ status }),
}))

export default messagesStore
