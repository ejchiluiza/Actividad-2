const registrarUsuario = () => {
    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const ciudad = document.getElementById("ciudad").value;

    const usuario = { id, cedula, nombre, fecha, ciudad };
    localStorage.setItem("usuario", JSON.stringify(usuario));
    window.location.href = "tabla.html";
};
