
$(function(){
  /*  window.addEventListener('hashchange',function(){
        const id=window.location.hash.replace('#','');
        console.log(id)
    })*/

    let box=$('#main_box')
    $.get('/admin/showProducts',(data)=>{
        box.empty();
        for(X of data){
            box.append(`
            <li>${X.produxtName}</li>
            <li>${X.productCost}</li>
            <button>BUY</buttton>
            `)
        }
    })
})