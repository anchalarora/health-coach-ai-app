import trainerIcon from "../assets/images/healthcoach.png";
import crossIcon from "../assets/images/cross.png";
import sendIcon from "../assets/images/send.png";

const chatbotSettings = {
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

export default chatbotSettings;
