import { getData2, getData } from "../api/apiService";

export const chatbotFlow = {
  start: {
    message: "Hey, Welcome to Health coach AI agent. How can I help you today?",
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

const flowForIndividualInput = {
  start: {
    message: "Hey, Welcome to Health coach AI agent. How can I help you today?",
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
