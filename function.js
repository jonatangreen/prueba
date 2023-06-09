$(document).ready(function() {

  var documents = [
    'https://docs.google.com/document/d/1EFXN4pdbquNIHxZwTm9zVmTaCB55qDWD/edit?usp=sharing&ouid=117383372408130911949&rtpof=true&sd=true',
    'https://docs.google.com/document/d/1affzNA5jLRsbv6UyGHEwcSE_7Dy22q6eALhoqOHzLfg/edit?usp=sharing'
  ];


  var currentDocument = 0;

  function loadDocument() {
      // Verificar si la página ya ha sido visitada
if (document.cookie.includes('visited')) {
  // La página ya ha sido visitada, no contarla nuevamente
  console.log('Página ya visitada');
} else {
  // La página no ha sido visitada, contarla como una nueva vista
  console.log('Nueva vista de página');

  // Establecer una cookie para indicar que la página ha sido visitada
  document.cookie = 'visited=true; path=/';
}
    var documentUrl = documents[currentDocument];
    $('#document-container').html('<iframe src="' + documentUrl + '&embedded=true" style="width:100%; height:100%;" frameborder="0"></iframe>');

    currentDocument++;
    if (currentDocument >= documents.length) {
      currentDocument = 0;
    }
  }

  // Carga el primer documento al iniciar
  loadDocument();

  // Carga el siguiente documento cada 10 segundos (10000 ms)
  setInterval(loadDocument, 10000);
});
