var newCommandForm = document.forms.newTaskF; 
setInterval(incrementer_Duree, 1000)
function ajouter(){
    //Vérifier que la récupération se fait bien !)
    console.log(document.forms.newTaskF.tache.value);
    console.log(document.forms.newTaskF.date.value);

    //création des variable pour la création d'une nouvelle ligne dans le tableau
    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    const ajouteeledateTd = document.createElement('td')
    const dureeTd = document.createElement('td')
    dureeTd.classList.add("duree")
    const boutonTd = document.createElement('td')
    var findateTd = document.createElement('td')
    const btn = document.createElement('BUTTON')
    btn.innerText= "Terminer la tâche"
    btn.addEventListener("click", function(){
      dureeTd.className= ""
      if(btn.innerText != "Terminé"){
        findateTd.textContent= debut_fin_tache()
      }
      btn.innerText= "Terminé"
    })
    boutonTd.append(btn)

    taskTd.textContent = document.newTaskF.tache.value
    dateTd.textContent = document.newTaskF.date.value
    categorieTd.textContent = document.newTaskF.categorie.value
    ajouteeledateTd.textContent = debut_fin_tache()
    dureeTd.textContent = "0"

    
    //const selectEntree = document.getElementById("entreeId");
    //const valeurselectionnee = selectEntree.options[selectEntree.selectedIndex].value;
    //const textselectionne = selectEntree.options[selectEntree.selectedIndex].text;
   //Vérification de la récupération
    console.log(taskTd.textContent)
    console.log(dateTd.textContent)
    console.log(categorieTd.textContent)
    console.log(ajouteeledateTd.textContent)

    if (!document.newTaskF.tache.checkValidity() ||
          !document.newTaskF.date.checkValidity() ||
          !document.newTaskF.categorie.checkValidity()
         ) {
               return
        }
    
    //const table = document.querySelector('table')
    newItem.append(taskTd, dateTd, categorieTd, ajouteeledateTd, dureeTd, findateTd, boutonTd)

     /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
    const table = document.querySelector('.datatable tbody')
    /*  Ex2)3)vi) */
    table.appendChild(newItem)
}

 //supprimer toutes les lignes du tableau
function supprimer() {
   const tbody = document.querySelector('.datatable tbody' )
   while (tbody.firstChild) {
   tbody.removeChild(tbody.firstChild)
   }
}


function debut_fin_tache() {
  var d = new Date();
  var date; 
  return  date= (d.getFullYear() + '-' + d.getMonth() + "-"+ d.getDay() + " " + d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds()) 
 }


function incrementer_Duree(){
  let durees=document.getElementsByClassName("duree")
  if(durees.length!=0){
    Array.prototype.forEach.call(durees,
    function(dureeElement){
       let valeur=parseInt(dureeElement.textContent)
       dureeElement.textContent=valeur+1
    });
  }
}