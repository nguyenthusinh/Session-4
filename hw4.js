let dictionary={
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for error',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};

// alert('Hi there, this is dev dictionary');
// let input=prompt('Enter a keyword');
// for(let x in dictionary){
// if(input==x){
// alert(input + "\n" + dictionary[input]);
// break
// }
// else if(input!==x){
//     alert('we could not find your word')
// }
// }

alert('Hi there, this is dev dictionary');
let input=prompt('Enter a keyword');
if(dictionary[input] !== undefined){
    alert(input + "\n" + dictionary[input]);
}    
else{
    let meaning=prompt('We could not find:'+input+',leave your explanation');
    dictionary[input]=meaning;   
    if(dictionary[input] !== undefined){
        alert(input + "\n" + dictionary[input]);
    }    
}
