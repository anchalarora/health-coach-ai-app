import React from "react";
import ChatBot from "react-chatbotify";
import chatbotSettings from "../chatbotConfig/chatbotSettings";
import {
  chatbotFlow,
  flowForIndividualInput,
} from "../chatbotConfig/chatbotFlow";

const HealthChatBot = () => {
  return <ChatBot settings={chatbotSettings} flow={chatbotFlow} />;
};

export default HealthChatBot;
