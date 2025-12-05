import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type ResponseLength = "normal" | "detailed" | "short";

interface ChatInputProps {
  onSend: (message: string, responseLength: ResponseLength) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const [responseLength, setResponseLength] = useState<ResponseLength>("normal");

  const responseLengthLabels: Record<ResponseLength, string> = {
    normal: "Normal",
    detailed: "Daha Detaylı",
    short: "Daha Kısa",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim(), responseLength);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative bg-card rounded-2xl shadow-card border border-border overflow-hidden">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="İslam hakkında sorunuzu yazın..."
          disabled={disabled}
          className="min-h-[60px] max-h-[200px] pr-28 resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] placeholder:text-muted-foreground/60"
          rows={1}
        />
        <div className="absolute right-3 bottom-3 flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="h-9 px-2 text-xs gap-1 border-border/50 bg-background/50"
              >
                {responseLengthLabels[responseLength]}
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setResponseLength("short")}>
                Daha Kısa
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setResponseLength("normal")}>
                Normal
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setResponseLength("detailed")}>
                Daha Detaylı
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || disabled}
            className="h-9 w-9 rounded-xl bg-primary hover:bg-emerald-light text-primary-foreground transition-all duration-200 disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
