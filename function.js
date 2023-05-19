$(document).ready(function() {
  var documents = [
    'https://docs.google.com/document/d/1EFXN4pdbquNIHxZwTm9zVmTaCB55qDWD/edit?usp=sharing&ouid=117383372408130911949&rtpof=true&sd=true',
    
  ];


  var currentDocument = 0;

  function loadDocument() {
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
