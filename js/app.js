function loadScript() {
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js')
  .done(function () {
    swal("Ahora sí!", "El script de Sweetalert fue cargado y puede ser utilizado", "success");
  })
};

$('#without-script').click(function() {
  swal("SweetAlert", "Funciona si primero le das a cargar script", "success");
})

$('#with-script').click(loadScript);
