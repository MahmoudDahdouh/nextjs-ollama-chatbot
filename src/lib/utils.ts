import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function convertToRawString(markdown: React.ReactNode) {
    let rawString = ''
    if (Array.isArray(markdown)) {
        rawString = markdown
            .map((child) =>
                typeof child === 'string'
                    ? child
                    : typeof child?.props?.children === 'string'
                    ? child.props.children
                    : ''
            )
            .join('')
    } else if (typeof markdown === 'string') {
        rawString = markdown
    }

    return rawString
}
