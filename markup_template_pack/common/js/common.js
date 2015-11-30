/*	--common.js --
	

*/

// break point
var windowXs = 640;
var windowSm = 767;
var windowMd = 768;
var windowLg = 1130;

var windowWidth;

$(window).load(function(){
	
	windowWidth = $(window).width();
	
    heightLine();
    current();
});
 
// $(window).resize(function($){
// 	setTimeout(function(){
// 		location.reload();
// 	}, 600);
// });

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
		 header
-----------------------------------------------------------------*/

function headerWrite(dir){

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
		
			var html = "";
			html += '<div id="header_wrap" class="inner">\r\n';
			html += '<h1><a href="'+ dirPass +'"><img src="'+ dirPass +'common/images/logo.png" alt="税理士法人トラスティ　大阪市中央区にある「頼れる事務所」"></a></h1>\r\n';
			html += '<aside class="contact">\r\n';
			html += '<p class="infocounter">お問い合わせ窓口（無料）・お気軽にお問い合わせください！</p>\r\n';
			html += '<p class="tel"><a href="tel:0661216778">06-6121-6778</a></p>\r\n';
			html += '<p class="mail"><a href="mailto:info@trusty.or.jp">info@trusty.or.jp</a></p>\r\n';
			html += '</aside>\r\n';
			html += '</div>\r\n';
			
			$('header').append(html);
	
}


/*----------------------------------------------------------------
		 footer
-----------------------------------------------------------------*/

function footerWrite(dir){

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

		var pageLink;
		
		var html = "";
		html += '<div class="inner">\r\n';
		html += '<h1><img src="'+ dirPass +'common/images/logo_w.png" alt="税理士法人トラスティ"></h1>\r\n';
		html += '<aside id="address">\r\n';
		html += '<dl>\r\n';
		html += '<dt>税理士法人トラスティ</dt>\r\n';
		html += '<dd class="tel">06-6121-6778</dd>\r\n';
		html += '<dd class="mail">info@trusty.or.jp</dd>\r\n';
		html += '<dd class="domicile">〒541-0041　<br>大阪市中央区北浜1丁目1番10号　北浜小林ビル２F</dd>\r\n';
		html += '</dl>\r\n';
		html += '</aside>\r\n';
		html += '<nav id="f_nav">\r\n';
		html += '<ul>\r\n';

		if(dirPass == ''){
			pageLink = '#' ;
		}else{
			pageLink = dirPass + 'index.html?id=' ;
		}

		html += '<li><a href="'+ pageLink +'news">更新情報</a></li>\r\n';
		html += '<li><a href="'+ pageLink +'service">業務内容</a></li>\r\n';
		html += '<li><a href="'+ pageLink +'profile">プロフィール</a></li>\r\n';
		html += '<li><a href="'+ pageLink +'company">会社概要</a></li>\r\n';
		html += '<li><a href="'+ pageLink +'info01">お問い合せ</a></li>\r\n';
		html += '</ul>\r\n';
		html += '</nav>\r\n';
		html += '</div>\r\n';
		html += '<small>\r\n';
		html += ''+ copyWrite(); +'\r\n';
		html += '</small>\r\n';

		$('footer').append(html);
}

/*----------------------------------------------------------------
		 calender
-----------------------------------------------------------------*/

function copyWrite(){
	var nowYear;

	nowYear = new Date().getFullYear();

	var copyStr = "";
	copyStr += '&copy; '+ nowYear +' Trusty Tax Accountant Corp.\r\n';
	
	return copyStr;
}


/*----------------------------------------------------------------
		 current
-----------------------------------------------------------------*/

var current = function(){
	var path = location.pathname;
	$('#gnav ul li a').each(function(){
		if(!$(this).attr('href')){
		}else{
			var link = $(this).attr('href');
			var linkDir = link.split('/').reverse().slice(1).reverse().join('/');
			var imgSrc = $(this).children('img').attr('src');
			if(path.match(linkDir)){
				$(this).removeAttr('href');
				$(this).parent().addClass('current');
				imgSrc = imgSrc.replace(/.png/ , '_on.png');
				$(this).children('img').attr('src' , imgSrc);
			}
		}
	});
}

/*----------------------------------------------------------------
		 slick slider plugins
-----------------------------------------------------------------*/

var bnrSlide = function(){
	$('.bnr_slide').slick({
		autoplay: true,
		arrows: false,
		dots: false,
		infinite: true,
		pauseOnHover: true
	});
}

/*----------------------------------------------------------------
		 heightLine
-----------------------------------------------------------------*/

var heightLine = function(){	
	$('.height_lining').children().heightLine();
};



