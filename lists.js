let usersWord = ""
let oddList = document.querySelector("#odd")
let evenList = document.getElementById("even")
console.log(oddList)
    
function updateWord(e) {
  if(e.keyCode == 13) {
    // returning false will prevent the event from bubbling up.
    return false; 
} 
  let element =e.target
  console.log(e)
  usersWord = element.value
  
}

  function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord
    console.log(oddList)
    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } else {
        oddList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }
  