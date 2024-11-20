function result() {
  let nome = document.getElementById("nome").value;
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;

  if (nome === "" || p1 === "" || p2 === "" || p3 === "") {
    alert("Preencha os campos corretamente");
    return;
  }

  let confirme = prompt(
    "Você inseriu os dados corretamente? S/N"
  ).toUpperCase();

  if (confirme === "N") {
    alert("Corriga-as!");
    return;
  } else if (confirme === "S") {
    let media = (parseFloat(p1) + parseFloat(p2) + parseFloat(p3)) / 3;

    document.getElementById("media").innerText = media.toFixed(2);

    let situacao = media >= 7 ? "Aprovado" : "Reprovado";
    document.getElementById("situ").innerText = situacao;
  }
}
