function skillsMember() {
  // This object contains information about a member's skills
  const memberInfo = {
    name: "Copilot Learner",
    skills: ["JavaScript", "GitHub", "Web Development"],
    level: "Beginner",
    learningGoals: ["Master Copilot", "Build Projects", "Contribute to Open Source"]
  };

  // Display member information
  console.log("Member Skills Information:");
  console.log("Name:", memberInfo.name);
  console.log("Skills:", memberInfo.skills.join(", "));
  console.log("Level:", memberInfo.level);
  console.log("Learning Goals:", memberInfo.learningGoals.join(", "));

  return memberInfo;
}

// Call the function
skillsMember();