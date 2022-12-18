let classlistEl = document.querySelector(".class-list");
//skapar grundelement
let classListItem = document.createElement("div")
classListItem.classList.add(".aktivitet-list-item")
classlistEl.appendChild(aktivitetListItem);

// Skapar elementen som ska vara i klassraden:
    // <span>inputName</span>
//skapar sublementen
let classlistItemAktivitet = document.createElement("span");
classListItemAktivitet.id = "aktivitet-list-item-aktivitet";
classListItemAktivitet.innerText = inputAktivitet;

let aktivitetlistItemRemoveButton = document.createElement("button");
classListItemRemoveButton.innerText = btnText;
classListItemRemoveButton.onclick = removeAktivitet;

//lägg till sublementen till grundelementet
classListItem.appendChild(classListItemAktivitet)
classListItem.appendChild(classListItemRemoveButton)




function createAktivitet(inputAktivitet){ 
    let classlistEl = document.querySelector(".aktivitet-list");

    console.log("la till") 
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
    console.log("tog bort");
    parentElement.remove();

}

// function filterAktiviteter(filterValue){
//     let classlistElements = document.querySelectorAll(".aktivitet-list-item");
    
//     classlistElements.forEach((listItem)=>{
//         const itemAktivitet = listItem.querySelector("#aktivitet-list-item-aktivitet").innerText;

//         console.log(itemAktivitet, filterValue);
//         console.log(itemAktivitet, indexOf(filterValue));
//         if(itemAktivitet.indexOf(filterValue) > -1)
//         {
//             value.classList.add("hide");

//         }
//     });
// }


function filterAktiviteter(filterValue)
{
    let classlistElements = document.querySelectorAll(".aktivitet-list-items");
    // let inputValue = document.querySelector("#inputFilter");

    classlistElements.forEach((listItem)=>{
        const itemAktivitet = listItem.querySelector("#aktivitet-list-item-aktivitet").innerText;
        console.log(itemAktivitet);
        console.log("funkar");

        if(itemAktivitet.indexOf(filterValue) > -1 )
        {
            value.classlist.add(".hide");
        }
    });
}