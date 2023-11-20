var sec=0
var min=0

function start(){
  //  console.log("Clicou no start") 
  setInterval(counter, 100)
  
}

function pause(){
    console.log("Clicou no pause")
}

function stop(){
    console.log("Clicou no parar")
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
  document.getElementById("timer").innerText=min+':'+sec
}



