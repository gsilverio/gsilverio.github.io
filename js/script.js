function handlePageNotMade() {
  window.alert("Pagina não desenvolvida.");
}

function handleFormClick(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  window.alert(`Entraremos em contato Sr(a) ${nome} por seu email: ${email}`);
  window.location.href = "index.html";
}
