document.getElementById("calcular").addEventListener("click", function () {
    let filas = document.querySelectorAll("#malla tr");
    let totalCreditos = 0;
    let sumaPonderada = 0;
    let creditosAprobados = 0;

    for (let i = 1; i < filas.length; i++) {
        let creditos = parseFloat(filas[i].querySelector(".creditos").textContent);
        let nota = parseFloat(filas[i].querySelector(".nota").value) || 0;
        let aprobada = filas[i].querySelector(".aprobada").checked;

        totalCreditos += creditos;
        sumaPonderada += nota * creditos;

        if (aprobada) {
            creditosAprobados += creditos;
        }
    }

    let papa = (sumaPonderada / totalCreditos).toFixed(2);
    let avance = ((creditosAprobados / totalCreditos) * 100).toFixed(1);

    document.getElementById("papa").textContent = papa;
    document.getElementById("avance").textContent = avance;
});
