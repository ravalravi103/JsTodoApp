// add Event Listiner 
const addTodsBtn = document.querySelector('.todo-head__add');
addTodsBtn.addEventListener('click',function(eve){
    eve.preventDefault();
    // Grab The User Input
    const todoItem = document.querySelector('.todo-head__input').value;

     
    const todo = {
        id : create_UUID(),
        todoItem : todoItem
    }

    //Create The Single todo HTML
    const mytodoString = `
        <div class="todo-body" id="todo-body">
            <div class="todo-body__name todo-body__name-${todo.id}">
                <h5>${todo.todoItem}</h5>
            </div>
            <div class="todo-body__cancle">
                <img src="./img/cross.png" name="cross_iamge" class="todo-body__corss todo-body__corss-${todo.id}">
            </div>
            <div class="todo-body__completed todo-body__completed-name"> 
                <input type="checkbox" name="todo_done" class="todo_complete_chkbox todo_complete_chkbox-${todo.id}"/>
            </div> 
        </div>`;
                           
    //Display The Single User HTML to HTML page.
    if(todoItem){
        const todoBody = document.getElementById('todos-body')
        todoBody.insertAdjacentHTML('afterend',mytodoString);
    }



  

        //Cencle Event Listiner 
        const cencleEventbtn = document.querySelector(`.todo-body__corss-${todo.id}`);
        cencleEventbtn.addEventListener('click',function(eve){ 
                eve.preventDefault()
                console.log(`${todoItem} Removed`) 
                const currentItem = document.querySelector(`.todo_complete_chkbox-${todo.id}`).parentNode.parentNode; 
                
                currentItem.remove();


        })





    // Complete Event Listiner 
        const completeEventbtn = document.querySelector(`.todo_complete_chkbox-${todo.id}`);
        completeEventbtn.addEventListener('click', function(eve){
                //Select Current Element 
                const currentItem = document.querySelector(`.todo_complete_chkbox-${todo.id}`).parentElement.parentElement; 
                console.log(currentItem)
                if(this.checked){
                    console.log(`${todoItem} Todo Complted !`);
                    
                    //check That not_done is Exist or not ?
                     
                    currentItemclassArr = currentItem.classList;
                     if(currentItemclassArr.value === 'todo-body' || 'todo-body not_done'){
                        currentItemclassArr.remove('not_done')
                        currentItemclassArr.add('done');
                     }
                }
                else{
                    console.log(`${todoItem} Dosenot Complted`)
                    currentItemclassArr = currentItem.classList;
                     if(currentItemclassArr.value === 'todo-body' ||'todo-body done'){
                        currentItemclassArr.remove('done')
                        currentItemclassArr.add('not_done');
                     }      
                }
        })
    
})


 // Unique Id
 function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}


















