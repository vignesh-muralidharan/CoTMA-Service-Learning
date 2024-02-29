import React from 'react';
import "./AddC.css";

function handleSubmit(){
  var cowId = document.getElementById("AddCow-cowId");
  var age = document.getElementById("AddCow-age");
  var sick = document.getElementById("AddCow-sick");
  var preg = document.getElementById("AddCow-preg");
  const newAddition = {"cowId": cowId,"age": age, "sick" : sick, "preg": preg};

  let storedData = JSON.parse(localStorage.getItem('cowData'));
  if (!storedData) { //if storeddata doesnt exist, create a new instance
    storedData = [];
  }
  //add new data
  storedData.push(newAddition);

  //push updated array
  localStorage.setItem('cowData', JSON.stringify(storedData));
}


const AddC = () => {
  
  return (
    
    <div class="login-page">
    <div class="form">
      
      <form class="login-form" onSubmit={handleSubmit}>
        <input type="text" id = 'AddCow-cowId' placeholder="cow code"/>
        <input type="text" id = 'AddCow-age' placeholder="age"/>   
        <input type="text" id = 'AddCow-sick' placeholder='health issues'/>
        <input type="text" id = 'AddCow-preg' placeholder='maternity status'/>
        
           
        <button>register</button>
        
        </form>
    </div>
  </div>
  )
}

export default AddC
