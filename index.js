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
        for (stream in streamData) {
            console.log(stream);
            console.log(streamData[stream]);
        }
    });

    $(".Specifications").click(function(e) {
    	//window.alert("Test");
    	var suggModules = window.streamData[e.currentTarget.getAttribute('id')];
    	console.log(suggModules);
    	$('div.module#' + suggModules).toggleClass('selectedModule');

    	//TODO 
    })

    $('.module').on('click', function(e){
        e.stopPropagation();
        var moduleId = e.currentTarget.getAttribute('id');
        var moduleArray;
        
        if (e.currentTarget.parentElement.getAttribute('id') === 'coreModuleList') {
            moduleArray = window.moduleData.core.moduleList;
        } else if (e.currentTarget.parentElement.getAttribute('id') === 'optionalModuleListTerm1') {
            moduleArray = window.moduleData.term1.moduleList;
        } else if (e.currentTarget.parentElement.getAttribute('id') === 'optionalModuleListTerm2') {
            moduleArray = window.moduleData.term2.moduleList;
        }
        

        for(module of moduleArray){
            if(moduleId === module.id){
                var title = module.title
                var credits = module.credits;
                var lecturer = module.lecturer;
                var assessment = module.assessment;
                var desc = module.description;

                $('#InfoPanelLink').hide();
                $('#InfoPanelInformation').hide();//*/
                $('#moduleId').html('<b>Module ID: </b>' + moduleId + "<br>");
                $('#moduleTitle').html('<b>Module Title: </b>' + title + "<br>");
                $('#moduleCredits').html('<b>Module Credits: </b>' + credits + "<br>");
                $('#moduleLecturer').html('<b>Module Lecturer(s): </b>' + lecturer + "<br>");
                $('#moduleAssessment').html('<b>Module Marking: </b>' + assessment + "<br>");
                $('#moduleDescription').html('<b>Module Description: </b>' + desc + "<br>");
            }
        }
    });

});
