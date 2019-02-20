const express= require('express');
const socketio=require('socket.io')
const path=require('path');
const session=require('express-session')
const passport=require('./passport')
const http=require('http')
const app=express()
const server=http.createServer(app)

const io=socketio(server)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine","hbs")
app.use('/mofo',express.static(path.join(__dirname,'public')));


app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())


io.on('connection',(socket)=>{
   // console.log("New socket formed from "+socket.id)
    //socket.emit('connected')

    
    socket.on('sent_mes',(data)=>{
        //console.log("Recieved Message = " + data.message)
        io.emit('sent_admin', data);
    })
})



//app.use('/topsecret',);
app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))

app.use('/',require('./routes/route'))
server.listen(1235);