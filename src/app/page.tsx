import Header from "@/components/layout/header";
import Messages from "@/components/layout/messages";
import SendMessage from "@/components/layout/send-message";
import WelcomeMsg from "@/components/layout/welcome-msg";

export default function Home() {
  return (
    <div className="max-w-3xl container py-4 h-screen">
      <div className="flex flex-col h-full">
        <Header />
        <WelcomeMsg />
        <Messages />
        <SendMessage />
      </div>
    </div>
  )
}
