var input_content = document.getElementById("operation").value;


function push (key) 
{    
    switch(key) {
        case 'C':
            document.getElementById("operation").value = ' ';
            break;
    
        
        case '=':

            var resultado = eval(document.getElementById("operation").value);
            document.getElementById("operation").value = resultado;
            break;
            
        default:
            document.getElementById("operation").value = document.getElementById("operation").value + key;
    }
    
}


function erase_num(){
    var last = document.getElementById("operation").value;
    var new_val = last.substring(0, last.length-1);

    document.getElementById("operation").value = new_val;
}


//Operaciones que tendria la parte cientifica
//Trabajar con seno

function sin(n1){
    r = Math.sin(n1);
    return r;
}

//Trabajar con coseno

function cos(n1){
    r = Math.cos(n1);
    return r;
}

//Trabajar con la tangente

function tan(n1){
    r = Math.tan(n1);
    return r;
}

//Trabajar con logaritmo de un numero

function log(n1){
    r = Math.log(n1);
    return r;
}

//Trabajar con potencia

function pow(n1, n2){
    r = Math.pow(n1, n2);
    return r;
}

//Trabajar con raiz cuadrada

function raiz(n1){
    r = Math.sqrt(n1);
    return r;
}

// Trabajar con potencia

function prc(n1, n2){
    r = ((n1/100)*n2);
    return r;
}