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
