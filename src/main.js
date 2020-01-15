console.log("hello world");

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const sectionEl = document.querySelector(".article__header")
.textContent = "Welcome to Bito's Blog";
console.log("CHANGED TEXT!", sectionEl);


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const getAllArticleHeaders = document.querySelectorAll(".article__header");
for (let i = 0; i < getAllArticleHeaders.length; i++) {
    getAllArticleHeaders[i].classList.add("important");   
}
console.log("GET ALL!", getAllArticleHeaders);
// ^^^^^targets all ".article__header"s, then 'for loops' through them, then using classList.add adds .important to the end of article__header in the DOM^^^^^//


// Obtain a reference to the element with a class of dashed and remove it.
const removeDashed = document.querySelector(".dashed");
removeDashed.classList.remove("dashed");
console.log("REMOVED!", removeDashed);
// ^^^^^targets .dashed  and removes it from the DOM


// Obtain a reference to the element with a class of article__footer and add the class of goldenrod to it.
const addGoldenRod = document.querySelector(".article__footer");
addGoldenRod.classList.add("goldenrod");
console.log("ADD!", addGoldenRod);
// ^^^^^targets .article__footer and adds goldenrod to it in the DOM