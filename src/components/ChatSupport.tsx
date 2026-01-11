import { useState } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  time: string;
}

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! 👋 Chào mừng bạn đến với ManeyShop. Tôi có thể giúp gì cho bạn?',
      sender: 'support',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Auto reply after 1 second
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Cảm ơn bạn đã liên hệ! Nhân viên hỗ trợ sẽ phản hồi trong thời gian sớm nhất. Hotline: 0123 456 789',
        sender: 'support',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[calc(100%-2rem)] md:w-96 max-w-md z-50 animate-fade-in">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Hỗ trợ ManeyShop</h3>
                  <p className="text-xs opacity-80">Thường trả lời trong 5 phút</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setIsOpen(false)}
              >
                <Minimize2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-sm'
                        : 'bg-secondary text-secondary-foreground rounded-bl-sm'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'opacity-70' : 'text-muted-foreground'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-xl border-0 outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                />
                <Button
                  onClick={handleSend}
                  className="btn-primary-solid px-4"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-8 z-50 group"
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulse-ring" />
        
        <div className={`relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-0' : 'animate-bounce-slow'} group-hover:scale-110`}>
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-card text-card-foreground text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
            Chat với chúng tôi
          </div>
        )}
      </button>
    </>
  );
};

export default ChatSupport;
