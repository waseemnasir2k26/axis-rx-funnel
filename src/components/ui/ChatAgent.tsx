import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  showCTA?: boolean;
}

const quickReplies = [
  'What is GLP-1 therapy?',
  'How much does it cost?',
  'Is this legal?',
  'How does the process work?',
];

const knowledgeBase: Record<string, { response: string; showCTA?: boolean }> = {
  'greeting': {
    response: "Hello! Welcome to AXIS RX. I'm here to help you learn about our premium GLP-1 therapy programs. We offer Semaglutide, Tirzepatide, and Retatrutide treatments at 85% below US pharmacy prices. What would you like to know?",
  },
  'what is glp-1': {
    response: "GLP-1 (Glucagon-like peptide-1) therapies are FDA-approved medications that help regulate appetite, blood sugar, and promote significant weight loss. Our treatments include:\n\n• **Semaglutide** (Single Agonist) - The proven classic, same as Ozempic®\n• **Tirzepatide** (Dual Agonist) - Enhanced results, same as Mounjaro®\n• **Retatrutide** (Triple Agonist) - Our elite protocol for maximum results\n\nThese are prescribed by licensed physicians and delivered during your Mexico visit.",
  },
  'cost': {
    response: "Our pricing is transparent with no hidden fees:\n\n• **Semaglutide** - $499 for 3 months\n• **Tirzepatide** - $899 for 3 months\n• **Retatrutide** - $1,199 for 3 months\n\nCompare this to US prices of $1,000-$1,600 PER MONTH! You save over $3,100 on a 3-month protocol.\n\nWe only require a $99 refundable deposit to reserve your spot.",
    showCTA: true,
  },
  'price': {
    response: "Our pricing is transparent with no hidden fees:\n\n• **Semaglutide** - $499 for 3 months\n• **Tirzepatide** - $899 for 3 months\n• **Retatrutide** - $1,199 for 3 months\n\nCompare this to US prices of $1,000-$1,600 PER MONTH! You save over $3,100 on a 3-month protocol.\n\nWe only require a $99 refundable deposit to reserve your spot.",
    showCTA: true,
  },
  'legal': {
    response: "Yes, this is completely legal! Here's how it works:\n\n1. You travel to Mexico (Cancún or Tijuana)\n2. You receive a prescription from a licensed Mexican physician\n3. You can legally bring a 3-month personal supply back to the US\n4. We provide all TSA-approved documentation\n\nThis is called 'medical tourism' and is perfectly legal under US regulations for personal use medications.",
  },
  'process': {
    response: "Getting started is simple:\n\n**Step 1:** Reserve your spot with a $99 refundable deposit\n\n**Step 2:** Complete a quick 5-minute health questionnaire (HIPAA compliant)\n\n**Step 3:** Brief video call with our Patient Coordinator\n\n**Step 4:** Travel to Mexico and receive your 3-month supply from a licensed physician\n\nThe whole process is smooth and professionally managed. Ready to begin?",
    showCTA: true,
  },
  'how': {
    response: "Getting started is simple:\n\n**Step 1:** Reserve your spot with a $99 refundable deposit\n\n**Step 2:** Complete a quick 5-minute health questionnaire (HIPAA compliant)\n\n**Step 3:** Brief video call with our Patient Coordinator\n\n**Step 4:** Travel to Mexico and receive your 3-month supply from a licensed physician\n\nThe whole process is smooth and professionally managed. Ready to begin?",
    showCTA: true,
  },
  'location': {
    response: "We operate in two convenient locations:\n\n**Cancún** - Hotel delivery service. Our physician comes to you!\n\n**Tijuana** - VIP clinic visit, just minutes from the San Diego border.\n\nBoth locations offer the same high-quality care and medications.",
  },
  'safe': {
    response: "Absolutely! Safety is our top priority:\n\n• All physicians are board-certified and licensed\n• We use pharmaceutical-grade medications (same active ingredients as brand names)\n• HIPAA compliant processes\n• Full medical screening before treatment\n• 100% refund if you don't medically qualify\n\nWe've safely served over 2,000 patients.",
  },
  'refund': {
    response: "Yes! Your $99 deposit is 100% refundable if:\n\n• You don't medically qualify during screening\n• You change your mind before your appointment\n\nWe believe in zero-risk enrollment. You only pay the full amount when you're completely ready and qualified.",
    showCTA: true,
  },
  'default': {
    response: "I'd be happy to help with that! For detailed questions, I recommend:\n\n1. Checking our FAQ section\n2. Starting the enrollment process where our Patient Coordinator can assist\n3. Asking me about pricing, process, or treatments\n\nIs there something specific about our GLP-1 therapy I can clarify?",
  },
};

function getResponse(input: string): { response: string; showCTA?: boolean } {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('glp') || lowerInput.includes('what is') || lowerInput.includes('therapy') || lowerInput.includes('treatment')) {
    return knowledgeBase['what is glp-1'];
  }
  if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('how much') || lowerInput.includes('$') || lowerInput.includes('money')) {
    return knowledgeBase['cost'];
  }
  if (lowerInput.includes('legal') || lowerInput.includes('law') || lowerInput.includes('allowed')) {
    return knowledgeBase['legal'];
  }
  if (lowerInput.includes('process') || lowerInput.includes('how does') || lowerInput.includes('work') || lowerInput.includes('start') || lowerInput.includes('begin') || lowerInput.includes('step')) {
    return knowledgeBase['process'];
  }
  if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('cancun') || lowerInput.includes('tijuana') || lowerInput.includes('mexico')) {
    return knowledgeBase['location'];
  }
  if (lowerInput.includes('safe') || lowerInput.includes('risk') || lowerInput.includes('quality') || lowerInput.includes('trust')) {
    return knowledgeBase['safe'];
  }
  if (lowerInput.includes('refund') || lowerInput.includes('money back') || lowerInput.includes('deposit')) {
    return knowledgeBase['refund'];
  }
  if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
    return knowledgeBase['greeting'];
  }

  return knowledgeBase['default'];
}

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi there! I'm your AXIS RX assistant. I can help you learn about our GLP-1 therapy programs, pricing, and how to get started. What would you like to know?",
      options: quickReplies,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: text.trim(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const { response, showCTA } = getResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response,
        showCTA,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 10, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-royal-blue to-indigo-600 text-white shadow-lg shadow-royal-blue/30 hover:shadow-royal-blue/50 transition-shadow flex items-center justify-center ${isOpen ? 'hidden' : ''}`}
      >
        <MessageCircle className="w-7 h-7" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-royal-blue animate-ping opacity-20" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] sm:w-[400px] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-royal-blue p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-satoshi font-bold text-white">AXIS RX Assistant</p>
                  <p className="text-xs text-white/70 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] ${
                      message.type === 'user'
                        ? 'bg-royal-blue text-white rounded-2xl rounded-br-md'
                        : 'bg-white text-slate-800 rounded-2xl rounded-bl-md shadow-sm border border-slate-100'
                    } px-4 py-3`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>

                    {/* Quick replies */}
                    {message.options && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.options.map((option, i) => (
                          <button
                            key={i}
                            onClick={() => handleQuickReply(option)}
                            className="px-3 py-1.5 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    {message.showCTA && (
                      <Link
                        to="/checkout"
                        onClick={() => setIsOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-royal-blue to-indigo-600 text-white text-sm font-bold rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <Sparkles className="w-4 h-4" />
                        Start Now — $99 Deposit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-md shadow-sm border border-slate-100 px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-4 py-3 bg-royal-blue text-white rounded-xl hover:bg-royal-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
