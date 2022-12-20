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

let aktivitetlistItemRemoveButton = document.createElement("button");
classlistItemRemoveButton.innerText = btnText;
classlistItemRemoveButton.onclick = removeAktivitet;

//lägg till sublementen till grundelementet
classlistItem.appendChild(classListItemAktivitet)
classlistItem.appendChild(classlistItemDatum)
classlistItem.appendChild(classlistItemKategori)
classlistItem.appendChild(classListItemRemoveButton)




function createAktivitet(inputAktivitet){ 
    let classlistEl = document.querySelector(".aktivitet-list");

    console.log("la till") 
    if(document.querySelector('.add-aktivitet input').value.length == 0){
        alert("Du måste skriva in en aktivitet, delli")}


classlistEl.innerHTML += `
        <div class="class-list-item items">
            <span class="class-list-item-aktivitet"> ${inputAktivitet} </span>
            <button onclick="removeAktivitet(this.parentElement)">Ta bort </button>
        </div>
 
` 
}

// <span> ${inputDatum} </span>
            // <span> ${inputKategori}</span>


// let aktivitetObj = {
//     aktivitet: inputAktivitet,
//     datum: inputDatum,
//     kategori: inputKategori,
// }
//     let inputTypeEl.value;

// 


// function createAktivitet(inputAktivitet, inputDatum, inputKategori){
// }



 // 



// function createAktivitet(inputAktivitet){
//     const DEFAULT_OPTION = "Välj en kategori";

//     let inputElem;
//     inputDatum;
//     todoList = [];

//     function getElements() {
//         inputDatum = documnet.getElementById("inputDatum ")
//     }

//     function addEntry(event) {
//         let dateValue = inputDatum.value;
//         inputDatum.value = "";

// let obj = {
//     date: dateValue, 
// . };



function removeAktivitet(parentElement){
    console.log("tog bort");
    parentElement.remove();

}

function filterAktiviteter(filterValue)
{
    let classlistElements = document.querySelectorAll(".class-list-item");
    // let inputValue = document.querySelector("#inputFilter");

    console.log(classlistElements);

    classlistElements.forEach((listItem)=>{
        console.log(listItem);

        const itemAktivitet = listItem.querySelector(".class-list-item-aktivitet").innerText;
        
        console.log(itemAktivitet, filterValue);
        console.log(itemAktivitet.indexOf(filterValue));
        console.log("funkar");

        if(itemAktivitet.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        }
    });
}