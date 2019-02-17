const express=require('express')
const route=require('express').Router()

route.get('/',(req,res)=>{
    if(req.user){
        //console.log(req.user.firstname)
        return res.render('index')
       // return res.send("Hie " + req.user.firstname +  "Its your cart! "+ `  <a href="/logout">LOGOUT</a>`)
    }
    else{
        res.redirect('/login')
    }
})

exports=module.exports=route