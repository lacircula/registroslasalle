const titles={dashboard:"Resumen general",report:"Nuevo reporte",students:"Alumnos",followup:"Seguimiento"};
function showView(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===id));document.getElementById("pageTitle").textContent=titles[id]||"SIGE";document.getElementById("sidebar").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll(".nav-link").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("incidentDate").value=new Date().toISOString().slice(0,10);
document.getElementById("reportForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMessage").textContent="Demostración: el formulario funciona visualmente, pero aún no guarda información. La conexión segura a la base de datos se implementará en la siguiente fase.";});
document.querySelectorAll("[data-student]").forEach(b=>b.addEventListener("click",()=>alert("Vista de historial de demostración. La ficha individual se conectará cuando integremos la base de datos.")));
const search=document.getElementById("studentSearch"),filter=document.getElementById("groupFilter");
function filterStudents(){const q=search.value.toLowerCase(),g=filter.value;let shown=0;document.querySelectorAll("#studentRows tr").forEach(row=>{const ok=row.textContent.toLowerCase().includes(q)&&(!g||row.children[1].textContent===g);row.hidden=!ok;if(ok)shown++;});document.getElementById("emptyStudents").hidden=shown!==0;}
search.addEventListener("input",filterStudents);filter.addEventListener("change",filterStudents);
