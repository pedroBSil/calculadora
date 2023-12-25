function calcular() {
    const vn = document.getElementById("vn").value;
    const vr = document.getElementById("tipo").value;
    const n = document.getElementById("n").value;

    const da = (vn - (vn * vr)) / n;

    const resultadoDiv = document.getElementById("resultado");
    
    if (!isNaN(da) && isFinite(da)) {
        resultadoDiv.innerHTML = `Depreciação anual: R$ ${da.toFixed(2)}`;
        resultadoDiv.parentNode.style.display = "block";
    } else {
        resultadoDiv.innerHTML = ''; 
        resultadoDiv.parentNode.style.display = "none"; 
    }
}



function LoadTipo() {
    const selectTipo = document.getElementById('tipo');
    selectTipo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = 0;
    optFirst.text = "Selecione um Tipo";

    selectTipo.add(optFirst);

    tipos.forEach((tipo) => {
        const opt = document.createElement('option');
        opt.value = tipo.Valor;
        opt.text = tipo.Descricao;

        selectTipo.add(opt);
    });
}

LoadTipo();

