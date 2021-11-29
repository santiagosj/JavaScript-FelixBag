/**
 * con este bloque de codigo corroboramos que el objeto window del navegador contenga en su api la clase para instanciar ActiveX object
 * en caso de mozila safari chrome etc.. XMLHttpRequest y en IE ActiveXObject.
 *
 if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    http_request = new XMLHttpRequest();
 } else if (window.ActiveXObject) { // IE
    http_request = new ActiveXObject("Microsoft.XMLHTTP");
 }


 http_request = new XMLHttpRequest();
 http_request.overrideMimeType('text/xml');

 http_request.onreadystatechange = nameOfTheFunction;

 */