function tabuada(){
    var number1 = window.document.getElementById('num1')
    var number2 = window.document.getElementById('num2')
    if(num1.value.length== 0 || num2.value.length== 0){
        window.alert('[ERRO] Confira os dados!')
    }else{
        var n = Number(num1.value)
        var n2 = Number(num2.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada do ${n} é:<br>`
        do{
            r = n*x
            res.innerHTML +=`${x} x ${n} = ${r}<br>`
            x++
        }while(x<=n2)
    }
}