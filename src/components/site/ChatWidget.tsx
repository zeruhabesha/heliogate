import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { generateAnswer, getSuggestions } from "@/lib/chatKnowledge";
import { Lang } from "@/i18n/translations";

type Msg = { role: "user" | "bot"; content: string; ts: number };

export const ChatWidget = () => {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Greet on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", content: t("chat.greet"), ts: Date.now() }]);
    }
  }, [open]); // eslint-disable-line

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q, ts: Date.now() }]);
    setInput("");
    setThinking(true);

    // Simulate generation latency for natural feel
    const delay = 500 + Math.min(q.length * 18, 900);
    window.setTimeout(() => {
      const answer = generateAnswer(q, lang as Lang);
      setMessages((m) => [...m, { role: "bot", content: answer, ts: Date.now() }]);
      setThinking(false);
      inputRef.current?.focus();
    }, delay);
  };

  const suggestions = getSuggestions(lang as Lang);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 rtl:right-auto rtl:left-5 sm:rtl:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-foreground text-primary-foreground hover:bg-[hsl(var(--signal))] hover:text-[hsl(var(--signal-foreground))] transition-all shadow-2xl group"
      >
        {open ? (
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <>
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[hsl(var(--signal))] rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed z-50 bg-card border border-hairline shadow-2xl animate-fade-in flex flex-col
                     inset-x-3 bottom-20 top-20
                     sm:inset-auto sm:bottom-24 sm:right-6 sm:rtl:right-auto sm:rtl:left-6
                     sm:w-[400px] sm:h-[560px] sm:max-h-[calc(100vh-8rem)]"
        >
          {/* Header */}
          <div className="px-4 sm:px-5 py-4 border-b border-hairline flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-8 h-8 bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[hsl(var(--signal))] rounded-full ring-2 ring-card" />
              </div>
              <div className="min-w-0">
                <p className="font-serif-display text-base leading-tight truncate">{t("chat.title")}</p>
                <p className="text-[10px] text-muted-foreground font-mono-tag uppercase tracking-[0.18em] truncate">
                  {t("chat.sub")}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground transition flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-foreground text-primary-foreground"
                      : "bg-muted text-foreground border border-hairline"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {thinking && (
              <div className="flex justify-start">
                <div className="bg-muted border border-hairline px-3.5 py-3 inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Suggestions only when empty */}
            {messages.length <= 1 && !thinking && (
              <div className="pt-2">
                <p className="eyebrow mb-2">{t("chat.suggest")}</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => send(s)}
                      className="text-[11px] font-mono-tag uppercase tracking-[0.14em] border border-hairline hover:border-foreground hover:bg-foreground hover:text-primary-foreground px-2.5 py-1.5 transition-all text-left"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-hairline p-3 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.placeholder")}
              className="flex-1 bg-transparent border border-hairline focus:border-foreground outline-none px-3 py-2.5 text-sm transition-colors"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send"
              className="w-10 h-10 flex items-center justify-center bg-foreground text-primary-foreground hover:bg-[hsl(var(--signal))] hover:text-[hsl(var(--signal-foreground))] transition disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </form>

          <div className="px-4 py-2 border-t border-hairline">
            <p className="text-[10px] text-muted-foreground font-mono-tag uppercase tracking-[0.18em]">
              {t("chat.foot")} ·{" "}
              <a href="mailto:inquiries@heliogate.com" className="hover:text-foreground transition">
                inquiries@heliogate.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
