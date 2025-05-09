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
    msgContent.id = "msg";

    //Time content
    const currentTime = new Date();
    const msgTime = document.createElement("span");
    msgTime.innerHTML = ` - ${currentTime.getMonth()+1}/${currentTime.getDate()}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}`;

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
