module.exports = (req,res)=>{
    req.session.destroy(()=>{
      res.json({message:"Successfull sign out"})
    })
  }