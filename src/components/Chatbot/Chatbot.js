import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
          }),
        }
      );

      const data = await response.json();
      const botReply = data.choices[0].message.content;
      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow">
      <div className="h-64 overflow-y-auto p-2 border border-gray-300 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded-lg text-white max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 self-end ml-auto"
                : "bg-gray-500"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
