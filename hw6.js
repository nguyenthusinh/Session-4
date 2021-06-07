tasks=[
    {   
        id: '1',
        language:'HTML',
        complete:'false',
    },
    {   
        id: '2',
        language:'CSS',
        complete:'false',
    },
    {
        id: '3',
        language:'Basic of JavaScript',
        complete:'false',
    },
    {
        id: '4',
        language:'Node Package Manager (npm)',
        complete:'false',
    },
    {
        id: '5',
        language:'Git',
        complete:'false',
    },

]
// for(let x in tasks){
// console.log(tasks[x].id+'.'+tasks[x].language)
// console.log(tasks[x].complete)

// }
const availableCommands = ['new','delete','update','complete'];
let command = prompt('Enter your command(New,Delete,Update,Complete)');

while (command != '') {
    command = command.toLowerCase();
    // check wrong input
    while (!availableCommands.includes(command)) {
        alert("Command is not supported");
        command = prompt('Enter your command(New,Delete,Update,Complete)');
        command = command.toLowerCase();
    }

//switch
switch(command){
    case 'new':
        let newtask = prompt('Enter new task');
        while (newtask == '') {
                            alert("Value should not be empty");
                            newtask = prompt("Enter new Item");
                        }
        tasks.push({
        language: newtask,
        complete:'false',
        });
        for(let x in tasks){
            console.log(x+'.'+tasks[x].language)
            console.log(tasks[x].complete)
            }
        
break;
   case 'update':
       let updateposition = prompt('Enter position')
    updateposition=Number(updateposition);
         while(isNaN(updateposition)) {
            alert('invalid input');
          updateposition = prompt('Enter position')
        }
       let newtitle = prompt('Enter new title')
       tasks[updateposition-1]={
        id: updateposition,
        language:newtitle,
        complete:'false',
       }
       for(let x in tasks){
console.log(tasks[x].id+'.'+tasks[x].language)
console.log(tasks[x].complete)
       }
break;

    case 'complete':
        let completeposition = prompt('Enter position')
        completeposition=Number(completeposition);
         while(isNaN(completeposition)) {
            alert('invalid input');
            completeposition = prompt('Enter position')
        }
       tasks[completeposition-1].complete='complete';
       for(let x in tasks){
        console.log(tasks[x].id+'.'+tasks[x].language)
        console.log(tasks[x].complete)
               }

    case 'delete':
        let deleteposition = prompt('Enter delete position')
        deleteposition=Number(deleteposition);
         while(isNaN(deleteposition)) {
            alert('invalid input');
            deleteposition = prompt('Enter delete position')
        } 
        tasks.splice[deleteposition,1];
        console.log(tasks); /// Sao chỗ này nó ko delete mất một object thầy ơi ????
break
}
break;
}