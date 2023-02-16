import React, { useState } from "react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import useMessage from "utils/Store";
import dynamic from "next/dynamic";

const Model = ({ states }) => {
  const { show, setShow } = states;
  const { messages, addMessage } = useMessage();

  const handleSendMessage = async (input) => {
    // Add user message to the list of messages
    const userMessage = {
      message: input,
      sender: "User",
    };
    addMessage(userMessage);

    try {
      const res = await fetch(`https://portfolio-chatbot.onrender.com/bot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (res.status === 200) {
        const response = await res.text();
        const botResponse = {
          message: response,
          sender: "Bot",
        };
        setTimeout(() => {
          addMessage(botResponse);
        }, 500); // Simulate delay in bot response
      } else {
      }
    } catch {}
  };
  return (
    <div
      className={`fixed  top-[3vh] bottom-0  h-[97vh] xxxs:mx-[10px] rounded-lgh-[100vh]  md:w-[40%] bg-transparent z-[999] transition-all duration-1000 ${
        !show ? `right-[0vw]` : `right-[100vw]`
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute top-0 right-0 z-[999] text-red-500"
        onClick={() => setShow(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "User"
                    ? "flex flex-row"
                    : "flex flex-row-reverse"
                }
              >
                <Message model={message} />
              </div>
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={handleSendMessage}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

// export default Model;
export default dynamic(() => Promise.resolve(Model), { ssr: false });
