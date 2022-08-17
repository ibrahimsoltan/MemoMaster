const Note = require('D:/NodeJS/notesApp/models/notes')
module.exports = async(req, res) => {
    try{
    const id = req.params.id;
    const result = await Note.find()
    finalRes = []
    result.map(note => {
        if(note.userid == id)
            finalRes.push(note)
    })
    res.json({Notes : finalRes, code :200})
    }
    catch(error)
    {
        res.json({message : "error accoured" , body :error.message})
    }
    }