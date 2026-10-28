
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbwVf_g9L9UGCJNMlW8ZJj7lA_qLo8IB7bUarqvxQl0L8r4GZwH4HKmqI1WCErfXLIPY2Q/exec";
const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")
form.addEventListener("submit", function(evento){
  evento.preventDefault();
  aviso.textContent = "Enviando..."
  fetch(URL_PLANILHA,{
    method: "POST",
    mode: "no-cors",
    body: new FormData(form)
  })
    .then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });
})
