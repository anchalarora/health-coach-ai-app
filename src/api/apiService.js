export const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const firstPostTitle = data[0]?.title;
    return `Here's the title of the first post: "${firstPostTitle}"`;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, there was an error fetching the data.";
  }
};

export const getData2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const firstPostBody = data[0]?.body;
    return `Here's the body of the first post: "${firstPostBody}"`;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Sorry, there was an error fetching the data.";
  }
};

export const getBPRecommendation = () => {
  return {
    message:
      "A blood pressure reading of 120/80 mmHg is considered normal. Here are some recommendations to maintain healthy blood pressure and general well-being:\n\n### Recommendations to Maintain Healthy Blood Pressure:\n\n1. **Healthy Diet:**\n   - Follow a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.\n   - Limit salt intake to less than 2,300 mg per day.\n   - Reduce consumption of saturated fats and cholesterol.\n\n2. **Regular Exercise:**\n   - Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.\n   - Include strength training exercises at least twice a week.\n\n3. **Maintain a Healthy Weight:**\n   - Achieve and maintain a healthy body weight through diet and exercise.\n\n4. **Limit Alcohol and Avoid Smoking:**\n   - Drink alcohol in moderation (up to one drink per day for women and two for men).\n   - Avoid smoking and exposure to secondhand smoke.\n\n5. **Manage Stress:**\n   - Practice stress-reducing techniques such as meditation, yoga, or deep breathing exercises.\n\n6. **Regular Check-ups:**\n   - Monitor your blood pressure regularly and visit your healthcare provider for routine check-ups.\n\n### Common Side Effects of High Blood Pressure (Hypertension):\n\n- **Heart Disease:** Increased risk of heart attack and heart failure.\n- **Stroke:** Higher likelihood of stroke due to damage to blood vessels.\n- **Kidney Damage:** Can lead to kidney failure over time.\n- **Vision Loss:** Damage to blood vessels in the eyes.\n- **Aneurysm:** Increased risk of blood vessel bulging and rupture.\n\n### Common Side Effects of Low Blood Pressure (Hypotension):\n\n- **Dizziness or Lightheadedness:** Especially when standing up quickly.\n- **Fainting:** Sudden drops in blood pressure can lead to fainting.\n- **Blurred Vision:** Temporary vision disturbances.\n- **Fatigue:** Feeling unusually tired or weak.\n- **Nausea:** Upset stomach or feeling queasy.\n\nIf your blood pressure is consistently above or below the normal range, it is important to consult with a healthcare provider for personalized management and treatment options.",
  };
};

export const createWorkoutEvent = () => {
  return {
    message:
      "A one week 30mins workout event has been created in your Google Calendar",
  };
};

export const getBMISuggestion = () => {
  return {
    message: `Based on your current Body Mass Index (BMI), here are some personalized suggestions:

    - **BMI Range:**
      - Below 18.5: **Underweight** – You may need to increase your caloric intake and focus on nutrient-dense foods to gain weight in a healthy manner.
      - 18.5 - 24.9: **Normal** – Your BMI is within the normal range. Continue maintaining a balanced diet and regular physical activity to sustain your health.
      - 25.0 - 29.9: **Overweight** – Incorporating a combination of calorie reduction and increased physical activity could help in bringing your BMI within a healthier range.
      - 30.0 and above: **Obese** – It's important to consider a structured weight-loss plan, focusing on a healthy diet and exercise regimen. Consult a healthcare provider for personalized advice.

    - **General Suggestions:**
      - Aim for a balanced diet rich in vegetables, fruits, lean proteins, and whole grains.
      - Ensure regular physical activity, such as at least 30 minutes of moderate-intensity exercise most days of the week.
      - Consider consulting with a nutritionist or healthcare professional if you need tailored support for your BMI category.
      
    Remember, BMI is just one measure of health. It’s important to consider other factors such as muscle mass, overall fitness, and lifestyle. Reach out if you'd like more guidance or a personalized plan!`,
  };
};

export const maintainGoodHealth = () => {
  return {
    message:
      "Maintaining good health and promoting longevity involves a combination of lifestyle choices and preventive measures. Here are some key strategies:\n\n1. **Balanced Diet**: \n   - Eat a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.\n   - Limit processed foods, sugar, and excessive salt.\n\n2. **Regular Exercise**:\n   - Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week.\n   - Include strength training exercises twice a week.\n\n3. **Adequate Sleep**:\n   - Aim for 7-9 hours of quality sleep per night.\n   - Maintain a regular sleep schedule.\n\n4. **Stress Management**:\n   - Practice relaxation techniques such as meditation, yoga, or deep breathing.\n   - Engage in hobbies and activities you enjoy.\n\n5. **Stay Hydrated**:\n   - Drink plenty of water throughout the day.\n   - Limit sugary drinks and excessive caffeine.\n\n6. **Avoid Harmful Behaviors**:\n   - Do not smoke, and limit alcohol consumption.\n   - Avoid recreational drug use.\n\n7. **Regular Check-ups**:\n   - Visit your healthcare provider for regular screenings and vaccinations.\n   - Monitor blood pressure, cholesterol, and blood sugar levels.\n\n8. **Healthy Weight**:\n   - Maintain a healthy weight through diet and exercise.\n   - Monitor your BMI and waist circumference.\n\n9. **Social Connections**:\n   - Maintain strong relationships with family and friends.\n   - Engage in community activities.\n\n10. **Mental Health**:\n    - Seek help if you experience symptoms of depression or anxiety.\n    - Practice gratitude and positive thinking.\n\n11. **Safety Measures**:\n    - Use seat belts, helmets, and other safety equipment.\n    - Practice safe driving and avoid risky behaviors.\n\n12. **Lifelong Learning**:\n    - Keep your mind active through reading, puzzles, or learning new skills.\n\nBy incorporating these habits into your daily routine, you can enhance your overall well-being and increase your chances of living a longer, healthier life.",
  };
};
