//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bot").addEventListener("click", function () {
      let cele = document.getElementById("email");
      let contra = document.getElementById("contraseña");
      let campos = true;
  
      if (cele.value === "") {
        cele.classList.add("Incorrecto");
        campos = false;
      } else {
        cele.classList.remove("Incorrecto")
      }
  
      if (contra.value === "") {
        contra.classList.add("Incorrecto");
        campos = false;
      } else {
        contra.classList.remove("Incorrecto")
      }
    })
  });