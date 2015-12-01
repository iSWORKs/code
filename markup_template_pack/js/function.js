/*----------------------------------------------------------------

-- function.js --
	
-----------------------------------------------------------------*/


 /*----------------------------------------------------------------
		 user agent
-----------------------------------------------------------------*/

function getUserAgent(){				
		var agentStr=window.navigator.userAgent;
		var returnStr;
		if(agentStr.indexOf('iPhone') != -1){
				returnStr='iPhone';
		}else if(agentStr.indexOf('iPad') !=-1){
				returnStr='iPad';
		}else if(agentStr.indexOf('Android') > 0 &&  agentStr.indexOf('Mobile') == -1){
				returnStr='AndroidTablet';
		}else if(agentStr.indexOf('Android') > 0 &&  agentStr.indexOf('Mobile') > 0){
				returnStr='AndroidMobile';
		}else{
				returnStr='PC';
		}
		return returnStr;
}

/*----------------------------------------------------------------
		 viewport fix
-----------------------------------------------------------------*/

function vpFix(){
	
	var content;
	var ua = getUserAgent();
	if(ua == 'iPad'){
		content = 'width=device-width , initial-scale=1.0 , user-scalable=yes';
	}else if(ua == 'AndroidTablet'){
		content = 'width=768 , user-scalable=yes';
	}else if(ua== 'iPhone'){
		content = 'width=device-width , initial-scale=1.0 , user-scalable=no';
	}else if(ua== 'AndroidMobile'){
		content = 'width=320 , user-scalable=no';
	}else{
		return false;
	}

	var viewport = document.createElement('meta');
	viewport.setAttribute('name' , 'viewport');
	viewport.setAttribute('content' , content);
	document.getElementsByTagName('head')[0].appendChild(viewport);
}

/*----------------------------------------------------------------
		 include
-----------------------------------------------------------------*/

function include(dir){

	var dirPass = '';
	switch (dir){
		case 1:
			dirPass = '';
			break;

		case 2:
			dirPass = '../';
			break;

		case 3:
			dirPass = '../../';
			break;

		case 4:
			dirPass = '../../../';
			break;
	}
	
	html = "";
	
	target.append(html);	
}



/*----------------------------------------------------------------
		 current
-----------------------------------------------------------------*/

var current = function( element , suffix ){
	var path = location.pathname;
	element.each(function(){
		if(!$(this).attr('href')){
		}else{
			var link = $(this).attr('href');
			var linkDir = link.split('/').reverse().slice(1).reverse().join('/');
			var imgSrc = $(this).children('img').attr('src');
			if(path.match(linkDir)){
				$(this).removeAttr('href');
				$(this).parent().addClass('current');
				imgSrc = imgSrc.replace(/.png/ , suffix + '.png');
				$(this).children('img').attr('src' , imgSrc);
			}
		}
	});
}

/*----------------------------------------------------------------
		 heightLine
-----------------------------------------------------------------*/

var heightLine = function( element ){	
	element.children().heightLine();
};



