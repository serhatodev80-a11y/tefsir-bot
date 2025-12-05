import { BookOpen, RotateCcw, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-gold/30 text-gold hover:bg-gold/10 hover:text-gold"
              >
                <Heart className="w-4 h-4" />
                Bağış Yap
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-gold" />
                  Bağış Yap
                </DialogTitle>
                <DialogDescription className="text-base pt-2">
                  TefsirBot'u desteklemek için bağışta bulunabilirsiniz.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-foreground">Banka Hesabı</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Banka:</span> Örnek Banka</p>
                    <p><span className="text-muted-foreground">IBAN:</span> TR00 0000 0000 0000 0000 0000 00</p>
                    <p><span className="text-muted-foreground">Hesap Sahibi:</span> TefsirBot Vakfı</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Bağışlarınız TefsirBot'un geliştirilmesi ve sürdürülmesi için kullanılacaktır.
                  Allah kabul etsin.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {hasMessages && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="text-muted-foreground hover:text-foreground gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Yeni Sohbet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;