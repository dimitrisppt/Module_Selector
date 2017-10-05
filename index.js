//*
$(function() {
    $('.selectModuleButton').on('click', function(e) {
        e.stopPropagation();
        var moduleId = e.target.getAttribute('module');
        $('div.module#' + moduleId).toggleClass('selectedModule');
    });
});//*/
