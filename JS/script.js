

const todoList = [];
function displayTodo(){
    var displayTxt = document.getElementById("tasktext").value;
    if (displayTxt ==""){
        document.getElementById('invalid').innerHTML=`Enter some text you schmuck!`}
        else{
    todoList.push(displayTxt);
    var liID=parseInt(Math.random()*100000);    
    var low = document.getElementById('btnradio2');
    var hi = document.getElementById('btnradio3');
    if(low.checked==true){
    displayTxt = document.getElementById('list').innerHTML+=`
    <li class="alert alert-secondary" id=${liID}><button onClick="document.getElementById('${liID}').remove()"><i class="fas fa-times"></i></button> ${displayTxt} </li>`
    }else if(hi.checked==true){
    displayTxt = document.getElementById('list').innerHTML+=`
    <li class="alert alert-danger" id=${liID}><button onClick="document.getElementById('${liID}').remove()"><i class="fas fa-times"></i></button> ${displayTxt} </li>`
    }else{
    displayTxt = document.getElementById('list').innerHTML+=`
    <li class="alert alert-light" id=${liID}><button onClick="document.getElementById('${liID}').remove()"><i class="fas fa-times"></i></button> ${displayTxt}</li>`  
    }
// console.log(priority)
    document.getElementById("tasktext").value="";
    document.getElementById('btnradio2').checked = false;
    document.getElementById('btnradio3').checked =false;
    document.getElementById('invalid').innerHTML="";
}}