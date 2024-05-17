function imp(){
    const capital = document.getElementById("value").value;
    const juros = document.getElementById("value2").value / 100;
    const tempo = document.getElementById("value3").value;

    const total = capital * (1 + juros)**tempo;

    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2).replace('.', ',');
}
