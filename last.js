


$(document).ready(function(){
    
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch-button').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch').slideToggle();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch-button').toggleClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu').hide();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu-button').removeClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu-button').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu').slideToggle();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu-button').toggleClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch').slideUp();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch-button').removeClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalwrapper').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu, .livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch').hide();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsearch-button, .livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalmenu-button').removeClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalfilter-button').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalfilters').slideToggle('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalfullscreen');
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalfilter-button').toggleClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormaldim-mode').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormaldim').fadeIn();
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormaldim').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormaldim').fadeOut();
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalcomments-block .livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsub-title').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalcomments').slideToggle();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalcomments-block .livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsub-title').toggleClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
            	
   	$('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalhide-comments').click(
		function() {
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalcomments').slideUp();
            $('.livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalcomments-block .livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalsub-title').removeClass('livedemopreviewforsxtemplate1inrealversionallclassnamesisnormalactive');
            	});
        	

        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#scroll-top').fadeIn();
            } else {
                $('#scroll-top').fadeOut();
            }
        });
        $('#scroll-top').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
 
});
const urlParams = new URLSearchParams(window.location.search);
const tv = urlParams.has('tv') ? urlParams.get('tv') : null;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://play.kora-live.stream/data/ServerTow.txt', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        // get the text from response.
        const textContent = xhr.responseText;
        console.log(textContent);

        setTimeout(function() {
            changeVideoSource(player, `https://cdn${textContent}.fedfa.org/hls/${tv}/index.m3u8`);
        }, 3000);
    }
};

xhr.send();

function changeVideoSource(player, newSource) {
    player.load(newSource);
}
