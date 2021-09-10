var initialPrice=document.querySelector("#initial-price")
var stocksQuantity=document.querySelector("#stocks-quantity")
var currentPrice=document.querySelector("#current-price")
var submitBtn=document.querySelector("#submit-btn")
var outputBox=document.querySelector("#output-box")

function calculateProfitAndLoss(initial,quantity,current){
   console.log("clicked")
    if(initial>current){
        //loss logic
        var loss=(initial-current) * quantity;
        var lossPercentage=(loss / initial) * 100;
        showOutput(`Hey the loss is ${loss} and loss percent is ${lossPercentage}%` )
        
    }else if(current>initial){
        //profit logic
        var profit=(current-initial) * quantity;
        var profitpercentage=(profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and profit percent is ${profitpercentage}%` )
    }else{
        showOutput("no pain no gain and no gain no pain")
    }
}

function showOutput(msg){
   
    outputBox.innerHTML=msg;
}

function submitHandler(){
    if(initialPrice.value==="" || stocksQuantity.value==="" || currentPrice.value===""){
        outputBox.innerHTML="Please enter all the fields"
    }else{
        calculateProfitAndLoss(Number(initialPrice.value),Number(stocksQuantity.value),Number(currentPrice.value))
    }
  
}

submitBtn.addEventListener("click",submitHandler)
