head.js("assets/js/skin-select/skin-select.js", "assets/js/custom/scriptbreaker-multiple-accordion-1.js", "assets/js/custom/accordion.js", "assets/js/bootstrap.js");

head.js("assets/js/datepicker/moment.js", "assets/js/datepicker/daterangepicker.js", "assets/js/datepicker/datepicker-coustom.js");


//SEARCH MENU
head.js("assets/js/search/jquery.quicksearch.js", function() {
 
      	$('input#id_search').quicksearch('#menu-showhide li');
 
});
//-------------------------------------------------------------

//TOOL TIP

head.js("assets/js/tip/jquery.tooltipster.js", function() {
 
       	$('.tooltip-tip-x').tooltipster({
                position: 'right'

            });
       
        $('.tooltip-tip').tooltipster({
                position: 'right',
                animation: 'slide',
                theme: '.tooltipster-shadow',
                onlyOne: true

            });
         $('.tooltip-tip2').tooltipster({
                position: 'right',
                animation: 'slide',
                theme: '.tooltipster-white',
                onlyOne: true

            });
        $('.tooltip-top').tooltipster({
            position: 'top'
         });
        $('.tooltip-right').tooltipster({
            position: 'right'
         });
        $('.tooltip-left').tooltipster({
            position: 'left'
         });
        $('.tooltip-bottom').tooltipster({
            position: 'bottom'
         });
        //For icon tooltip
         $('.entypo-tooltip > ul > li').tooltipster({
                position: 'right',
                animation: 'grow',
                delay:1,
                offsetX:'-60px',
                theme: '.tooltipster-shadow',
                onlyOne: true

            });
         
 
});
//------------------------------------------------------------- 

//NICE SCROLL

head.js("assets/js/nano/jquery.nanoscroller.js", function() {
 
       	$(".nano").nanoScroller({
                //stop: true 
                scroll: 'top',
                scrollTop: 0,
                sliderMinHeight: 40,
                preventPageScrolling: true
                //alwaysVisible: false

            });
 
});
//------------------------------------------------------------- 

//JQUERY UI

head.js("https://code.jquery.com/ui/1.10.3/jquery-ui.js", function() {
 
       	 $(".grid").sortable({
                tolerance: 'pointer'
            });
 
});
//------------------------------------------------------------- 