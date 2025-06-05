import { Copy, Sparkles } from "lucide-react"
import { Button } from "../ui/button"

const Messages = () => {
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col ">
                <div className="w-fit self-end bg-gray-950 text-white rounded-xl px-3 py-2">
                    Why the sky is blue?
                </div>
                <div className="flex">
                    <div className="border rounded-full h-12 w-12 flex items-center justify-center">
                        <Sparkles />
                    </div>
                    <div className="flex-1 px-3 py-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente corrupti maiores nesciunt veniam consequuntur magni ab non alias corporis, hic eveniet commodi odit, sit harum est, dolore asperiores similique ad?</p>
                        <ul>
                            <li>1. test</li>
                            <li>2. test</li>
                            <li>3. test</li>
                        </ul>
                        <Button size="sm" variant='ghost' className="rounded-sm cursor-pointer mt-2">
                            <Copy className="text-gray-400" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages