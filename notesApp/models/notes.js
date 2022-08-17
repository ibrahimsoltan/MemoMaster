const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notesSchema = new Schema(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userScheme'
        },
        date:{
            type : String
        },
        content:{
            type : String,
            required : true
        }
    },{
        timestamps : true
    }
)
const Note = mongoose.model('Note', notesSchema)
module.exports = Note
