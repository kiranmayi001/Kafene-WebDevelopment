var userListData;
var tabel = document.getElementById("table")
var ancTag=document.getElementById('anc-tag');
let mainSection=document.getElementById('main-page')

if(JSON.parse(localStorage.getItem("isLoggedIn"))==false){ 
    mainSection.style.display='none' 
}

fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
.then(response=>{
    // console.log(response)
    return response.json()
})
.then(data=>{
    console.log(data)
    userListData = data;
    for(let i = 0; i<data.length;i++){

      tabel.appendChild(createCards(data[i])
)    }
})
.catch(err=>{
    console.log("error")
})


ancTag.addEventListener('click',function(){
    localStorage.setItem("isLoggedIn", false)
    window.location.href="../LoginPage/LoginPage.html"
})

var searchInput = document.getElementById("search-input");

searchInput.addEventListener("keyup",(e)=>{
    console.log(e.target.value)

    if(e.target.value.length<2){
        alert("Please enter at least 2 characters")
}
    else{
         for(let i=0; i<userListData.length;i++){
            if(userListData[i].fullName.toLowerCase().includes(e.target.value.toLowerCase())){
              let dataId = document.getElementById(userListData[i].id);
              dataId.style.display="";
            }else{
                let dataId = document.getElementById(userListData[i].id);
                dataId.style.display="none" 
            }
         }
    }
    
})

//reset button

var resetButton = document.getElementById("reset-button")
resetButton.addEventListener('click',(e)=>{
    e.target.value="";
    searchInput.value="";
for(let i=0;i<userListData.length;i++)
{
    let dataId=document.getElementById(userListData[i].id)
        dataId.style.display="";
    
}
})
// input
// input.length<2 return
// lowercase,
// if(onputincludes firstname)
{/* <tr id="table-row" >
<td class="  id" >ID</td>
<td class=" product-name"><img class="img" src="" alt=""/></td>
<td class=" product-brand">Full Name</td>
<td class=" expiry-date">DoB</td>
<td class=" unit-price">Gender</td>
<td class=" stock">Current Location</td>
</tr> --> */}
function createCards(data){
var tableRow = document.createElement("tr")
tableRow.id=data.id;
tableRow.classList.add("table-row")

var tableId = document.createElement("td");
tableId.classList.add("id");
tableId.innerText=data.id

tableRow.appendChild(tableId)

var tableImg = document.createElement("td");
tableImg.classList.add("product-name");

var imgAvt = document.createElement("img")
imgAvt.src=data.profilePic;
imgAvt.alt=data.id
imgAvt.classList.add("img")

tableImg.appendChild(imgAvt)

tableRow.appendChild(tableImg)

var tableName = document.createElement("td");
tableName.classList.add("product-brand");
tableName.innerText=data.fullName

tableRow.appendChild(tableName)

var tableDob = document.createElement("td");
tableDob.classList.add("expiry-date","Date-of-birth");
// tableDob.classList.add(" Date-of-birth")
tableDob.innerText=data.dob

tableRow.appendChild(tableDob)

var tableGender = document.createElement("td");
tableGender.classList.add("unit-price");
tableGender.innerText=data.gender

tableRow.appendChild(tableGender)

var tableCurrLoc = document.createElement("td");
tableCurrLoc.classList.add("stock");
tableCurrLoc.innerText=data.currentCity+","+data.currentCountry

tableRow.appendChild(tableCurrLoc)

return tableRow;
}

// createCards()