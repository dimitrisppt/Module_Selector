var template = '{{#moduleList}}\
<div class="module {{#isCore}}selectedModule{{#isManagement}}Management{{/isManagement}}{{/isCore}}" id="{{id}}" {{#isManagement}}style="display: none{{/isManagement}}">\
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

isManagementCourse = false;

$(function() {
    $('#coreModuleList').append(Mustache.render(template, moduleData.core));
    $('#optionalModuleListTerm1').html(Mustache.render(template, moduleData.term1));
    $('#optionalModuleListTerm2').html(Mustache.render(template, moduleData.term2));

    $('.courseSel#Cs').on('click', function(e) {
        $('.module.selectedModuleManagement').hide();
        this.className += ' active';
        $('.courseSel#CsM').removeClass('active');
        window.isManagementCourse = false;
        $('div.module').removeClass('selectedModule');
        $('progress').attr('value', 0);
    });

    $('.courseSel#CsM').on('click', function(e) {
        $('.module.selectedModuleManagement').show();
        this.className += ' active';
        $('.courseSel#Cs').removeClass('active');
        window.isManagementCourse = true;
        $('div.module').removeClass('selectedModule');
        $('progress').attr('value', 0);
    });

    $('.selectModuleButton').on('click', function(e) {
        e.stopPropagation();
        var moduleId = e.target.getAttribute('module');
        var streams = [];
        $('div.module#' + moduleId).toggleClass('selectedModule');
        for (stream in streamData) {
            for (mod of streamData[stream]) {
                if (mod == moduleId) {
                    streams.push(stream);
                }
            }
        }
        for (stream of streams) {
            var value = $('#progress' + stream).attr('value') - 0;
            if ($('div.module#' + moduleId).hasClass('selectedModule')) {
                value += isManagementCourse? 100/4 : 100/6;
                $('#progress' + stream).attr('value', value);
            } else {
                value -= isManagementCourse? 100/4: 100/6;
                $('#progress' + stream).attr('value', value);
            }

            if ($('#progress' + stream).attr('value') >= 100) {
                $('#' + stream).addClass('active');
            } else {
                $('#' + stream).removeClass('active');
            }
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
        
        $('#moduleInfoPlaceholder').hide();

        for(module of moduleArray){
            if(moduleId === module.id){
                var title = module.title
                var credits = module.credits;
                var lecturer = module.lecturer;
                var assessment = module.assessment;
                var desc = module.description;
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
