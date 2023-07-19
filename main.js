// Information about yourself (About Me)
const aboutMeInfo = [
    "Age: 14 years old",
    "Birthdate: July 9th, 2009",
    "Hobbies: Coding",
    "Passion: Creating projects",
  ];
  
  // Information about your projects
  const myProjectsInfo = [
    "Website: The Rizz checker (https://imagematcher.000webhostapp.com/)",
    "GitHub: https://github.com/abhiramasonny/",
    // Add more project details as needed
  ];
  
  // Function to create and display bullet points
  function createBulletPoints(list, containerId) {
    const container = document.getElementById(containerId);
    list.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      container.appendChild(listItem);
    });
  }
  
  // Display information in bullet points
  createBulletPoints(aboutMeInfo, "about-me-info");
  createBulletPoints(myProjectsInfo, "my-projects-info");
  // You can add more sections and their respective information here
  