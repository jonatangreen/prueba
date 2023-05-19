$(document).ready(function() {
  var documents = [
    'https://docs.google.com/spreadsheets/d/1_d75C1agT45j6r6CS6FW5W-m37iokVOi/export?format=xlsx',
    'https://docs.google.com/document/d/1affzNA5jLRsbv6UyGHEwcSE_7Dy22q6eALhoqOHzLfg/export?format=docx',
    'https://docs.google.com/document/d/1EFXN4pdbquNIHxZwTm9zVmTaCB55qDWD/export?format=docx'
  ];

  var currentDocument = 0;

  function loadDocument() {
    var documentUrl = documents[currentDocument];
    $('#document-container').html('<iframe src="https://docs.google.com/gview?url=' + encodeURIComponent(documentUrl) + '&embedded=true" style="width:100%; height:100%;" frameborder="0"></iframe>');

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
