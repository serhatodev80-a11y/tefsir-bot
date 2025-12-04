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
  default: `Sorunuz için teşekkür ederim. Kur'an kaynakları ve klasik tefsir yorumlarına dayanarak size kapsamlı bir anlayış sunabilirim.

Kur'an, bilgi ve anlayış aramanın önemini vurgular. Allah, Alak Suresi'nde (96:1-5) buyurur: "Yaratan Rabbinin adıyla oku..."

Bu ayet, bilgi ve öğrenmenin ibadetin temel bir İslami ilkesi olduğunu vurgular. İbn Kesir ve Taberi dahil tefsir alimleri bu konuyu kapsamlı bir şekilde tartışmışlardır.

Bu konunun herhangi bir yönünü daha ayrıntılı açıklamamı ister misiniz?`,
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
            TefsirBot güvenilir İslami kaynaklardan bilgi sunar. Önemli konular için her zaman alimlere danışın.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;