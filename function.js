$(document).ready(function() {
  var documents = [
    'https://drive.google.com/file/d/1quTsE31hGYIUJSflqytLtAeoOw-t36Or/view?usp=sharing',
    
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
