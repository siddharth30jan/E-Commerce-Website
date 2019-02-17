
$(function(){
    alert("Welcome!")
    
  
      let box=$('#main_box')
      $.get('/admin/showProducts',(data)=>{
          console.log(data)
          box.empty();
          for(X of data){
              box.append(`
              <li>${X.ProductName}</li>
              <li>${X.ProductCost}</li>
              <a href="#${X.ProductName}"><button>BUY</buttton></a>
              `)
          }
      })



      window.addEventListener('hashchange',function(){
          const id=window.location.hash.replace('#','');
          console.log(id)
          $.post('/insert',{id: id},(data)=>{
              alert('Succesfully Added!')
              console.log(data)
          })
        
          
      })


  })
