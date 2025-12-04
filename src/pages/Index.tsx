import { useState, useRef, useEffect } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import WelcomeScreen from "@/components/WelcomeScreen";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// Simulated responses for demo (will be replaced with AI integration)
const simulatedResponses: Record<string, string> = {
  default: `Thank you for your question. Based on the Qur'anic sources and classical Tafsir interpretations, I can provide you with a comprehensive understanding.

The Qur'an emphasizes the importance of seeking knowledge and understanding. As Allah says in Surah Al-Alaq (96:1-5): "Read in the name of your Lord who created..."

This verse highlights the fundamental Islamic principle that knowledge and learning are acts of worship. The scholars of Tafsir, including Ibn Kathir and At-Tabari, have extensively discussed this topic.

Would you like me to elaborate on any specific aspect of this topic?`,
};

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: simulatedResponses.default,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-background geometric-pattern flex flex-col">
      <ChatHeader onReset={handleReset} hasMessages={messages.length > 0} />

      <main className="flex-1 container max-w-4xl mx-auto px-4 py-6 flex flex-col">
        {messages.length === 0 ? (
          <WelcomeScreen onSampleQuestion={handleSend} />
        ) : (
          <div className="flex-1 space-y-6 pb-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            {isLoading && (
              <ChatMessage role="assistant" content="" isLoading />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <footer className="sticky bottom-0 bg-background/80 backdrop-blur-md border-t border-border py-4">
        <div className="container max-w-4xl mx-auto px-4">
          <ChatInput onSend={handleSend} disabled={isLoading} />
          <p className="text-xs text-muted-foreground text-center mt-3">
            TefsirBot provides information from reliable Islamic sources. Always verify with scholars for important matters.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
