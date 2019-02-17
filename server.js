const express= require('express');
const path=require('path');
const session=require('express-session')
const passport=require('./passport')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine","hbs")
app.use('/mofo',express.static(path.join(__dirname,'public')));


app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())



//app.use('/topsecret',);
app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))

app.use('/',require('./routes/route'))
app.listen(1234);