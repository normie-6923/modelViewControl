const express = require("express")

const router = express.Router()

router.get("/",async(req,res)=>{
   try{
    const allDbUsers = await User.find()
    res.status(200).json(allDbUsers)

   }
catch(err){
console.log(err)
res.status(500).json({err:"internal server eerror"})
}
})
module.exports = router