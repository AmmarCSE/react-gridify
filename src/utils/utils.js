let reactKey = 0;

export function generateReactKey(){
    return reactKey++;
}

export function ajax(method, url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
