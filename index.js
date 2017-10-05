//*
$(function() {
    $('.selectModuleButton').on('click', function(e) {
        var moduleId = e.target.getAttribute('module');
        $('div.module#' + moduleId).toggleClass('selectedModule');
    });
});//*/
