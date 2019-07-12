const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')
const notes = require('./service');

const argv = yargs.argv;

console.log(argv)
let command = argv._[0]
console.log('command', command)

if (command === 'add'){
    let note = notes.addNote(argv.title, argv.body);
    if(note)
    {
        console.log("New Note Created");
        notes.getLog(note);
    }
    else{
        console.log("Note Title is taken")
    }
}
else if(command === 'false'){
    notes.getAll()
}
else if(command === 'read'){
    let note = notes.getNote(argv.title);
    if(note)
    {
        console.log("Note Found");
        notes.getLog(note);
    }
    else{
        console.log("Notes Not Found")
    }
}
else if(command === "remove"){
    let removeItem = notes.removeNote(argv.title);
    let message = removeItem? 'Note Removed':'Note Not Found';
    console.log(message)

}
else{
    console.log("commands are not specified");
}

