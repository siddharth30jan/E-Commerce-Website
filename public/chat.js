let socket=io();
$(function(){
    
    let box=$('#mes_box')
    let message_val=$('#message')

    $('#button').click(()=>{
       
       // console.log(message_val)
        socket.emit('sent_mes',{mess: message_val.val()})
        })


        socket.on('sent_admin',(data)=>{
            box.append(`<li>${data.mess}</li>`)
        })
})
