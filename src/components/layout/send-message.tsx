import QuestionCards from './question-cards'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { SendIcon } from 'lucide-react'

const SendMessage = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <QuestionCards />
            <div className="border-2 border-gray-200 rounded-2xl bg-gray-50 p-2 focus-within:border-gray-500">
                <form className="flex flex-col gap-y-2">
                    <Textarea rows={3} placeholder="Send a message..." className="border-none shadow-none focus-visible:ring-0 !text-base resize-none" />
                    <Button size='icon' className="self-end">
                        <SendIcon />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SendMessage