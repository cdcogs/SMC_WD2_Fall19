$(document).ready(function(){
    $('input, label').focus(function(){
        if( $(this).val() == "" ){
            $('main section.notification-area').append('<p class="notification">Please fill ' + $(this).attr('id') + ' out</p>');
        }
    });

    $('input, label').blur(function(){
        $('p.notification').remove()
    })


    $('select#FX').change(function(){
        var currentSelection = $(this).val();

        if(currentSelection === 'show' ){
            $('.box').show(1000);
        }
        if(currentSelection === 'hide'){
            $('.box').hide(1000, function(){
                $('main section.notification-area').append('<p class="notification">Box hidden</p>');
            });
        }
        if(currentSelection === 'slidedown'){
            $('.box').slideDown(1000);
        }

        if(currentSelection === 'slideup'){
            $('.box').slideUp(1000);
        }

    })
});