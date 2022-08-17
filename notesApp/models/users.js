const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required : true,
            unique: [true, "username already taken"]
        },
        password:{
            type: String,
            required :true
        },
        notes:[{
            type: mongoose.Schema.Types.ObjectId,
            ref : 'notesSchema'
        }]
    })

    userSchema.pre('save', function(next){
        const user = this
        bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
        })
        })
        

const User = mongoose.model('User', userSchema)
module.exports = User