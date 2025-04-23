import { useState } from "react";
import axios from "axios";

interface Props {
  userData: { name: string; email: string };
  setMessages: React.Dispatch<
    React.SetStateAction<{ type: "user" | "ai"; text: string }[]>
  >;
}

function Form({ userData, setMessages }: Props) {
  const [prompt, setPrompt] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { type: "user", text: prompt }]);
    setPrompt("");
    try {
      const sendRes = await axios.post(
        "https://ammarshams.app.n8n.cloud/webhook/47fc246e-44d7-4833-a429-7b19f8838a5b",
        { userData, prompt }
      );
      const promptResponse = sendRes.data.response;
      setMessages((prev) => [...prev, { type: "ai", text: promptResponse }]);
    } catch (error) {
      console.log("There was an error sending the promptResponse", error);
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Oops! Something went wrong. Try again later." },
      ]);
    }
  };

  return (
    <div className="fixed-bottom bg-white p-3">
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <div className="form-floating flex-grow-1 me-2">
          <input
            type="text"
            className="form-control"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="is there an iphone 13 under 200?"
          />
          <label htmlFor="prompt">Prompt</label>
        </div>
        <button type="submit" className="btn btn-primary arrow-btn">
          <i className="bi bi-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}

export default Form;
