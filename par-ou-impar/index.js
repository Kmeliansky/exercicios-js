let valor = prompt("Digite o numero para saber se é par ou impar") 
if (valor % 2 == 0) { 
    document.write(`<span>o numero ${valor} é par. recarregue a pagina ou pressione F5 para digitar novamente</span>`)
} else {
    document.write(`<span>o numero ${valor} é impar. recarregue a pagina ou pressione F5 para digitar novamente</span>`)
}