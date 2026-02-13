let counter = 0;
const form = document.querySelector("#Add-item-form");
const list = document.getElementById("Items-list-container");
const deleteToast = document.getElementById("Delete-toast");

form.onsubmit = (e) => {
  const input = document.getElementById("Add-item-input").value;
  e.preventDefault();

  try {
    addItemToTheList(input);
    form.reset();
  } catch (error) {
    console.log(error);
    console.log("Deu ruim");
  }
};

function addItemToTheList(itemName) {
  const li = document.createElement("li");
  li.innerHTML = `
          <span id="Items-list-item-text">
            <input id="Items-list-item-checkbox" type="checkbox" />
            <label>${itemName}</label>
          </span>
          <button id="Items-list-delete-btn" >
            <img src="./assets/trashIcon.png" class="delete-btn"/>
          </button>
  `;
  li.id = "item-" + counter;

  counter++;

  return list.appendChild(li);
}

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.closest("li");
    deleteToast.style.opacity = 100;
    return li.remove();
  } else {
    deleteToast.style.opacity = 0;
  }

  return console.log(e.target);
});

deleteToast.addEventListener("click", (e) => {
  if(e.target.classList.contains("Remove-toast-button")){
    deleteToast.style.opacity = 0;
  }
})
