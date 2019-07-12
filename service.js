const fs = require('fs');

let fatchNotes = () =>{
    try{
        let readingFile = fs.readFileSync('note.json');
        return JSON.parse(readingFile);
    }
    catch(e){
        return [];
    }
}

saveNotes = (notes)=>{
    fs.writeFileSync('note.json',JSON.stringify(notes))
}
let addNote = (title,body)=>{
    let notes = fatchNotes();
    let note ={
        title,
        body
    };



let duplicate = notes.filter((note)=>{
    return note.title === title
})

if(duplicate.length === 0 ){
    notes.push(note);
    saveNotes(notes);
    return note;
    
}

}

let removeNote = (title)=>{
    let notes = fatchNotes();
    let filterNote = notes.filter((note)=>{
        return note.title !== title
    })
    saveNotes(filterNote);

    return notes.length !== filterNote.length
}

let getNote = (title)=>{
    let notes = fatchNotes();
    let filterNote = notes.filter((note)=>{
        return note.title === title;
    })
    return filterNote[0]
}

let getLog = (note)=>{
    debugger;
    console.log("------");
    console.log("Title : "+ note.title);
    console.log("Body : "+ note.body);
}

module.exports = {
    addNote,
    removeNote,
    getNote,
    getLog
}