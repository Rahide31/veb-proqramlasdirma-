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

function toggleSection(listId) {
    const section = document.getElementById(listId);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}