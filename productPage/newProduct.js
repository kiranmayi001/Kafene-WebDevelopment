let products;
let count;

var toTable = document.getElementById("table")

fetch("https://5ee249468b27f300160948f0.mockapi.io/PracticeArena")
.then(response=>{

    return response.json()
})
.then(data=>{
    products=data;
  for(let i=0;i<data.length;i++){
   let tableRow = cards(data[i])
  toTable.appendChild(tableRow)
  }
   
})
.catch(err=>{
    console.log("error")
})



// select Objects
var select={
    expiry:false,
    outofstock:false
}

////////////////Add Event Listener for Low Stock
lowStock = document.getElementById('low-stock');
lowStock.addEventListener('click',(e)=>{

    select["outofstock"]=e.target.checked
    if(select["outofstock"] === true) {
        for(let i=0; i<products.length;i++){
            const productRow =document.getElementById(products[i].id)
            if(products[i].stock>100){
                console.log(products[i].id)
            //    count= count+1
                console.log(productRow);
                productRow.style.display= "none"; ///display: none ..dont use visibility:"hidden"
            }
           
        }
    }
    else{
        for(let i=0; i<products.length;i++){
            const productRow =document.getElementById(products[i].id)
                productRow.style.display= "";
        }
    }
})



function cards(data){
    var tableRow=document.createElement("tr");
    tableRow.id=data.id;
    tableRow.classList.add("table-row")
    
    var data1=document.createElement("td");
    data1.classList.add("id");
    data1.innerText=data.id
    
    tableRow.appendChild(data1)
    
    var data2=document.createElement("td");
    data2.classList.add("product-name");
    data2.innerText=data.medicineName
    
    tableRow.appendChild(data2)
    
    var data3=document.createElement("td");
    data3.classList.add("product-brand");
    data3.innerText=data.medicineBrand
    
    tableRow.appendChild(data3)
    
    
    var data4=document.createElement("td");
    data4.classList.add("expiry-date");
    data4.innerText=data.expiryDate
    
    tableRow.appendChild(data4)
    
    var data5=document.createElement("td");
    data5.classList.add("unit-price");
    data5.innerText=data.unitPrice
    
    tableRow.appendChild(data5)
    
    var data6=document.createElement("td");
    data6.classList.add("stock");
    data6.innerText=data.stock
    
    tableRow.appendChild(data6)
    console.log(tableRow)
    
 return tableRow;
}
