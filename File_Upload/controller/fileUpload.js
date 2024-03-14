const File = require('../models/File');

exports.localFileUpload = (req,res)=>{
try {

    const file = req.files.file;
    console.log("File AA Gayee =>"+ file);
    
    let path = __dirname + /files/ + Date.now();
    console.log("Path =>" + path);

    file.mv(path, (err) =>{
        console.log(err)
    });
    res.json({
        success:true,
        message:"file uploaded successfully"
    });

} catch (error) {
    console.log(error);
    console.error(error);
}
}