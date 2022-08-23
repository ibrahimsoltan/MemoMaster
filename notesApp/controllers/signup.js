const User = require('../models/users')
module.exports = async (req, res) => {
try {
    console.log(req.body)
    const user = await User.create(req.body)
    req.session.userId = user._id
    res.json({data : user , code :200})
    //res.redirect("/")
  }
  catch (error){
    //const validationError = Object.keys(error.errors).map(key => error.errors[key].message)
    //req.session.errors = validationError
    console.log(error);
    //res.redirect("/signup")
  }}
 
    