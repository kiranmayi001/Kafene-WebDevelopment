let   mainSection=document.getElementById('main-page')
    var table = document.getElementById("table");
var orders;
// console.log(orders)
var ancTag=document.getElementById('anc-tag');

if(JSON.parse(localStorage.getItem("isLoggedIn"))==false){
    mainSection.style.display="none"
    // window.location.href="../LoginPage/LoginPage.html"
   
//    return;
}  
 
// window.addEventListener()

ancTag.addEventListener('click',function(){
    localStorage.setItem("isLoggedIn", false)
    // mainSection.style.display="none"
    window.location.href="../LoginPage/LoginPage.html"
})


fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
.then(response=>{
    console.log(response)
    return response.json()
})
.then(data=>{
    orders=data;
    console.log(data)
    for(let i=0;i<data.length;i++){
        table.appendChild(cards(data[i]));
    }
   
    // orders.push(data)
})
.catch(err=>{
    console.log("error")
})


let countpara=document.getElementById('num');
let count=0;
console.log(orders)
var selectedCheckBox = {
    New:true,
    Packed:true,
    InTransit:true,
    Delivered:true
}

let checkedBoxes = document.getElementById("checked-boxes");
checkedBoxes.addEventListener('click',(e)=>{
    count=0;
    selectedCheckBox[e.target.name]=e.target.checked
    console.log(selectedCheckBox)


    for(let item of orders){
        var cards = document.getElementById(item.id)
        if(!selectedCheckBox[item.orderStatus]){
           
        cards.style.display="none"        
        
    }else{
        // var cards = document.getElementById(item.id)
        cards.style.display="" 
        count+=1;
    }
countpara.innerText=count;
}

})


function cards(data){

var tableRow = document.createElement("tr")
tableRow.id=data.id;
tableRow.classList.add("cardColor")

var dataId = document.createElement("td")
dataId.classList.add("id");
dataId.innerText = data.id

tableRow.appendChild(dataId)

var dataCustomer = document.createElement("td")
dataCustomer.classList.add("product-name");
dataCustomer.innerText = data.customerName

tableRow.appendChild(dataCustomer)


var dataDate = document.createElement("td")
dataDate.classList.add("product-brand");
dataDate.innerText = data.orderDate

var breaks = document.createElement("br")
dataDate.appendChild(breaks)

var span= document.createElement("span")
span.innerText=data.orderTime;
span.classList.add("time")

dataDate.appendChild(span)

tableRow.appendChild(dataDate)
{/* <td>"expiry-date"<br><span></span></td> */}
var dataExpiryDate = document.createElement("td")
dataExpiryDate.classList.add("expiry-date");
dataExpiryDate.innerText ="$"+data.amount



tableRow.appendChild(dataExpiryDate)


var dataStatus = document.createElement("td")
dataStatus.classList.add("unit-price");
dataStatus.innerText = data.orderStatus

tableRow.appendChild(dataStatus)

return tableRow

}



