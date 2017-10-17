var template = '{{#moduleList}}\
<div class="module {{#isCore}}selectedModule{{/isCore}}" id="{{id}}">\
    <div class="selectedModuleTitle">\
        <p>{{title}}</p>\
    </div>\
    <div class="selectedModulePanel">\
        <div class="credits">{{credits}}</div>\
        <button class="selectModuleButton" module="{{id}}" {{#isCore}}disabled{{/isCore}}>Select module</button>\
        <div class="term">{{term}}</div>\
    </div>\
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
    $(".Specifications").click(function(e) {
    	//window.alert("Test");
    	var suggModules = window.streamData[e.currentTarget.getAttribute('id')];
    	console.log(suggModules);
    	$('div.module#' + suggModules).toggleClass('selectedModule');

    	//TODO 
    })

});
