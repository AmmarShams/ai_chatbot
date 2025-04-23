import { useEffect, useRef } from "react";

interface Props {
  messages: { type: "user" | "ai"; text: string }[];
}

function Response({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="response-scroll-wrapper">
      <div className="response-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.type === "user" ? "user-message" : "ai-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default Response;
