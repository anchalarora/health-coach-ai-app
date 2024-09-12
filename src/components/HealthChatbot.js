import React from "react";
import ChatBot from "react-chatbotify";

const HealthChatBot = () => {
  // Async function to fetch data from the API
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      // Extracting the first post title as an example
      const firstPostTitle = data[0]?.title;
      return `Here's the title of the first post: "${firstPostTitle}"`;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Sorry, there was an error fetching the data.";
    }
  }

  async function getData2() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      // Extracting the first post title as an example
      const firstPostBody = data[0]?.body;
      return `Here's the body of the first post: "${firstPostBody}"`;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Sorry, there was an error fetching the data.";
    }
  }

  const flow = {
    start: {
      message:
        "Hey, Welcome to Health coach AI agent. How can I help you today?",
      path: "model_loop",
    },
    model_loop: {
      message: async (params) => {
        switch (params.userInput) {
          case "title":
            return await getData();
          case "body":
            return await getData2();
          default:
            return await getData();
        }
      },
      path: "model_loop",
    },
  };

  const settings = {
    header: {
      title: "Health Coach AI Agent",
      showAvatar: true,
      avatar: "https://example.com/avatar.png",
      closeChatIcon: "https://example.com/close-icon.png",
    },
    general: {
      primaryColor: "#4CAF50",
      fontFamily: "Arial, sans-serif",
      showHeader: true,
    },
    chatButton: {
      icon: "https://example.com/chat-icon.png",
    },
    chatInput: {
      sendButtonIcon: "https://example.com/send-icon.png",
      enabledPlaceholderText: "Type your message here...",
    },
  };

  return <ChatBot settings={settings} flow={flow} />;
};

export default HealthChatBot;
