const body = document.querySelector("body");

//Add footer
const footer = document.createElement("footer");
body.appendChild(footer);

//Copyright Text
const today = new Date();
const thisYear = today.getFullYear()
const copyrightParagraph = document.createElement("p");
copyrightParagraph.innerHTML = `© ${thisYear} Adrian Konarski`;
copyrightParagraph.classList.add("copyright");
copyrightParagraph.setAttribute("copyright","highlight");
footer.appendChild(copyrightParagraph);

//Skills
const skills = ["Java", "Python", "C", "JavaScript", "HTML", "SQL", "Git"];
const skillsProf = ["Proficient", "Intermediate", "Beginner", "Beginner", "Beginner", "Beginner", "Beginner"]
const languages = ["English", "Polish", "Spanish", "Japanese", "Italian"];
const languagesProf = ["Fluent", "Conversational", "Basic", "Basic", "Basic"];
//Skills List
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");
skillsList.id = "outerList";

//Add inner skill header
const skillHeader = document.createElement("h4");
skillHeader.innerHTML = "General";
skillsList.appendChild(skillHeader);
//Add general skills
for(let i = 0; i < skills.length; i++){
    const skillDiv = document.createElement("div");
    skillDiv.id = "skill-desc";
    skillDiv.style.display = "flex"
    const listItem = document.createElement("p");
    const listItemProf = document.createElement("p");
    listItem.innerHTML = skills[i];
    listItemProf.innerHTML = skillsProf[i];
    skillDiv.appendChild(listItem);
    skillDiv.appendChild(listItemProf);
    skillsList.appendChild(skillDiv);
}
//Add language headaer
const langHeader = document.createElement("h4");
langHeader.innerHTML = "Languages";
langHeader.id = ""
skillsList.appendChild(langHeader);
//Add languages
for(let i = 0; i < languages.length; i++){
    const skillDiv = document.createElement("div");
    skillDiv.id = "skill-desc";
    skillDiv.style.display = "flex"
    const listItem = document.createElement("p");
    const listItemProf = document.createElement("p");
    listItem.innerHTML = languages[i];
    listItemProf.innerHTML = languagesProf[i];
    skillDiv.appendChild(listItem);
    skillDiv.appendChild(listItemProf);
    skillsList.appendChild(skillDiv);
}