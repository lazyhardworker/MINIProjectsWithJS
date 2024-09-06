// selecting all the sections with class of section
const sections = document.querySelectorAll(".section");

// for each section when clicked
sections.forEach((section) =>{
    section.addEventListener("click",()=>{
        //remove active class from all another section
        //add it to the selected section
        sections.forEach((section) =>{
            section.classList.remove("active");
        });
        section.classList.add("active");
    });
});