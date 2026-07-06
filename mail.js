
(function(){
    emailjs.init("SEU_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "SEU_SERVICE_ID",
        "SEU_TEMPLATE_ID",
        this
    ).then(
        () => alert("Mensagem enviada com sucesso!"),
        (error) => alert("Erro ao enviar: " + error.text)
    );
});

