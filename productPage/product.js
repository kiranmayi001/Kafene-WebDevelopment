fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response=>{
    // console.log(response)
    return response.json()
})
.then(data=>{
    console.log(data)
    // data.map(item=>{
        // for(var i=0;i<data.length;i++){
        // insertInfoFromResponse(data[i])
        localStorage.setItem("fetchedData",JSON.stringify(data))
    // })
        // }   
})
.catch(err=>{
    console.log("error")
})


var select={
    expired:false,
    outofstock:false
}

// var global= 
let countpara=document.getElementById('num');
let count=0;

//<input id="low-stock"type="checkbox" name="LowStock" /><span>Low Stock</span>

// 
// if(select.outofstock===false){

// function insertInfoFromResponse(data){

    // console.log("resp=>"+JSON.parse(JSON.stringify(data)))
    // console.log(data)
    // if(select.outofstock!==true){

    // var respo=JSON.parse(localStorage.getItem("fetchedData"))
    // res(respo)
    // }else{
    var lowStock=document.getElementById("low-stock")
    lowStock.addEventListener("change",(e)=>{
        count=0;
        var filteredArr=[]
        var respo=JSON.parse(localStorage.getItem("fetchedData"))
        console.log(lowStock.checked)
        if(lowStock.checked===true){
        select.outofstock=lowStock.checked
        console.log(select)
        if(select.outofstock===true){
            for(var i=0;i<respo.length;i++){
                if(respo[i].stock<100){
                    count+=1;
              filteredArr.push(respo[i])
;                }
            }
            // localStorage.clear("fetchedData")
            localStorage.setItem("fetchedData",JSON.stringify(filteredArr))
            countpara.innerText=count;
 var onclick=JSON.parse(localStorage.getItem("fetchedData"))
 console.log(onclick)
res(onclick);
        }
      
    }else{
        var respo=JSON.parse(localStorage.getItem("fetchedData"))
        res(respo)
    }
    })
// }

  

    function res(data){
for(var i=0;i<data.length;i++){

var tableRow=document.createElement("tr");
tableRow.id="table-row";
tableRow.classList.add="cardColor"

var data1=document.createElement("td");
data1.classList.add("id");
data1.innerText=data[i].id

tableRow.appendChild(data1)

var data2=document.createElement("td");
data2.classList.add("product-name");
data2.innerText=data[i].medicineName

tableRow.appendChild(data2)

var data3=document.createElement("td");
data3.classList.add("product-brand");
data3.innerText=data[i].medicineBrand

tableRow.appendChild(data3)


var data4=document.createElement("td");
data4.classList.add("expiry-date");
data4.innerText=data[i].expiryDate

tableRow.appendChild(data4)

var data5=document.createElement("td");
data5.classList.add("unit-price");
data5.innerText=data[i].unitPrice

tableRow.appendChild(data5)

var data6=document.createElement("td");
data6.classList.add("stock");
data6.innerText=data[i].stock

tableRow.appendChild(data6)

var table=document.getElementById("table")

table.appendChild(tableRow)
}

// console.log(table)
// }
    }