let list = document.addItem

list.addEventListener("submit", function(e){
    e.preventDefault() //prevents refresh

    let addedItem = list.title.value  //grabs text from input box
    
    list.title.value = ""           // clears form after entered
    
    let newItem = document.createElement('li') // step 1
    
    newItem.textContent = addedItem             // step 2
    
    document.getElementById('list').append(newItem) // step 3 
   
    let newEditBox = document.createElement('button')// step 1

    newEditBox.textContent = 'edit'                 // step 2

    document.getElementById('list').append(newEditBox) // step 3

    let newDeleteButton = document.createElement('button') // step 1

    newDeleteButton.textContent = 'X'                       // step 2

    document.getElementById('list').append(newDeleteButton) // step 3
    
    newItem.appendChild(newEditBox)//.setAttribute('id','newEditBox' )
                        // ^ set the attribute so you can call it to a function ^ 
    
    newItem.appendChild(newDeleteButton)//.setAttribute('id', 'newDeleteButton')

    newDeleteButton.addEventListener('click', ()=>{newItem.remove()})
  })                 
    // simpler method here...^^^^
                            
                                            // add () to keep the event from firing.
                                    //without the () my 'click' listener doesnt matter
    
    
                
  
//console.log(newItem) 
//})

//function deleteItem(ID){
//    document.getElementById('list').remove(document.getElementById(ID))

    
//}

// 3 step process 
    // 1. createElement, capture in a variable 
    // 2. edit the content: variable.textcontent 
    // 3. append it: document.querySelector('ID').append(variable)

    // new item appended to the list with edit and delete buttons

                // makinging the delete button function
    
                // let deleteButton = document.querySelector('')
    
                // deleteButton.addEventListener('click', function(e){
        
                // .remove()