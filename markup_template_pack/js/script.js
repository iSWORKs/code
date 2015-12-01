/*----------------------------------------------------------------

-- script.js --
	
-----------------------------------------------------------------*/

$(window).load(function(){
	windowWidth = $(window).width();
	
	heightLine(heightlineElm); 					// Align the height
	current(currentElm ,imgSuffix);    	// Highlight Current
});



/* --- !for old Androids  --- */

// $(window).resize(function($){
// 	setTimeout(function(){
// 		location.reload();
// 	}, 600);
// });
