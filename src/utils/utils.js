let reactKey = 0;

export function generateReactKey(){
    return reactKey++;
}

export function ajax(method, url, success){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            success(xhttp.response);
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}
