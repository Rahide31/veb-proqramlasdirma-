// Dinamik sahə əlavəetmə funksiyası
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

// Keyfiyyətləri qarışdırma
function shuffleQualities() {
    const qualitiesList = document.querySelectorAll('.content ul li');
    let qualitiesArray = Array.from(qualitiesList);
    qualitiesArray.sort(() => Math.random() - 0.5);
    const ul = document.querySelector('.content ul');
    ul.innerHTML = "";
    qualitiesArray.forEach(li => ul.appendChild(li));
}

// CV göstər/gizlət
function toggleCV() {
    const cvContainer = document.querySelector('.cv-container');
    cvContainer.style.display = (cvContainer.style.display === "none" || cvContainer.style.display === "") ? "flex" : "none";
}

// Bölməni aç/bağla
function toggleSection(listId) {
    const section = document.getElementById(listId);
    section.style.display = (section.style.display === "none" || section.style.display === "") ? "block" : "none";
}

// Motivasiya mesajı
function showMotivation() {
    const messages = [
        "Həmişə özünə inan!",
        "Böyük uğurlar kiçik addımlarla başlayır.",
        "Başarı uğursuzluqlardan daha çox mübarizə tələb edir.",
        "Nəhayət, uğur səbr tələb edir.",
        "Özünü təkmilləşdirmək üçün heç vaxt gec deyil."
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
}

// Form təsdiqləmə və yadda saxlanma
document.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("contactFormData"));
    if (saved) {
        document.getElementById("name").value = saved.name || "";
        document.getElementById("email").value = saved.email || "";
        document.getElementById("date").value = saved.date || "";
        document.getElementById("description").value = saved.description || "";
        showSavedData(saved);
    }

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const date = document.getElementById("date").value;
        const description = document.getElementById("description").value.trim();

        const errorBox = document.getElementById("errorMessage");
        errorBox.textContent = "";

        if (!name || !email || !date || !description) {
            errorBox.textContent = "Zəhmət olmasa bütün sahələri doldurun.";
            return;
        }

        if (!validateEmail(email)) {
            errorBox.textContent = "Zəhmət olmasa düzgün email ünvanı daxil edin.";
            return;
        }

        const formData = { name, email, date, description };
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        showSavedData(formData);
        errorBox.style.color = "green";
        errorBox.textContent = "Uğurla yadda saxlanıldı!";
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSavedData(data) {
    const container = document.getElementById("savedData");
    container.innerHTML = `
        <h3>Yadda saxlanmış məlumat:</h3>
        <p><strong>Ad:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Tarix:</strong> ${data.date}</p>
        <p><strong>Təsvir:</strong> ${data.description}</p>
    `;
}
