
//Portfolio Modal
$('.open-project').on('click', function(){

    console.log('open-project click');

    var projectUrl = $(this).attr("href");

    var project = '<div class="modal fade" id="project-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';

    $(project).modal({
        remote: projectUrl + ' #project'
    })

    return false;

});

//Blog post Modal
$('.open-post').on('click', function(){

    console.log('open-post click');

    var postUrl = $(this).attr("href");

    var post = '<div class="modal" id="post-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';

    $(post).modal({
        remote: postUrl + ' #post'
    })

    return false;

});



//Placeholder
// $('input,textarea').on( 'focus', function(){
//
//     console.log('input textarea focus');
//
//     $(this).data('placeholder',$(this).attr('placeholder'))
//     $(this).attr('placeholder','');
// });
// $('input,textarea').blur(function(){
//
//     console.log('input textarea blur');
//
//     $(this).attr('placeholder',$(this).data('placeholder'));
// });
//
// $('input, textarea').placeholder();
