


const emailButton = document.querySelector("#emailButton");
const message = document.querySelector("#message");

emailButton.addEventListener("click", async function () {
    const email = "anasamounas@email.com";

    try {
        await navigator.clipboard.writeText(email);
        message.textContent = "Email copié avec succès !";
    } catch (error) {
        message.textContent = "Mon email : " + email;
    }
});



const yearElement = document.querySelector("#year");

yearElement.textContent = new Date().getFullYear();
