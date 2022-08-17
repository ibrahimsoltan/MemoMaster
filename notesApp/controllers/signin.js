const bcrypt = require('bcrypt')
const User = require('D:/NodeJS/notesApp/models/users')
module.exports = (req, res) =>{
    const { userName, password } = req.body;
    User.findOne({userName:userName}, (error,user) => {
    if (user){
    bcrypt.compare(password, user.password, (error, rightData) =>{
    if(rightData){
    req.session.userId = user._id//puts the session id to the logedin user
    res.json({data : user , code :200})
    //console.log(req.session.userId)
    }
    else{
    res.json(error)
    }
    })
    }
    else{
        res.json(error)

    }
    })
    }
    