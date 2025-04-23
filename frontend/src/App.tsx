import { useState } from "react";
import PromptForm from "./components/PromptForm";
import Response from "./components/Response";
import UserForm from "./components/UserForm";
import logo from "./assets/logo.svg";

type Message = {
  type: "user" | "ai";
  text: string;
};

function App() {
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
  } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="App">
      <div className="gradient-blob-1"></div>
      <div className="gradient-blob-2"></div>
      <div className="text-center my-3">
        <img src={logo} alt="Logo" className="app-logo" />
      </div>
      <a id="title" href="/">
        <h1 id="title">Your AI Assistant</h1>
      </a>

      {userData ? (
        <>
          <Response messages={messages} />
          <PromptForm userData={userData} setMessages={setMessages} />
        </>
      ) : (
        <UserForm setUserData={setUserData} />
      )}
    </div>
  );
}

export default App;
