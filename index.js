var template = '{{#moduleList}}\
<div class="module {{#isCore}}selectedModule{{/isCore}}" id="{{id}}">\
    <p>{{title}}</p>\
    <button class="selectModuleButton" module="{{id}}" {{#isCore}}disabled{{/isCore}}>Select module</button>\
    <div class="credits">{{credits}}</div>\
    <div class="term">{{term}}</div>\
</div>\
{{/moduleList}}';

$(function() {
    $('#coreModuleList').append(Mustache.render(template, moduleData.core));
    $('#optionalModuleListTerm1').html(Mustache.render(template, moduleData.term1));
    $('#optionalModuleListTerm2').html(Mustache.render(template, moduleData.term2));
    $('.selectModuleButton').on('click', function(e) {
        e.stopPropagation();
        var moduleId = e.target.getAttribute('module');
        $('div.module#' + moduleId).toggleClass('selectedModule');
    });
});
