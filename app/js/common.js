$(function() {
	/*---Custom JS -testimonial flickity plugin for the testimonials gallery---*/ 
		var flkty = new Flickity( '.main-gallery', {
		  cellAlign: 'left',
		  contain: true,
		  wrapAround: true,
		  prevNextButtons: false,
		  autoPlay: 3000
		});
	/*---Custom JS -testimonial flickity plugin for the testimonials gallery---*/ 

	/*---Lazy Load images---*/
		var bLazy = new Blazy({
	        // Options
	    });
		  var load__more__btn = $('.load-more__btn');
		  var loadmore = $('.loadmore');
			load__more__btn.on('click',function(){
				  loadmore.css('display','flex');
				  var bLazy = new Blazy({
				  });
			});
	/*---Lazy Load images---*/
		
	/*---mobile menu----*/
		var link = $('.m-menu-link');
		var close = $('.close-menu');
		var menu = $('.m-menu');
			link.on('click', function(event){
				event.preventDefault();
				menu.toggleClass('m-menu__active');
			});
			close.on('click', function(event){
				event.preventDefault();
				menu.toggleClass('m-menu__active');
			});

			$('.menu-link').click(function(){
				setTimeout(function(){
			 		$('.m-menu').toggleClass('m-menu__active');
				},200);
			});   	
	/*---mobile menu----*/

	/*---change the play icon of embedded youtube videos---*/
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;

		onYouTubeIframeAPIReady = function () {
		    player = new YT.Player('player', {
		        height: '569',
		        width: '90%',
		        videoId: 'bmixiVwtDso',  // youtube video id
		        playerVars: {
		            'autoplay': 0,
		            'rel': 0,
		            'showinfo': 0
		        },
		        events: {
		            'onStateChange': onPlayerStateChange
		        }
		    });
		}

		var p = document.getElementById ("player");
		$(p).hide();

		var t = document.getElementById ("thumbnail");
		t.src = "img/wprocess.jpg";  //http://img.youtube.com/vi/bmixiVwtDso/0.jpg   

		onPlayerStateChange = function (event) {
		    if (event.data == YT.PlayerState.ENDED) {
		        $('.start-video').fadeIn('normal');
		    }
		}

		$(document).on('click', '.start-video', function () {
		    $(this).hide();
		    $("#player").show();
		    $("#thumbnail_container").hide();
		    player.playVideo();
		});
	/*---change the play icon of embedded youtube videos---*/

	/*---magnificPopup Gallery ---*/
		$('.item').magnificPopup({
			type : "image",
			gallery : {
				enabled :true
			},
			removalDelay : 300,
			mainClass: 'mfp-fade'
		});
	/*---.magnificPopup Gallery ---*/

	/* pop-up window for contact us form  */	
		$('.btn').click(function(){
			var dwrap  = $('.dialog-wrap');
				dwrap.addClass('animated')
				dwrap.addClass('zoomIn');
		   		dwrap.show();
		});
		 
		$('.dialog-wrap, .dialog-close').click(function(){
		    $('.dialog-wrap').hide();
		});
		   
		$('.dialog').click(function(e){
		    e.stopPropagation();
		});	
	/*---END pop-up window  for contact us form---*/

	/* ---E-mail Ajax Send---  */
		var elemidForm =  document.getElementById('contact');
		var elemidForm2 =  document.getElementById('contact2');
			$(elemidForm).submit(function() { 
				var th = $(this);
				$.ajax({
					type: "POST",
					url: "mail.php", 
					data: th.serialize()
				}).done(function() {
					showSuccessMessageBid(elemidForm);
					setTimeout(function() {
						// Done Functions
						th.trigger("reset");
					}, 1600);
				});
				return false;
			});
			$(elemidForm2).submit(function() { 
				var th = $(this);
				$.ajax({
					type: "POST",
					url: "mail.php", 
					data: th.serialize()
				}).done(function() {
					showSuccessMessageBid2(elemidForm2);
					setTimeout(function() {
						// Done Functions
						th.trigger("reset");
					}, 1600);
				});
				return false;
			});
		 	
		function showSuccessMessageBid(elemidForm){
			var newp = document.createElement('p');
				newp.innerHTML = "Your message has been sent";
				newp.classList.add('success');
				newp.classList.add('animated')
			    newp.classList.add('fadeInDown');
		 		elemidForm.insertBefore(newp, elemidForm.firstChild);
		 	    var props = {
					width:   '540px',
					background: '#DFF0D8',
					color : '#3C763D',
					textAlign : 'center',
					opacity : '1',
					marginTop : '0 ',
					marginBottom : '0 ',
					marginLeft : 'auto',
					marginRight: 'auto',
					width: '100%',
					padding : '27px',
					position : "absolute",  
					left : "0px",
					top : "0px",
					fontSize: "20px",
					zIndex : "100",
		 	  	};
		 		    $('.success').css(props);
		 		    
			 	  setTimeout(function(){
			 	       newp.innerHTML = "";
			 	       $("p.success").remove(); 
				},2000);	

		};

		function showSuccessMessageBid2(elemidForm2){	
			var newp2 = document.createElement('p');
				newp2.innerHTML = "Your message has been sent";
				newp2.classList.add('success2');
				newp2.classList.add('animated')
			    newp2.classList.add('fadeInDown');
		 		$(newp2).insertAfter( ".need-project__content");
		 	    var props2 = {
					background: '#DFF0D8',
					color : '#3C763D',
					textAlign : 'center',
					marginTop : '0 ',
					marginBottom : '0 ',
					marginLeft : 'auto',
					marginRight: 'auto',
					width: '320px',
					padding : '27px',
					fontSize: "16px",
					position : "absolute",  
		 	  	};  
		 		   $('.success2').css(props2); 
			 	setTimeout(function(){
			 	    newp2.innerHTML = "";
			 	    $("p.success2").remove(); 
				},2000);	
		};
	/* ---.E-mail Ajax Send---  */

	/*----Animation animate css---*/
		$('.moveright').addClass('bounceInRight');
		$('.moveleft').addClass('bounceInLeft');	
	/*---End Animation animate css---*/	

			$(window).scroll(function(){

			/*---PROFESSIONAL SKILLS animation---*/
				$('.skills').each(function(){
				  var content = $(this).offset().top;
				  var topofWindow =  $(window).scrollTop();
					if(content < topofWindow + 240){
							$( '.line90' ).addClass( 'forline90' );
							$( '.line75' ).addClass( 'forline75' );
							$( '.line65' ).addClass( 'forline65' );	
					}
				});
				//animate css
				$('.move').each(function(){
					var content = $(this).offset().top;
					var topofWindow =  $(window).scrollTop();
					if(content < topofWindow + 240){
						$(this).addClass('pulse');
					}
				});	
			/*---end PROFESSIONAL SKILLS animation---*/	

				/*PROFESSIONAL SKILLS counter*/					
					$.fn.jQuerySimpleCounter = function( options ) {
					    var settings = $.extend({
					        start:  0,
					        end:    100,
					        easing: 'swing',
					        duration: 400,
					        complete: ''
					    }, options );

					    var thisElement = $(this);

					    $({count: settings.start}).animate({count: settings.end}, {
							duration: settings.duration,
							easing: settings.easing,
							step: function() {
								var mathCount = Math.ceil(this.count);
								thisElement.text(mathCount);
							},
							complete: settings.complete
						});
					};

					$('#number1').jQuerySimpleCounter({end: 548,duration: 3000});
					$('#number2').jQuerySimpleCounter({end: 1465,duration: 3000});
					$('#number3').jQuerySimpleCounter({end: 612,duration: 2000});
					$('#number4').jQuerySimpleCounter({end: 765,duration: 2500});
				/*---END PROFESSIONAL SKILLS counter---*/

			});/*---end scroll---*/
	/*---End Animation animate css---*/

	/*----Scroll + Animation animate css---*/
		$(window).scroll(function(){
			$('.movefadeinleft').each(function(){
				var content = $(this).offset().top;
				var topofWindow =  $(window).scrollTop();
				if(content < topofWindow + 240){
					$('.solution__item').addClass('animated')
					$(this).addClass('fadeInLeft');
				}
			});	

			$('.movefadeinright').each(function(){
				var content = $(this).offset().top;
				var topofWindow =  $(window).scrollTop();
				if(content < topofWindow + 240){
					$('.solution__item').addClass('animated')
					$(this).addClass('fadeInRight');
				}
			});	
		});

	/*---Scroll + Animation animate css---*/

	/*--- Sticky menu ---*/
		$(window).scroll(function(){
			var menu = $('.menu');
			var menulinks = $('.menu-link');
			var menulinksprops = {
				'paddingTop' : '0px',
				'paddingBottom' :'0px',
				'paddingLeft' :'14px',
				'paddingRight' :'14px',
			}
			if($(this).scrollTop() > 100){
				menu.css('width','100%');
				menulinks.css(menulinksprops);
				menu.addClass('sticky');
				$('.logo').css('position','fixed');
				$('.logo').css('top','26px');

			}else{
				menu.css('width','70%');	
				menu.removeClass('sticky');
				$('.logo').css('position','relative');
				$('.logo').css('top','0px');
			}
			if($(window).width() <= '992'){
				$('.logo').css('position','relative');
			}

		});
	/*---- Sticky menu ---*/

	/*=== Scroll to section Mobile Menu ===*/
		$(".list a[href^='#']").click(function(){ 
			$("a[href='index.html']").removeClass('active');
			$("a[href^='#']").removeClass('active');
			$(this).addClass('active');
	        var elementClick = $(this).attr("href");
	        var height = -79;
	        var destination = $(elementClick).offset().top + height + 'px';
	        $('html').animate({ scrollTop: destination }, 800);
	        return false; 
	    });
	/*===. Scroll to section Mobile Menu===*/

	/*=== Form validator ===*/
		$.validate({
		    modules : 'html5'
		});
	/*=== .Form validator ===*/
});	