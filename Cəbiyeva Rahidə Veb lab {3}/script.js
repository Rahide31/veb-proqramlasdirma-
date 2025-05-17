function addItem(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

    
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 100); 
    });
});
function shuffleQualities() {
    const qualitiesList = document.querySelectorAll('.content ul li');
    let qualitiesArray = Array.from(qualitiesList);
    qualitiesArray.sort(() => Math.random() - 0.5); 

    const ul = document.querySelector('.content ul');
    ul.innerHTML = ""; 
    qualitiesArray.forEach(li => ul.appendChild(li));
}
function showMotivation() {
    const messages = [
        "Həmişə özünə inan!",
        "Böyük uğurlar kiçik addımlarla başlayır.",
        "Başarı uğursuzluqlardan daha çox mübarizə tələb edir.",
        "Nəhayət, uğur səbr tələb edir.",
        "Özünü təkmilləşdirmək üçün heç vaxt gec deyil."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
function toggleCV() {
    const cvContainer = document.querySelector('.cv-container');
    cvContainer.style.display = (cvContainer.style.display === "none" || cvContainer.style.display === "") ? "flex" : "none";
}
function toggleSection(listId) {
    const section = document.getElementById(listId);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}