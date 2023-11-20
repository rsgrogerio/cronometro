var sec=0
var min=0
var interval
var isRunning = false

function digito(digit){
    if(digit < 10){
        return('0'+digit)
    }else{
        return digit
    }
}

function start(){
    //verificar se o cronometro já esta em execução
    if(!isRunning){
        isRunning = true
        //variavel recebe o valor do setInterval
        interval= setInterval(counter, 1000)
    }
}

function pause(){
    //clearInterval é um metodo para cancelar o tempo da chamada setInterval
    //que esta continda na variavel interval passada como parametro
    clearInterval(interval)
    isRunning = false
}

function stop(){
    //ira parar de contar, depois irá zerar o contador e mudar o diplay para 00:00
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById("timer").innerText='00:00'
    isRunning = false
}

function counter(){
 // console.log("Contando...")
 //setInterval repete chamado de funções com tempo de espera fixo(um CRON)
 //innerText --> muda pra mim o texto interno 00 para valor da variavel sec
  sec++
  if(sec==60){
    min++
    sec=0
  }
  document.getElementById("timer").innerText=digito(min)+':'+digito(sec)
}



