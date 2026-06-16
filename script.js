function mostrarMensaje() {
    alert("¡Bienvenido a Colombia 5.0!");
}

const reloj = document.getElementById("reloj");

if (reloj) {
    setInterval(() => {
        const fecha = new Date();
        reloj.textContent = "Fecha y hora: " + fecha.toLocaleString();
    }, 1000);
}

const btnArriba = document.getElementById("btnArriba");

if (btnArriba) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}