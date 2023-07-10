
function loadJSAtOnload() {
var scripts = [

"/films999-main.js",

"/films999-foot.js",

"/films999-pagin.js",

"/films999-fb.js",

"/films999-and.js",


];

for (var i = 0; i < scripts.length; i++) {
    console.log('Loading script ' + scripts[i]);
    var scriptType = document.createElement('script');
    scriptType.type = 'text/javascript';
    scriptType.src = scripts[i];
    document.body.appendChild(scriptType);  
}
};
if (window.addEventListener)
    addEventListener('load', loadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent('onload', loadJSAtOnload);
else window.onload = loadJSAtOnload;