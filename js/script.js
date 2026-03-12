const API = "http://localhost:8080/api";

/* Load Internships */

if(document.getElementById("internshipList")){

fetch(API + "/internships")

.then(res=>res.json())

.then(data=>{

let html="";

data.forEach(i=>{

html+=`
<div class="card">
<h3>${i.title}</h3>
<p>${i.company}</p>
<p>${i.location}</p>
<a href="apply.html"><button>Apply</button></a>
</div>
`;

});

document.getElementById("internshipList").innerHTML=html;

});

}


/* Submit Application */

const form=document.getElementById("applyForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const application={

name:document.getElementById("name").value,
email:document.getElementById("email").value,
internshipId:document.getElementById("internshipId").value

};

fetch(API+"/applications",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(application)

})

.then(res=>res.json())
.then(data=>{
alert("Application Submitted Successfully");
});

});

}


/* Applications List */

if(document.getElementById("applicationsTable")){

fetch(API+"/applications")

.then(res=>res.json())

.then(data=>{

let html="";

data.forEach(a=>{

html+=`
<tr>
<td>${a.id}</td>
<td>${a.name}</td>
<td>${a.email}</td>
<td>${a.internshipId}</td>
</tr>
`;

});

document.getElementById("applicationsTable").innerHTML=html;

});

}