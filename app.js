function operacao(a, b, callback){
    return callback(a, b)
}

function soma (a, b){
    return a + b
};

console.log(operacao(10, 12, soma))
