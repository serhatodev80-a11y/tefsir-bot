import { BookOpen, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onReset: () => void;
  hasMessages: boolean;
}

const ChatHeader = ({ onReset, hasMessages }: ChatHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-lg rotate-3 opacity-30" />
            <div className="absolute inset-0 bg-primary rounded-lg -rotate-3 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="font-serif text-xl font-semibold text-foreground">
              Tefsir<span className="text-gold">Bot</span>
            </h1>
          </div>
        </div>

        {hasMessages && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-muted-foreground hover:text-foreground gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            New Chat
          </Button>
        )}
      </div>
    </header>
  );
};

export default ChatHeader;
