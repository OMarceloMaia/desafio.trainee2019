var array = []
function numerosPrimos(array) {

    //array = [2, 3, 1, 97] usado para teste

    var tamanho = array.length
    console.log(tamanho)
    var qtD = 0     //Qtd de divisões em um número
    var qt = 0      //Qtd de números primos

    for (var i = 0; i < tamanho; i++) {
        qtD = 0
        for (var j = 1; j <= array[i]; j++) {
            if (array[i] % j == 0) { qtD++ }
        }
        if (qtD == 2) {
            qt++
        }
        
    }

    console.log(qt)
    return qt
}
numerosPrimos();