
var lightTheme = false;
document.documentElement.classList.toggle('dark');

let styleNames = [
    "glassmorphism",
    "cyberpunk"
]
let sidx = 0;

function nextStyle(){
    setStyle(styleNames[sidx]);
    sidx++;
    if(sidx >= styleNames.length) sidx = 0;
}

function switchTheme(){
    const body = document.documentElement;
    body.classList.toggle('dark');
    body.classList.toggle('light');
    lightTheme = !lightTheme
}

function connectStyle(name){
    const linkElement = document.createElement('link');

    linkElement.rel = 'stylesheet'; 
    linkElement.type = 'text/css'; 
    linkElement.href = `/styles/${name}.css`; 
    linkElement.id = name;

    document.head.appendChild(linkElement);
}
function removeStyle(name){
    var linkElement = document.getElementById(name);
    if(linkElement != null) linkElement.remove();
}

function setStyle(stylename, dark){
    if(dark == lightTheme) switchTheme();
    styleNames.forEach(style=>removeStyle(style));

    connectStyle(stylename);

    if(stylename == "glassmorphism") initFireflies();
    else removeFireflies();
}