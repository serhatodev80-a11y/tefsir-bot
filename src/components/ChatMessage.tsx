import { cn } from "@/lib/utils";
import { BookOpen, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isLoading?: boolean;
}

const ChatMessage = ({ role, content, isLoading }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-4 animate-slide-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-gradient-to-br from-gold to-gold-light text-emerald-dark"
        )}
      >
        {isUser ? (
          <User className="w-5 h-5" />
        ) : (
          <BookOpen className="w-5 h-5" />
        )}
      </div>

      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-5 py-4 shadow-soft",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-md"
            : "bg-card text-card-foreground rounded-tl-md border border-border"
        )}
      >
        {isLoading ? (
          <div className="flex gap-1.5">
            <span className="w-2 h-2 bg-current rounded-full animate-pulse-soft" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-current rounded-full animate-pulse-soft" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-current rounded-full animate-pulse-soft" style={{ animationDelay: "300ms" }} />
          </div>
        ) : (
          <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
