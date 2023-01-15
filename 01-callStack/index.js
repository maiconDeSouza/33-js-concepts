//first in first out = FIFO = O primeiro que entrou é o primeiro a sair.
/*
entrada -> 3 -> 2 -> 1
saída <- 1 <- 2 <- 3
*/

//Last in first out = LIFO = O último que entra é o primeiro que sai
/*
      entrada  saída
      3         3
      2         2
      1         1
*/

function fn1(){
    fn2()
    console.log(`Exec fn1`)
}

function fn2(){
    fn3()
    console.log(`Exec fn2`)
}

function fn3(){
    console.log(`Exec fn3`)
}

fn1()