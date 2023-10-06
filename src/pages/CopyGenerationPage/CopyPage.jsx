import { useState } from "react";
import CopyCard from "./CopyCard/CopyCard.jsx";
import { useRecoilState } from "recoil";
import { titleAtom } from "../../shared/recoil.js";

// "Explain things like you would to a 10-year-old learning how to code."
const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Your answers should only be 2-3 sentences and the third should be a call to action. And lots of jokes. Be creative and unexpected. Be very random.",
};

function CopyPage() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [companyName, setCompanyName] = useRecoilState(titleAtom);
  const [companyDescription, setCompanyDescription] = useState("");
  const [preferences, setPreferences] = useState("");

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Formats messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role;
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + String(import.meta.env.VITE_Open_AI_Key),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      });
  }
  return (
    <div className="App">
      <h1>Provide Website Information</h1>
      <h5>Company Name</h5>
      <input
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={companyName}
        type="text"
        placeholder="Company Name"
      />
      <h5>Company Description</h5>
      <textarea
        className="app-input"
        placeholder="Company Description"
        onChange={(e) => setCompanyDescription(e.target.value)}
        value={companyDescription}
        rows="10"
        cols="40"
      />
      <h5>Preferences and style</h5>
      <input
        onChange={(e) => {
          setPreferences(e.target.value);
        }}
        value={preferences}
        type="text"
        placeholder="Style"
      />
      <button
        onClick={() => {
          const message =
            "Your answer should only be 2 sentences with a call to action. Create a website copy. Company Name: " +
            companyName +
            " Company Description: " +
            companyDescription +
            "Preferences for the style of the copy: " +
            preferences;
          handleSend(message);
        }}
      >
        Generate
      </button>
      <ul>
        {messages.map((message, index) => (
          <CopyCard key={index} copyText={message.message}></CopyCard>
        ))}
      </ul>
    </div>
  );
}
export default CopyPage;
