import { BookOpen, Sparkles, MessageCircle } from "lucide-react";

interface WelcomeScreenProps {
  onSampleQuestion: (question: string) => void;
}

const sampleQuestions = [
  "'Bismillah'ın anlamı ve önemi nedir?",
  "Kur'an sabır (Sabr) kavramını nasıl açıklar?",
  "Kur'an'a göre İslam'ın şartları nelerdir?",
  "Tevekkül (Allah'a güven) kavramını açıklar mısın?",
];

const WelcomeScreen = ({ onSampleQuestion }: WelcomeScreenProps) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 animate-fade-in">
      {/* Logo and Title */}
      <div className="text-center mb-10">
        <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-2xl rotate-3 opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-light rounded-2xl -rotate-3" />
          <BookOpen className="relative w-10 h-10 text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
          Tefsir<span className="text-gradient-gold">Bot</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
          Güvenilir tefsir ve Kur'an kaynaklarından İslami bilgileri keşfetmeniz için AI asistanınız
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-gold" />
          <span>Sade açıklamalar</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4 text-gold" />
          <span>Güvenilir kaynaklar</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MessageCircle className="w-4 h-4 text-gold" />
          <span>Net cevaplar</span>
        </div>
      </div>

      {/* Sample Questions */}
      <div className="w-full max-w-2xl">
        <p className="text-sm text-muted-foreground text-center mb-4">
          Şunları sorabilirsiniz:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sampleQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => onSampleQuestion(question)}
              className="group text-left p-4 rounded-xl bg-card border border-border hover:border-gold/50 hover:shadow-soft transition-all duration-200"
            >
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                {question}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;