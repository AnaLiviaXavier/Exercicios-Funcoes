// exercicios de interpretação
// 1.
// 1.a) Será impresso: 10   
//                     50
// 1.b) A função executaria o resultado, mas este não aparecera no console

// 2.
// 2.a) Esta função faz com que o texto que o usuario escreveu seja passado para
// letras minúsculas, e entao retorne no console true ou false se neste texto há 
// a string "cenoura"
// 2.b) i. true
// 2.b) ii. true
// 2.c) iii. false



// exercicios de escrita de código
// 1.a) 

   imprimeFrase = (text) => {
        return text
    }
    console.log(imprimeFrase('1.a) Eu sou Ana, tenho 18 anos, moro em São Leopoldo e sou estudante!!!'))

// 1.b)

    imprimeFrase2 = function(nome,idade,cidade,profissao){
        return `1.b) Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}. `

    }
    console.log(imprimeFrase2('Fulaninho', 30, 'Porto Alegre', 'Bombeiro'))

// 2.a)

    somaDoisNumeros = (x,y) =>{
        soma = x + y
        return soma
    }

    console.log('2.a) A soma é: ', somaDoisNumeros(2,3))

// 2.b) 
    informaMaior = function(){
        n1 = prompt('2.b) Digite o primeiro numero:')
        n2 = prompt('2.b) Digite o segundo numero:')
        return n1>=n2
    }
   console.log('2.b) ', informaMaior())

//  2.c)
    informaPar = () => {
        numero = prompt('2.c) Digite um número: ')
        return numero % 2 == 0
    }
    console.log('2.c) ', informaPar())

// 2.d)
    TamanhoEUpper = function(texto){
        
        return texto.length+ ' - '+  texto.toUpperCase()
    }
    console.log('2.d) ', TamanhoEUpper('abcde fgh ijk'))

// 3
    somar = (a,b) =>{
        return a+b
    }

    subtrair = (a,b) =>{
        return a-b
    }

    multiplicar = (a,b)=>{
        return a * b 
    }

    dividir = (a,b) =>{
        return a /b
    }

    let A = Number(prompt('3) Digite um número'))
    let B = Number(prompt('3) Digite outro número'))

    console.log(`3) Números digitados: ${A}  ${B}`+ 

        '\n Adição: '+ somar(A,B)+
        '\n Subtração: '+subtrair(A,B)+
        '\n Multiplicação: ',multiplicar(A,B),
        '\n Divisão: ',(dividir(A,B).toFixed(2))

    )

    // desafios

//  1.a) 
    
    
//  1.b)
    recebeValores = (c,q)=>{
        console.log('1.b) TESTANDO - Parametros: '+c+' '+q)
        outraSoma = c + q
        console.log('1.b) Soma funciona? '+ outraSoma)
        imprimeParametro(outraSoma)
        imprimeParametro = (conteudo) => {
            alert(conteudo)
            return conteudo
        
        }
    }

console.log(recebeValores(3,9))
    

//  2)
    teoremaPitagoras = function(c1, c2){
        hAoQuadrado = (c1*c1) + (c2*c2)
        hRaizQuadrada = Math.sqrt(hAoQuadrado)
        return hRaizQuadrada
    }
    console.log('Desafio 2:  hipotenusa: ', teoremaPitagoras(6,8))