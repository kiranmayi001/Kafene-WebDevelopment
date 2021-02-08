var mainForm = document.getElementById("form")

{/* <input type="text" id="input-name" name="username" placeholder="Enter the username"/><br/> */}
            // <input type="text" id="input-password" name="password" placeholder="Enter the Password"/>
   var inputName = document.getElementById("input-name")         
var inputPassword = document.getElementById("input-password")


mainForm.addEventListener('submit',(e)=>{
    e.preventDefault();
// console.log(inputName.value)
// console.log(inputPassword.value)
if(inputName.value===inputPassword.value){
  
   
    // fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",{
    //   method:"POST",
    //   body:JSON.stringify({username:"Qaifi",password:'Password'}),
    //   headers:{"Content-type":"application/json,charset:UTF-8"}
    // })
    // .then(response=>{
    //   // console.log(response.json())
    //   if(JSON.parse(response).status==200){
        alert("Login Successful")
        localStorage.setItem("isLoggedIn", true)
        
        window.location.href="../orderListing/orderListing.html"
    //   }
    //   // else alert("Login Failed")
    // })
    // // .catch(err=>{
    // //   alert("Login Failed")
    // // })
    
    
}else{
    alert( "Please enter valid credentials!")
    return
}
})



// Active class for Orders, Products, Users
var header = document.getElementById('nav-items')
var items = document.getElementsByClassName("item");
var textsColor =document.getElementsByClassName('tag-anc')
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  });
}
for (let i = 0; i < textsColor.length; i++) {
    textsColor[i].addEventListener("click", function() {
  let current = document.getElementsByClassName(" text");
  current[0].className = current[0].className.replace(" text", "");
  
  this.className += " text";


  });
}