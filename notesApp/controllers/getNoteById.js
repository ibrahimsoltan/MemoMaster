const Note= require('D:/NodeJS/notesApp/models/notes')
module.exports = async (req,res) =>{
    try {
    const id = req.params.id;
    const result = await Note.findById(id)
    res.json(result) 
}
    catch(err){
      console.log(err)
    }
  } 