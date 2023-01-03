const CLASS_ITEM_FILTER_ALL = "Alla";

let classlistEl = document.querySelector(".aktivitet-list");
//skapar grundelement
let classListItem = document.createElement("div")
classListItem.classList.add(".class-list-item")
classlistEl.appendChild(classListItem);

// Skapar elementen som ska vara i klassraden:
    // <span>inputName</span>
//skapar sublementen
let classlistItemAktivitet = document.createElement("span");
classlistItemAktivitet.class = "class-list-item-aktivitet";
classlistItemAktivitet.innerText = inputAktivitet;

let classlistItemDatum = document.createElement("span");
classlistItemDatum.id = "class-list-item-datum";
classlistItemDatum.innerText = inputDatum;

let classlistItemKategori = document.createElement("span");
classlistItemKategori.id = "class-list-item-kategori";
classlistItemKategori.innerText = inputKategori;

let classlistItemRemoveButton = document.createElement("button");
classlistItemRemoveButton.innerText = btnText;
classlistItemRemoveButton.onclick = removeAktivitet;

//lägg till sublementen till grundelementet
classListItem.appendChild(classlistItemAktivitet)
classListItem.appendChild(classlistItemDatum)
classListItem.appendChild(classlistItemKategori)
classListItem.appendChild(classlistItemRemoveButton)




function createAktivitet(inputAktivitet, inputDatum, inputKategori){ 
    
    // ska jani skapa min "container/klassrad":
    // <div class="class-list-item"></div>
    let classlistEl = document.querySelector(".aktivitet-list");
  
    console.log("la till") 
    if(document.querySelector('.add-aktivitet input').value.length == 0){
        alert("Du måste skriva in en aktivitet, delli")}


classlistEl.innerHTML += `
        <div class="class-list-item items">
            <span class="class-list-item-aktivitet"> ${inputAktivitet} </span>
            <span class="class-list-item-datum"> ${inputDatum} </span>
            <span class="class-list-item-kategori">${inputKategori}</span>
            <button onclick="removeAktivitet(this.parentElement)">Ta bort </button>
        </div>
 
` 
}

function removeAktivitet(parentElement){
    console.log("tog bort");
    parentElement.remove();
}

function filterAktiviteter(filterValue)
{
    let classlistElements = document.querySelectorAll(".class-list-item");
    let filterKategori = document.querySelector('input[type="radio"]:checked.filter-kategori').value; //

    console.log(classlistElements);

    classlistElements.forEach((listItem)=>{
        console.log(listItem);

        const itemAktivitet = listItem.querySelector(".class-list-item-aktivitet").innerText;

        const itemKategori = listItem.querySelector(".class-list-item-kategori").innerText; //
        
        console.log(itemAktivitet, filterValue);
        console.log(itemAktivitet.indexOf(filterValue));
        console.log("funkar", filterKategori);

        if(itemAktivitet.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
            console.log(itemKategori, 1);
        }
        else if(itemKategori !== filterKategori && filterKategori !== CLASS_ITEM_FILTER_ALL)
        {
            listItem.classList.add("hide");
            console.log(itemKategori, 2);
        }
        else
        {
            listItem.classList.remove("hide");
            console.log(itemKategori, 3);
        }
    });
}
