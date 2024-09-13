import React from "react";
import ChatBot from "react-chatbotify";
import trainerIcon from "../assets/images/healthcoach.png";
import crossIcon from "../assets/images/cross.png";
import sendIcon from "../assets/images/send.png";

const HealthChatBot = () => {
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

  const flow_1 = {
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

  const flow = {
    start: {
      message:
        "Hey, Welcome to Health coach AI agent. How can I help you today?",
      options: [
        "Health option 1",
        "Health option 2",
        "Health option 3",
        "Health option 4",
      ],
      path: "process_options",
    },
    process_options: {
      message: async (params) => {
        switch (params.userInput) {
          case "Health option 1":
            return await getData();
          case "Health option 2":
            return await getData2();
          case "Health option 3":
            return await getData();
          case "Health option 4":
            return await getData();
          default:
            return "Sorry, I didn't understand that.";
        }
      },
      transition: { duration: 1 },
      path: "loop",
    },
    loop: {
      message: "Do you need any more help?",
      options: [
        "Health option 1",
        "Health option 2",
        "Health option 3",
        "Health option 4",
      ],
      path: "process_options",
    },
  };

  const settings = {
    header: {
      title: "Health Coach AI Agent",
      showAvatar: true,
      avatar: trainerIcon,
      closeChatIcon: crossIcon,
    },
    general: {
      primaryColor: "#4CAF50",
      fontFamily: "Arial, sans-serif",
      showHeader: true,
    },
    chatInput: {
      sendButtonIcon: sendIcon,
      enabledPlaceholderText: "Type your message here...",
    },
  };

  return <ChatBot settings={settings} flow={flow} />;
};

export default HealthChatBot;
