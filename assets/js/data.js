
/*
ADD A PROJECT:
 Copy one project object inside "projects".
 Change the title, description, tags, and link.

 ADD A CERTIFICATE:
 1. Put your image in assets/certificates/
 2. Copy one certificate object inside "certificates".
 3. Change the image path, title, and description.

 ADD EXPERIENCE:
 Copy one experience object inside "experience".
 Change the dates, role, organization, and description.

 IMPORTANT:
 - Keep quotation marks and commas.
 - Use the exact property names shown below.
 - Do not delete the opening or closing brackets.
==================================================
*/

window.SITE = {

  // SHORT INTRODUCTION
  tagline: "Roblox game developer, and Certified Ethical Hacker(CEH) Holder.",


  // TERMINAL-STYLE PROFILE
  // Lines starting with "$ " appear as commands.
  terminal: [
    "$ whoami",
    "KINGYTDEV (Prince Kyle Beringia)",
    "$ cat focus.txt",
    "Main: Roblox Game Development",
    "Also: Ethical Hacking and Cybersecurity"
  ],


  // ABOUT ME
  about: [
    "I'm Prince Kyle Beringia, known online as KINGYTDEV. I've spent nearly 9 years in game development and around 2 years learning ethical hacking and cybersecurity. I also have experience leading development teams."
  ],


  // SKILLS
  // Add or remove skills as needed.
  skills: [
    "Roblox Game Development",
    "Luau Scripting",
    "Game Systems",
    "Development Team Leadership",
    "Cybersecurity",
    "Ethical Hacking"
  ],


  // WORK EXPERIENCE
  // Add your real work experience here.
  experience: [
    
    {
      period: "2023 - Present",
      role: "Lead Developer",
      org: "Empire Eclipse Games",
      text: "Lead development work and help manage game development projects."
    },
   {
    period: "2022 - Present",
    role: "Lead Developer/Co-Owner",
    org: "Zen Plays Studio",
    text: "I lead this Development Group for almost 5 years. This group has been sentimental for me because the owner trusted me when i was just starting the game development."
   },
    
  ],


  // PROJECTS
  // Only list projects you actually worked on.
  projects: [
    {
      title: "Cebu Hangout Roleplay",

      description: "One of my early Roblox game development projects. The game may no longer be publicly available, and its current visit count has not been verified.",

      tags: ["Roblox", "Luau"],

      link: "https://www.roblox.com/games/118512721988970",

      linkLabel: "View Project"
    }

    // ADD ANOTHER PROJECT BELOW:
    // Remember to put a comma after the previous project.
    /*
    ,
    {
      title: "My Next Project",
      description: "A short description of what I contributed.",
      tags: ["Roblox", "Luau"],
      link: "https://example.com",
      linkLabel: "View Project"
    }
    */
  ],


  // CERTIFICATES
  // Image files go inside assets/certificates/
  certificates: [
    {
      image: "assets/certificates/certificate1.png",
      title: "Ethical Hacking Course",
      description: "Cisco Networking Academy"
    },
   {
    image: "assets/certificates/Cer2.png",
    title: "End-point Security Course",
    description: "Cisco Networking Academy"
   },
   
    
  ],


  // CONTACT INFORMATION
  contact: {
    email: "kingytdevs@gmail.com",

    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/princekyle-beringia-304a56435/",
        text: "My LinkedIn Profile"
      },

      {
        label: "GitHub",
        url: "https://github.com/KINGYTDEV",
        text: "github.com/KINGYTDEV"
      }
    ]
  }

};
