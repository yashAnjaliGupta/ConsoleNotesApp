const fs=require('fs');
const chalk= require('chalk');
const addNote =(title,body)=>{
    const notes=loadNotes();
    const duplicate=notes.find((note)=>{
         note.title===title
    })
    if(!duplicate){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added"));
    }
    else{
        console.log(chalk.red.inverse('Node title exist'));
    }
};
const removeNote=(title)=>{
    const notes=loadNotes();
    const tokeep=notes.filter(function(note){
        return note.title!==title
    })
    if(tokeep.length<notes.length){
        saveNotes(tokeep);
        console.log(chalk.green.inverse("Note deleted"));
    }
    else{
        console.log(chalk.red.inverse("No note founed"));
    }
}
const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse('Your notes'))
    notes.forEach((note)=>{
        console.log(note.title);
    })
}
const readNote=(title)=>{
    const notes=loadNotes();
    const note = notes.find((note)=> note.title===title)

    if(note){
        console.log(chalk.inverse(title));
        console.log(note.body);
    }
    else{
        console.log(chalk.red.inverse("No note founed"));
    }
}
const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notesFile.json',dataJSON);
}

const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notesFile.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(error){
        return [];
    }
    
}
module.exports={addNote,removeNote,listNotes,readNote};