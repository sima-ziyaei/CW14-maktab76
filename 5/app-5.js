$('.child').each(function(){
    $(this).click(function(){
        $(this). text('Hello') 
    })
})

$('.child').each(function(){
    $(this).dblclick(function(){
        $(this). text('Goodbye') 
    })
})