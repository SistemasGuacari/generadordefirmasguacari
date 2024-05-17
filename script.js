function generarYDescargarFirma() {
  // ... (código anterior para generar la firma HTML) ...

  // Definir el tamaño del lienzo para la imagen
  var width = 990; // Ancho en píxeles
  var height = 200; // Alto en píxeles

  // Convertir la firma a imagen y descargar
  html2canvas(document.getElementById("firma"), { width: width, height: height }).then(function(canvas) {
    var imgData = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = "firma.png";
    link.href = imgData;
    link.click();
  });
}
