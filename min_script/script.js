let classlistEl = document.querySelector(".class-list");
//skapar grundelement
let classListItem = document.createElement("div")
classListItem.classList.add(".aktivitet-list-item")
classlistEl.appendChild(aktivitetListItem);

// Skapar elementen som ska vara i klassraden:
    // <span>inputName</span>
//skapar sublementen
let aktivitetlistItemAktivitet = document.createElement("span");
classListItemAktivitet.innerText = inputAktivitet;

let aktivitetlistItemRemoveButton = document.createElement("button");
classListItemRemoveButton.innerText = btnText;
classListItemRemoveButton.onclick = removeAktivitet;

//lägg till sublementen till grundelementet
classListItem.appendChild(classListItemAktivitet)
classListItem.appendChild(classListItemRemoveButton)


function createAktivitet(inputAktivitet){ 
    let classlistEl = document.querySelector(".aktivitet-list");

    console.log("hej") 
    if(document.querySelector('.add-aktivitet input').value.length == 0){
        alert("Du måste skriva in en aktivitet, delli")}

classlistEl.innerHTML += `
        <div class="aktivitet-list-item items">
            <span> ${inputAktivitet} </span>
            <button onclick="removeAktivitet(this.parentElement)">Ta bort </button>
        </div>
 
` 
}

function removeAktivitet(parentElement){
    console.log("hejsan");
    parentElement.remove();

}

