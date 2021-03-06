var template = '{{#moduleList}}\
<div class="module {{#isCore}}selectedModule coreModule {{#isManagement}}management{{/isManagement}}{{/isCore}}" id="{{id}}" {{#isManagement}}style="display: none{{/isManagement}}">\
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

window.currentState = {
    isManagementCourse: false,
    currentStream: '',
    selectedTerm1: 0,
    selectedTerm2: 0
};

$(function() {
    $('#coreModuleList').append(Mustache.render(template, moduleData.core));
    $('#optionalModuleListTerm1').html(Mustache.render(template, moduleData.term1));
    $('#optionalModuleListTerm2').html(Mustache.render(template, moduleData.term2));

    $('.courseSel#Cs').on('click', function(e) {
        $('.module.management').hide();
        this.className += ' active';
        $('.courseSel#CsM').removeClass('active');
        currentState.isManagementCourse = false;
        clearSelectedModules();
        $('progress').attr('value', 0);
        $('.titleInfo').text(' (Select 3)');
    });

    $('.courseSel#CsM').on('click', function(e) {
        $('.module.management').show();
        this.className += ' active';
        $('.courseSel#Cs').removeClass('active');
        currentState.isManagementCourse = true;
        clearSelectedModules();
        $('progress').attr('value', 0);
        $('.titleInfo').text(' (Select 2)');
    });

    $('.selectModuleButton').on('click', function(e) {
        e.stopPropagation();
        var moduleId = e.target.getAttribute('module');
        var term = $(e.target).parents('.optionalModuleList').attr('id');
        var max = currentState.isManagementCourse? 2 : 3;
        var togglingOn = !$('div.module#' + moduleId).hasClass('selectedModule');
        var check = 0;
        if (!term) {
            return; //it's a core module, somehow
        } else if (term == 'optionalModuleListTerm1') {
            if (currentState.selectedTerm1 >= max && togglingOn) return;
        } else {
            if (currentState.selectedTerm2 >= max && togglingOn) return;
        }
        $('div.module#' + moduleId).toggleClass('selectedModule');
        if (togglingOn) {
            if (term == 'optionalModuleListTerm1') {
                check = ++(currentState.selectedTerm1);
            } else {
                check = ++(currentState.selectedTerm2);
            }
            if (check >= max) {
                $('#' + term)
                    .find('.module')
                    .not('.selectedModule')
                    .find('button')
                    .prop('disabled', true);
            }
        } else {
            if (term == 'optionalModuleListTerm1') {
                check = --(currentState.selectedTerm1);
            } else {
                check = --(currentState.selectedTerm2);
            }
            if (check < max) {
                $('#' + term).find('button').prop('disabled', false);
            }
        }
        var streams = [];
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
                value += currentState.isManagementCourse? 100/4 : 100/6;
                $('#progress' + stream).attr('value', value);
            } else {
                value -= currentState.isManagementCourse? 100/4: 100/6;
                $('#progress' + stream).attr('value', value);
            }

            if ($('#progress' + stream).attr('value') >= 100) {
                $('#' + stream).find('progress').addClass('active');
            } else {
                $('#' + stream).find('progress').removeClass('active');
            }
        }
    });

    $(".Specifications").click(function(e) {
        var stream = e.currentTarget.getAttribute('id');
    	var suggModules = window.streamData[stream];
        var suggSelector = '';

    	for (moduleId of suggModules) { 
            suggSelector += ('#' + moduleId + ',');
    	}
        suggSelector = suggSelector.slice(0, -1);
        $(suggSelector).map(function(idx, el) {
            moduleMarkSuggested(el, currentState.currentStream !== stream);
        });
        $('div.module:not(.coreModule)').not(suggSelector).map(function(idx, el) {
            moduleMarkSuggested(el, false);
        });

        if (currentState.currentStream === stream) {
            $(this).removeClass('active');
            currentState.currentStream = '';
        } else {
            $('.Specifications').removeClass('active');
            $(this).addClass('active');
            currentState.currentStream = stream;
        }
    });

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

function moduleMarkSuggested (moduleDiv, isSuggested) {
    if (isSuggested) {
        $(moduleDiv).find('p').append('<span style="color: blue";> (Suggested) </span>');
        //TODO: mark module as suggested
    } else {
        $(moduleDiv).find('span').remove();
        //TODO: mark as NOT suggested
    }
}

function clearSelectedModules() {
    currentState.selectedTerm1 = 0;
    currentState.selectedTerm2 = 0;
    $('.optional').find('button').prop('disabled', false);
    $('div.module:not(.coreModule)').removeClass('selectedModule');
}
