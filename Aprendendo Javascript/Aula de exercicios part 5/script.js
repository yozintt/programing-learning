function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert(`[ERRO] Faltam Dados!`)
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido! Passo deve ser 1 ou maior')
            p = 1
        }
        if(i < f) { 
            //contagem crescente:
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        } else { 
            //contagem regressiva:
            for(let c = i; c >= f;c -= p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
        
        
