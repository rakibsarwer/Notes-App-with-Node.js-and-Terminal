const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')
const notes = require('./service');

const titleOption = {
    describe:'Title of note',
    demand:true,
    alias:'t'
}
const bodyOption = {
    describe:'Body of note',
    demand:true,
    alias:'b'
}
const argv = yargs
.command('add','Add New Data',{
    title:titleOption,
    body:bodyOption
})
.command('list','List of all notes')
.command('read','Read a single note',{
    title:titleOption
})
.command('remove','Remove a single note',{
    title:titleOption
})
.help()
.argv;

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
else if(command === 'list'){
    let allNotes = notes.getAll();
    console.log(`Number of Lists are : ${allNotes.length}`);
    allNotes.forEach((note) => notes.getLog(note));
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

