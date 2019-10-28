"use strict";
//Händelsehanterare
document.getElementById('addCourse').addEventListener('submit', addCourse);

//Länk till webbtjänsten
const url = 'http://localhost:8080/fetch%20api/moment%205%20-%20rest%20api/webservice.php';


//Funktion för JSON
//Lägg till kurs, POST
function addCourse(e){
  e.preventDefault();

  let code = document.getElementById('code').value;
  let name = document.getElementById('name').value;
  let prog = document.getElementById('prog').value;
  let plan = document.getElementById('plan').value;

  fetch(url, {
    method: 'POST',
    body:JSON.stringify({code:code, name:name, prog:prog, plan:plan})
  })
  .then((res) => res.json()) 
  .then((data) => {
    console.log(data);
    getCourses();     //Kalla
  })
  .catch((err) => console.log(err))
}

//Hämta kurser, GET
function getCourses(){
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      let output = "";
      data.forEach(function(courses){
        output += `
        <tr>
        <td>${courses.code}</td>
        <td>${courses.name}</td>
        <td>${courses.prog}</td>
        <td><a href='${courses.plan}'target="_blank">Webblänk</a></td>
        <td><button onclick='updateCourse(${courses.id})'id="update">Uppdatera</button></td>
        <td><button onclick='delCourse(${courses.id})'id="delete">Radera</button></td>
        </tr>
        `;
      });
      document.getElementById('output').innerHTML = output;
    })
}
getCourses();

//Uppdatera kurs, PUT
function updateCourse(id){
  
  fetch(url, {
    method: 'PUT',
    body:JSON.stringify({id:id})
  })
  .then((res) => res.json()) 
  .then((data) => {
    console.log(data);
    getCourses();     //Kalla på hämta kurser
  })
  .catch((err) => console.log(err))
}


//Radera kurs, DELETE
function delCourse(id){

  fetch(url, {
    method: 'DELETE',
    body:JSON.stringify({id:id})
  })
  .then((res) => res.json()) 
  .then((data) => {
    console.log(data);
    getCourses();     //Kalla på hämta kurser
  })
  .catch((err) => console.log(err))
}

