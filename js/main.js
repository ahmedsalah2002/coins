
async function get(){
    let repo= await fetch ("https://api.currencyfreaks.com/latest?apikey=dffc0675950a466e95c579850072e488&");
    let data=await repo.json();
    
    console.log(data.rates);
    let fromSelect=document.querySelector("#from-select")
    let toSelect=document.querySelector("#to-select")
    let fromNumber=document.getElementById("from-number")
    let toNumber=document.getElementById("to-number")
    let opt
    for(let i=0;i<Object.keys(data.rates).length;i++){
        opt=document.createElement("option");
        opt.innerHTML=Object.entries(data.rates).sort()[i][0];
        opt.value=i
        fromSelect.appendChild(opt)
    }
    
    for(let i=0;i<Object.keys(data.rates).length;i++){
        
        let opt=document.createElement("option");
        opt.innerHTML=Object.entries(data.rates).sort()[i][0];
        opt.value=i
        toSelect.appendChild(opt)
    }
    
    let fromVal;
    let fromResult;
    fromSelect.addEventListener("change",function(){
        fromVal =parseInt(fromSelect.options[fromSelect.selectedIndex].value);
        fromResult=Number(Object.entries(data.rates).sort()[fromVal][1])
        console.log(fromResult);
    })
    let toVal;
    let toResult;
    toSelect.addEventListener("change",function(){
        toVal =parseInt(toSelect.options[toSelect.selectedIndex].value);
        toResult=Number((Object.entries(data.rates).sort()[toVal][1]))
        console.log(toResult);
    })
    document.querySelector(".button1").addEventListener("click",function(){
        toNumber.value=fromNumber.value*toResult/fromResult;
    }) 
    document.querySelector(".button2").addEventListener("click",function(){
        fromNumber.value=toNumber.value*fromResult/toResult;
    })
    console.log(Object.entries(data.rates).sort());
}

get()




