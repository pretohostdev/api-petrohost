const EnviarEmail = require("../config/configEmail");



async function send(req,res){
    const message=req.body
    try {
      await  EnviarEmail()
      .then((resultado)=>{
        console.log(resultado)
      })
        
      return res.json({
        message
      })
    } catch (error) {
        console.log(error)
        
    }
}

module.exports=send