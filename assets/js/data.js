/* ==========================================================
   EDIT YOUR PORTFOLIO HERE. This is the only file you need.
   Keep the quotes and commas. A section with no entries is
   hidden automatically, so empty lists never show on the site.

   ADD A CERTIFICATE
   1. Put the image in assets/certificates/  (e.g. roblox-dev.png)
      Use simple names: lowercase, no spaces, .png .jpg or .webp.
   2. Add one line inside "certificates" below:
      { image: "assets/certificates/roblox-dev.png", title: "Name", description: "Optional" },
   To remove one, delete its line (and the image if you want).

   ADD A PROJECT
      { title: "Name", description: "One or two sentences.",
        tags: ["Roblox", "Luau"], link: "https://...", linkLabel: "View project" },

   ADD EXPERIENCE
      { period: "2023 - Present", role: "Role", org: "Team or company", text: "What you did." },
   ========================================================== */
window.SITE = {
  tagline: "Roblox game developer, development team leader, and cybersecurity learner.",

  // Lines starting with "$ " are shown as commands.
  terminal: [
    "$ whoami",
    "KINGYTDEV (Prince Kyle Beringia)",
    "$ cat focus.txt",
    "Main: Roblox game development",
    "Also: ethical hacking and cybersecurity"
  ],

  about: [
    "I'm Prince Kyle Beringia, known online as KINGYTDEV. I build Roblox games and game systems, lead development teams, and I'm learning ethical hacking and cybersecurity."
  ],

  skills: ["Roblox Game Development", "Game Systems", "Development Team Leadership", "Cybersecurity", "Ethical Hacking"],

  experience: [
  ],

  projects: [
     { title: "Cebu Hangout Roleplay",
       Description: "This is the First game I developed. I think it has over 12M visits right now but i'm not sure. Well the game is not public right now as i know.",
       Tags: ["Roblox, Luau"],
       Link: "https://ro.blox.com/Ebh5?af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D9181712725&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F118512721988970",
       LinkLabel: "View Project"
     }
  ],

  
  certificates: [
    {
      image: "assets/certificate/certificate1.png",
      title: "Ethical Hacking Course",
      description: "Cisco Networking Academy"
    }
  ],


  contact: {
    email: "kingytdevs@gmail.com",
    links: [
       
      {  Label: "LinkedIn", url: "https://www.linkedin.com/in/princekyle-beringia-304a56435?utm_source=share_via&utm_content=profile&utm_medium=member_android", text: "My Profile",
         label: "GitHub", url: "https://github.com/KINGYTDEV", text: "github.com/KINGYTDEV" }
    ]
  }
};
