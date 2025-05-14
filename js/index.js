//Skills
const skills = [
    { skill: "Java", proficiency: "Proficient" },
    { skill: "Python", proficiency: "Intermediate" },
    { skill: "C", proficiency: "Beginner" },
    { skill: "JavaScript", proficiency: "Beginner" },
    { skill: "HTML", proficiency: "Beginner" },
    { skill: "SQL", proficiency: "Beginner" },
    { skill: "Git", proficiency: "Beginner" }
]
const languages = [
    { lang: "English", proficiency: "Fluent" },
    { lang: "Polish", proficiency: "Conversational" },
    { lang: "Spanish", proficiency: "Basic" },
    { lang: "Japanese", proficiency: "Basic" },
    { lang: "Italian", proficiency: "Basic" }
]

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
    skillDiv.className = "skill-desc";
    skillDiv.style.display = "flex"
    const listItem = document.createElement("p");
    const listItemProf = document.createElement("p");
    listItem.innerHTML = skills[i].skill;
    listItemProf.innerHTML = skills[i].proficiency;
    skillDiv.appendChild(listItem);
    skillDiv.appendChild(listItemProf);
    skillsList.appendChild(skillDiv);
}
//Add language headaer
const langHeader = document.createElement("h4");
langHeader.innerHTML = "Languages";
skillsList.appendChild(langHeader);
//Add languages
for(let i = 0; i < languages.length; i++){
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill-desc";
    skillDiv.style.display = "flex"
    const listItem = document.createElement("p");
    const listItemProf = document.createElement("p");
    listItem.innerHTML = languages[i].lang;
    listItemProf.innerHTML = languages[i].proficiency;
    skillDiv.appendChild(listItem);
    skillDiv.appendChild(listItemProf);
    skillsList.appendChild(skillDiv);
}

//Messages
const messageHeader = document.querySelector("#msgHeader");
const formMessage = document.querySelector('form[name="leave_message"]');
formMessage.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMsg = event.target.usersMessage.value;
    console.log(`User: ${userName} Email: ${userEmail} Message: ${userMsg}`);
    const messages = document.querySelector("#Messages");
    const msgList = messages.querySelector("ul");
    const newMsg = document.createElement("li");

    //Message Name + Email
    const msgName = document.createElement("a");
    msgName.href = "mailto:"+userEmail;
    msgName.innerHTML = userName;

    //Message Content
    const msgContent = document.createElement("span");
    msgContent.innerHTML = userMsg;
    msgContent.className = "msg";

    //Time content
    const currentTime = new Date();
    const msgTime = document.createElement("span");
    const formatMins = String(currentTime.getMinutes()).padStart(2, "0");
    msgTime.innerHTML = ` - ${currentTime.getMonth()+1}/${currentTime.getDate()}/${currentTime.getFullYear()} ${currentTime.getHours()}:${formatMins}`;

    //Remove button
    const removeButton = document.createElement("button");
    removeButton.type = "remove"
    removeButton.innerHTML = "Remove";
    removeButton.className = "submit-button";
    removeButton.style.marginLeft = "10px";
    removeButton.addEventListener("click", () =>{
        const entry = removeButton.parentNode;
        console.log(entry);
        entry.remove();
        //Remove Message Header if 0 messages left
        if(msgList.children.length == 0 ){
            messageHeader.innerHTML = "";
        }
    });

    //Edit button
    const editButton = document.createElement("button");
    editButton.className = "submit-button";
    editButton.type = "edit"
    editButton.innerHTML = "Edit";
    const inputNewMessageDialog = document.createElement("dialog");
    const dialogButton = document.createElement("button");
    const newTextArea = document.createElement("textarea");
    const newTextAreaLabel = document.createElement("label");
    newTextAreaLabel.innerHTML = "Editting message:";
    newTextArea.id = "editInput";
    newTextAreaLabel.htmlFor = "editInput";
    newTextArea.value = msgContent.innerHTML;
    newTextArea.maxLength = "300";
    document.body.appendChild(inputNewMessageDialog);
    inputNewMessageDialog.close();

    //Edit button's dialog
    dialogButton.innerHTML = "Confirm";
    dialogButton.className = "submit-button";
    inputNewMessageDialog.append(newTextAreaLabel);
    inputNewMessageDialog.append(document.createElement("br"));
    inputNewMessageDialog.append(newTextArea);
    inputNewMessageDialog.append(document.createElement("br"));
    inputNewMessageDialog.append(dialogButton);
    dialogButton.addEventListener("click", () =>{
        const newText = newTextArea.value;
        msgContent.innerHTML = newText;
        inputNewMessageDialog.close();
    });
    editButton.addEventListener("click", () =>{
        inputNewMessageDialog.showModal();
    });

    //Add new message to list
    newMsg.append(msgName);
    newMsg.append(msgTime);
    newMsg.append(document.createElement("br"));
    newMsg.append(msgContent);
    newMsg.append(document.createElement("br"));
    newMsg.append(editButton);
    newMsg.append(removeButton);
    msgList.prepend(newMsg);

    //Add Message Header
    messageHeader.innerHTML = "Messages";

    //Reset form
    event.target.reset();
});


//GITHUB Projects Fetch
const projSection = document.querySelector("#Projects");
const projList = projSection.querySelector("ul");
projList.id = "outerList";
projList.style = "padding-right: 30px";

fetch('https://api.github.com/users/pleaseHelpimDumb/repos')
    .then(res => {
        if(!res.ok){
            throw new Error ("Bad Request");
        }
        return res.json();
    })
    .then(data => {
        data.forEach(repo => {
            console.log(repo);
            const newRepoItem = document.createElement("li");
            const projLink = document.createElement("a");
            const projectDesc = document.createElement("p");
            
            projLink.href = repo.html_url;
            projLink.innerHTML = repo.name;
            newRepoItem.append(projLink);
            
            projectDesc.innerHTML = repo.description;
            newRepoItem.append(projectDesc);

            newRepoItem.className = ("repoItem");
            projList.appendChild(newRepoItem);
        })
    })
    .catch (error => {
        console.error(error);
    });

/* Async/Await way
async function fetchData(){
    try{
        const response = await fetch('https://api.github.com/users/pleaseHelpimDumb/repos');

        if(!response.ok){
            throw new Error ("Request failed");
        }

        const data = await response.json();
        return data;
    } catch (error){
        console.error(error);
    }
}
async function processData(){
    const repos = await fetchData()
    console.log(repos);
    //Do stuff with repo
}
processData();
*/