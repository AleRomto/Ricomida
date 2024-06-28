/*tooltip*/
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  
/*cuando esté ready*/
  $(document).ready(function () {

/*variables*/
/*botones*/
    let btnEnviarAlCorreo = $("#enviarCorreo");
    let btnFavoritos = $("#favoritos");
/*cambios de color*/
    let cambiarColorI = $("#ingredientesPizza");
    let cambiarColorP = $("#preparacion");
/*ocultar texto*/
    let h5 = $("h5");
    let ocultarTexto = $(".card-text");
  
    
/*acciones*/

/*alertas después de presionar el botón*/
    btnEnviarAlCorreo.click(function () {
      alert("El correo fue enviado correctamente");
    });
    btnFavoritos.click(function () {
      alert("¡Se ha añadido a tus favoritos!");
    });
/*cambio de color con doble click*/
    cambiarColorI.dblclick(function IngredientesPizza() {
      $(this).css("color", "red");
    });
    cambiarColorP.dblclick(function () {
      $(this).css("color", "red");
    });
/*ocultar texto de las recetas sugeridas al clickear el título*/
    h5.click(function () {
      ocultarTexto.toggle();
    });
  });