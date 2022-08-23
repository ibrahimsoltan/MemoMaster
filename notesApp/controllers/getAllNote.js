const Note = require('../models/notes')
module.exports = async(req, res) => {
    try{
    const id = req.params.userid;
    console.log(req.user)
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