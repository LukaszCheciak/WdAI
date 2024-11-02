// Przełącznik trybu ciemnego
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
}

// Wczytanie preferencji trybu ciemnego
window.onload = function () {
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Inicjalizacja zegara
  updateClock(); // Aktualizacja zaraz po załadowaniu
  setInterval(updateClock, 1000); // Aktualizacja co sekundę
};

// Walidacja formularza kontaktowego
document
  .getElementById("kontaktForm")
  .addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("wiadomosc");
    const feedback = document.getElementById("formFeedback");

    feedback.textContent = ""; // Reset komunikatu o błędzie

    if (!validateEmail()) {
      event.preventDefault();
    } else if (!messageInput.value) {
      feedback.textContent = "Wiadomość nie może być pusta.";
      event.preventDefault();
    } else {
      alert("Formularz został wysłany!");
    }
  });

// Funkcja do walidacji e-maila
function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  // Wyrażenie regularne sprawdzające poprawność e-maila
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent =
      "Wprowadź poprawny adres e-mail (musi zawierać znak @ i domenę).";
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    return true;
  }
}

// Funkcja do aktualizacji zegara
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
