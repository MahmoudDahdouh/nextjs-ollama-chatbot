'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
    className?: string
    value: React.ReactNode
    raw?: string
}

export const CodeBlock = ({ className, value, raw }: Props) => {
    const isInline = !className?.includes('language-')
    const language = className?.split('language-')[1] || 'code'

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const textToCopy = raw || ''
        navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    if (isInline)
        return <code className="bg-gray-200 py-0.5 px-1 rounded">{value}</code>

    return (
        <div className="bg-gray-200 rounded-lg overflow-hidden my-2">
            <div className="flex justify-between bg-gray-950">
                <p className=" text-white px-2 py-1">{language}</p>
                <Button
                    size="sm"
                    disabled={copied}
                    variant="link"
                    className="text-white"
                    onClick={handleCopy}
                >
                    {copied ? (
                        <>
                            copied <Check size={16} />
                        </>
                    ) : (
                        <Copy size={16} />
                    )}
                </Button>
            </div>
            <pre className="p-4 overflow-auto">
                <code className="block overflow-x-auto whitespace-pre-wrap break-words">
                    {value}
                </code>
            </pre>
        </div>
    )
}
