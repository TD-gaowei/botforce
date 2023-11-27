const BotForceMessages = [
  {
    body: "Hello, welcome to Long Beach Hospital. I'm your dedicated assistant, How may I assist you today?",
    identity: "Hello",
  },
  {
    body: "Please provide your name and Medical ID so that I can locate relevant information in the system",
    identity: "appointment",
  },
  {
    body: "Thank you for providing the information.Your next appointment is scheduled for December 1, 2023, at 10:00 AM\n",
    identity: "Brady",
  },
  {
    body: "No problem.Your next appointment is scheduled for December 1, 2023, at 10:00 AM. The appointment is at Long Beach Hospital, 720 Pacific Coast Hwy, Long Beach, CA 90804, with Dr. Wang, and his office is located at Room 5, Floor 2, Main Building.",
    identity: "enough",
  },
  {
    body:
      "Certainly.Your next appointment is scheduled for December 1, 2023, at 10:00 AM. The appointment is at Long Beach Hospital, 720 Pacific Coast Hwy, Long Beach, CA 90804, with Dr. Wang, and his office is located at Room 5, Floor 2, Main Building.\n" +
      "According to the latest weather forecast, it is expected to rain on that day, with a temperature of around 15 degrees Celsius. Rainy weather may impact your transportation, so would you consider choosing a different appointment date?\n",
    identity: "weather",
  },
  {
    body: "Your next appointment is scheduled for December 1, 2023, at 10:00 AM. The appointment is at Long Beach Hospital, 720 Pacific Coast Hwy, Long Beach, CA 90804, with Dr. Wang, and his office is located at Room 5, Floor 2, Main Building.\nAccording to the latest weather forecast, it is expected to rain on that day, with a temperature of around 15 degrees Celsius. Rainy weather may impact your transportation, so would you consider choosing a different appointment date?\n",
    identity: "Maps",
  },
];

export default BotForceMessages;
