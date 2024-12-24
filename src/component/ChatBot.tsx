/** @format */

import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [{ role: "bot", content: "Xin chào! Tôi có thể giúp gì cho bạn?" }]
  );
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Gọi API ChatGPT
    const response = await callChatGPT(userInput);
    setMessages([...newMessages, { role: "bot", content: response }]);
  };

  const callChatGPT = async (message: string) => {
    try {
      console.log(process.env.REACT_APP_CHATGPT_API_KEY);
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "Bạn là một trợ lý hỗ trợ nền tảng gọi vốn nông nghiệp, cung cấp thông tin chuyên nghiệp và thân thiện về các cơ hội đầu tư cho nhà đầu tư.",
              },
              { role: "user", content: message },
            ],
          }),
        }
      );
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      return "Xin lỗi, tôi không thể phản hồi lúc này.";
    }
  };

  return (
    <>
      {/* Icon Chatbot */}
      <div className="fixed bottom-5 z-50 right-5 flex items-center space-x-3 cursor-pointer">
        {/* Text thông tin */}
        <span className="text-green-700 font-lexend font-semibold bg-green-100 px-2 py-1 rounded-lg shadow-md animate-pulse">
          Hỏi trợ lý đầu tư
        </span>

        {/* Chatbot Icon */}
        <div
          onClick={toggleChat}
          className="w-16 h-16 animate-bounce font-lexend bg-green-700 text-white flex items-center justify-center rounded-full shadow-lg hover:animate-shake"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      {/* Khung Chat */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 w-96  h-1/2 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-green-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-lexend font-semibold">Trợ lý đầu tư</h3>
            <button
              onClick={toggleChat}
              className="text-white text-xl"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 font-lexend overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.role === "user"
                    ? "text-blue-500 text-right"
                    : "text-gray-700"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="font-lexend p-4 border-t border-gray-300 flex items-center">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
              placeholder="Nhập tin nhắn..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
