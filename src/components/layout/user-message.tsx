interface UserMessageProps {
    message: string
}
const UserMessage = ({ message }: UserMessageProps) => {
    return (
        <div className="w-fit self-end bg-gray-950 text-white rounded-xl px-3 py-2">
            {message}
        </div>
    )
}

export default UserMessage
