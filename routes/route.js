const route=require('express').Router()
const passport=require('../passport')
const Users=require('../db').Users
const Products=require('../db').Products

route.use('/admin',require('./admin'))


route.use('/chat',require('./chat'))


route.get('/login',(req,res)=>{
    res.render('login')
})
route.get('/signup',(req,res)=>{
    res.render('signup')
})
route.post('/login',passport.authenticate('local',{
    failureRedirect: '/login',
    successRedirect: '/private'
}))
route.post('/signup',(req,res)=>{
    Users.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cartBox: ""
    }).then((createdUser)=>{
        res.redirect('/login')
    })    
})

route.post('/insert',(req,res)=>{
    if(req.user){
        let temp=req.user.cartBox
        temp=temp+req.body.id
        temp+=" "
        Users.findOne({
            where: {
                id: req.user.id
            }
        }).then((user)=>{
            user.update({
               cartBox: temp
              }).then(() => {
                  res.send(user)
              })
        })}
        else{
            res.redirect('/login')
        }
    })

    route.get('/mycart',(req,res)=>{
        if(req.user){
            Users.findOne({
                where: {
                    id: req.user.id
                }
            }).then((user)=>{
                let temp=user.cartBox.split(' ')
                console.log(temp)
                res.render('cart_page',{temp})
            })
           
        }
        else{
            res.redirect('/login')
        }
    })
route.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
  });

exports=module.exports=route
