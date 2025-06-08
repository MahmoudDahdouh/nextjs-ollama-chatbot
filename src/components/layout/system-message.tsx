import { Check, Copy, Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { CodeBlock } from './code-block'
import React, { useState } from 'react'
import { convertToRawString } from '@/lib/utils'
import 'highlight.js/styles/github.css'

interface SystemMessageProps {
    message: string
}

const SystemMessage = ({ message }: SystemMessageProps) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(message)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="flex">
            <div className="border rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Sparkles />
            </div>
            <div className="flex-1 px-3 py-2 w-full">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                        code({ className, children }) {
                            let rawString = convertToRawString(children)
                            return (
                                <CodeBlock
                                    className={className}
                                    value={children}
                                    raw={rawString}
                                />
                            )
                        },
                        ol({ children }) {
                            return (
                                <ol className="list-decimal list-outside ml-6">
                                    {children}
                                </ol>
                            )
                        },
                        ul({ children }) {
                            return (
                                <ul className="list-disc list-outside ml-6">
                                    {children}
                                </ul>
                            )
                        },
                        li({ children }) {
                            return <li className="mb-2">{children}</li>
                        },
                    }}
                >
                    {message}
                </Markdown>

                <Button
                    size="sm"
                    disabled={copied}
                    variant="ghost"
                    className="rounded-sm cursor-pointer mt-2"
                    onClick={handleCopy}
                >
                    {copied ? (
                        <>
                            copied
                            <Check className="text-gray-400" />
                        </>
                    ) : (
                        <Copy className="text-gray-400" />
                    )}
                </Button>
            </div>
        </div>
    )
}

export default SystemMessage
