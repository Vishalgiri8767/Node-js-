const File = require('../models/File');

exports.localFileUpload = (req,res)=>{
try {

    const file = req.files.file;
    console.log("File AA Gayee =>", file);
    
    let path = __dirname + /files/ + Date.now() + `{file.name.split('.')[1]}`;
    console.log("Path =>" + path);

    file.mv(path, (err) =>{
        console.log(err)
    });
    res.json({
        success:true,
        message:"file uploaded successfully"
    });

} catch (error) {
    console.log('Not able to upload file on server');
    console.error(error);
}
}