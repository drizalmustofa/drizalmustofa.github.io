// event pada saat link di klik
$('.page-scroll').on('click', function(){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'swing');

	
});

// paralax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).on('click', function(){
	$('.active').addClass('gMuncul');
});


// =====SERVICE====
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// portopolio
	if(wScroll > $('.service').offset().top - 250) {
		$('.service .itemServc').each(function(i) {
			setTimeout(function(){
				$('.service .itemServc').eq(i).addClass('muncul');
			}, 1200);
		});
		
	}

});

// ====PORTFOLIO====
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// portopolio
	if(wScroll > $('.product').offset().top - 250) {
		$('.product .img-thumbnail').each(function(i) {
			setTimeout(function(){
				$('.product .img-thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
		
	}

});



// Navigasi aktif
$(document).ready(function(){
          $('.nav-link').click(function(){
            $('.nav-link').removeClass("active");
            $(this).addClass("active");
        });
    });