function submitForm() {
    
    document.getElementById("loading").style.display = "block"

    setTimeout(function () {

        document.getElementById("loading").style.display = "none";

        var name = document.getElementById("name").value;
        var gender = document.querySelector('input[name="tracao"]:checked').value;
        var marca = document.getElementById("marca").value;
        var turbo = document.getElementById("turbo").checked;
        var table = document.getElementById("responseTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = gender;
        cell3.innerHTML = marca;
        cell4.innerHTML = turbo ? "Sim" : "Não";

        document.getElementById("form").reset();
    }, 2000); 
}