const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("Public visible to all!")
})

exports=module.exports=route