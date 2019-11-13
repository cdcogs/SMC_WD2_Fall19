$(document).ready(function(){
    $('input, label').focus(function(){
        console.log($(this).attr('id') );
        $('main').append('<p>Please fill this out</p>' +$(this).attr(id));
    });

    $('input, label').blur(function(){
        $('p.notification').remove()
    })


    $('select#FX').change(function(){
        var currentSelection= $(this).val();

        if(currentSelection === 'show'){
                $('.box').show(1000);
        }

        if(currentSelection === 'hide'){
            $('.box').hide(1000);
        }

        if(currentSelection === 'slidedown'){
            $('.slidedown').slideDown(1000);
        }
    
    })

});