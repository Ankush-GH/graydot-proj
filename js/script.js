
let lists = document.getElementsByClassName("list-item")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

const initialLeftBox = Array.from(leftBox.getElementsByClassName('list-item'));
const initialRightBox = Array.from(rightBox.getElementsByClassName('list-item'));

for (list of lists) {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target

        selected.classList.add("draggingItem");

        rightBox.addEventListener("dragover", (e) => {
            e.preventDefault()
        })
        rightBox.addEventListener("drop", (e) => {
            rightBox.appendChild(selected)

            selected.classList.remove("draggingItem");

            selected = null

            showMessage("Item Dropped Successfully!")
        })

        // added dragend because when the items were dropped somewhere except the box the items were disappearing
        rightBox.addEventListener("dragend", (e) => {
            selected.classList.remove("draggingItem")
            selected = null
        })
    })
}

const showMessage = (message) => {
    const successMessage = document.getElementById("successMessage")
    successMessage.textContent = message
    successMessage.classList.remove("hidden")

    // to hide the message after 2.5 seconds
    setTimeout(() => {
        successMessage.classList.add("hidden")
    }, 2500)
}

const reset = () => {
    rightBox.innerHTML = ""
    leftBox.innerHTML = ""

    for (let i = 0; i < initialLeftBox.length; i++) {
        leftBox.appendChild(initialLeftBox[i]);
    }

    for (let i = 0; i < initialRightBox.length; i++) {
        rightBox.appendChild(initialRightBox[i]);
    }
}