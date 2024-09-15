import {
  getData2,
  getData,
  getBPRecommendation,
  getBMISuggestion,
  createWorkoutEvent,
  maintainGoodHealth,
} from "../api/apiService";

const bmiSuggestions = getBMISuggestion();
const bpRecommendation = getBPRecommendation();
const createdWorkoutEvent = createWorkoutEvent();
const maintainGoodHealthandLife = maintainGoodHealth();

export const chatbotFlow = {
  start: {
    message: "Hey, Welcome to Health coach AI agent. How can I help you today?",
    options: [
      "Personalised Plan for Healthy BMI",
      "Lifestyle recommendation for Normal BP",
      "How can I mantain good health and long life",
      "Create Workout events on Calendar",
    ],
    path: "process_options",
  },
  process_options: {
    message: async (params) => {
      switch (params.userInput) {
        case "Personalised Plan for Healthy BMI":
          return await bmiSuggestions.message;
        case "Lifestyle recommendation for Normal BP":
          return await bpRecommendation.message;
        case "How can I mantain good health and long life":
          return await maintainGoodHealthandLife.message;
        case "Create Workout events on Calendar":
          return await createdWorkoutEvent.message;
        default:
          return getData2();
      }
    },
    transition: { duration: 1 },
    path: "loop",
  },
  loop: {
    message: "Do you need any more help?",
    options: [
      "Personalised Plan for Healthy BMI",
      "Lifestyle recommendation for Normal BP",
      "How can I mantain good health and long life",
      "Create Workout events on Calendar",
    ],
    path: "process_options",
  },
};

export const flowForIndividualInput = {
  start: {
    message: "Hey, Welcome to Health coach AI agent. How can I help you today?",
    path: "model_loop",
  },
  model_loop: {
    message: async (params) => {
      switch (params.userInput) {
        case "Health matrix":
          return await getData();
        case "Meal plan":
          return await getData2();
        default:
          return await getData();
      }
    },
    path: "model_loop",
  },
};
