/*
    Read the contents from 3 file and write it (all 3 read contens) into 4th file
    -- call back hell.
*/

const fs=require("fs");
const path=require('path');
// 1st - file
fs.readFile(path.join(__dirname,"../resources","text1.txt"),(err,data1)=>{
    if(err)
        console.log("Error reading text1 file");
    else{

        // 2nd - file
        fs.readFile(path.join(__dirname,"../resources/text2.txt"),(err,data2)=>{
            if(err)
                console.log("Error reading text2 file");
            else{

                // 3rd file
                fs.readFile(path.join(__dirname,"../resources/text3.txt"),(err,data3)=>{
                    if(err)
                        console.log("Error reading 3rd File");
                    else{

                        // write data to 3rd file
                        let mergedData = data1+"\n"+data2+"\n"+data3;
                        fs.writeFile(path.join(__dirname,"../resources/MergedFile.txt"),mergedData,(err)=>{
                            if(err)
                                console.log("Error in writing merged content to MergedFile.txt");
                            console.log("Sucessfully merged content and writed to MergedFile.txt");
                        });
                    }
                })
            }
        });
    }
});