/*
    Read 2 files and write the content of both files to a new file using promises
    
*/
const fs=require("fs");
const path=require('path');

function migrate(file1,file2,migrationFile){
    let migration='';
    fs.promises.readFile(file1)
        .then((data1)=>{ // executes when promise fullfilled
            migration+=data1.toString();
            return fs.promises.readFile(file2); // returns another promise
        })
        .then((data2)=>{ // executes when promise fullfilled
            migration+='\n'+data2.toString();
            fs.writeFile(migrationFile,migration,(err)=>{ // call back for write operation errors
                if(err)
                    console.log("Error in writing file");
                else
                    console.log("Migration Sucessfull");
            })
        })
        .catch((err)=>{  // executes when promise rejected
            console.log("Error in migrating file");
        })
}

migrate(path.join(__dirname,"../resources/text1.txt"),path.join(__dirname,"../resources/text2.txt"),path.join(__dirname,"../resources/MigratedFile.txt"));


