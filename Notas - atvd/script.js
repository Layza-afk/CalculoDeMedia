function result() {
    let nome = document.getElementById('nome').value;

    if (nome === "") {
        alert ("nome");
        return;
    }

    let p1 = document.getElementById('nota1').value;

    if (p1 === "" || isNaN(p1) || p1 < 0 || p1 > 10) {
        alert("p1");
        return;
    }

    let p2 = document.getElementById('nota2').value;

    if (p2 === "" || isNaN(p2) || p2 < 0 || p2 > 10) {
        alert("p2");
        return;
    }

    
    let confirme = prompt("Você inseriu os dados corretamente? S/N");
    
    if (confirme === "N") {
        alert("Corriga-as")
        return;
    } else if (confirme === "S") {
        let media = (parseFloat(p1) + parseFloat(p2)) / 2;
        document.getElementById('media').innerText = media;
    }
}