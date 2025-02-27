const fs = require('fs')


function createNote(filename, content){
    fs.writeFile(filename, content, (err)=>{
        if(err){
            console.log("Error creating file :"+ err);
        }
        else{
            console.log(`Note saved successfully ${filename}`);
        }
    });
}

function readNote(filename){
    fs.readFile(filename, 'utf-8', (err, data)=>{
        if(err){
            console.log("Error reading a file :"+ err);
        }
        else{
            console.log(`Note reading successful : ${data}`);
        }
    });
}

function appendNote(filename, content){
    fs.appendFile(filename, content, (err,data)=>{
        if(err){
            console.log("Error :" +err);
        }
        else{
            console.log("Appended data success")
        }
    });
}

function deleteNote(filename){
    fs.unlink(filename, (err)=>{
        if(err){
            console.log("error deleting the file");
        }
        else{
            console.log("Deleted successfully");
        }
    })
}


// createNote('note.txt','Hi craeting a file');

// readNote('note.txt');

// appendNote('note.txt', ' Appending this line for checking for this function');

deleteNote('note.txt');