window.addEventListener('DOMContentLoaded', () => {

    //Hello screen

    const h = document.querySelector('h1'),
          h2 = document.querySelector('h2'),
          h3 = document.querySelector('h3'),
          hello = document.querySelector('.hello'),
          main = document.querySelector('.home'),
          title = document.querySelector('.home__text'),
          eye = document.querySelector('.home__eye-wrapper'),
          header = document.querySelector('.home__header');
    
    h.classList.add('fade');

    setTimeout(() => {
        h.classList.add('fadeOut');
    }, 2000);

    setTimeout(() => {
        h.classList.add('displaynone');
    }, 3000);

    setTimeout(() => {
        h2.classList.remove('displaynone');
        h2.classList.add('fade');
    }, 4000);

    setTimeout(() => {
        h2.classList.add('fadeOut');
    }, 6000);

    setTimeout(() => {
        h2.classList.add('displaynone');
    }, 7000);

    setTimeout(() => {
        h3.classList.remove('displaynone');
        h3.classList.add('fade');
    }, 8000);

    setTimeout(() => {
        h3.classList.add('fadeOut');
    }, 10000);

    setTimeout(() => {
        h3.classList.add('displaynone');
        hello.classList.add('displaynone');
        main.classList.remove('displaynone');

    }, 11000);

    setTimeout(() => {
      title.classList.add('animate__animated');
      title.classList.remove('displaynone');
      title.classList.add('animate__fadeInLeft');
      eye.classList.add('animate__animated');
      eye.classList.remove('displaynone');
      eye.classList.add('animate__fadeInRight');
      header.classList.add('animate__animated');
      header.classList.remove('displaynone');
      header.classList.add('animate__fadeInDown');

    }, 12000);

    setTimeout(() => {
        var eyeLashes = {
            targets: '.c-hero__eye svg .c-eyelash',
            opacity: 1,
            delay: anime.stagger(200, {easing: 'cubicBezier(.5, .05, .1, .3)'})
          };
        
          var timelineEyeIntro = anime.timeline();
          timelineEyeIntro.add(eyeLashes);
          
        var eyeDec = {
            targets: '.eye-dec',
            opacity: 1,
            delay: anime.stagger(200, {easing: 'cubicBezier(.5, .05, .1, .3)'})
        };
        var eyelineEyeIntro = anime.timeline();
          eyelineEyeIntro.add(eyeDec);
    }, 13000);


  // main eye animations

  const headerEye = () => {

  
    // main eye animations

      anime({
        targets: '.c-hero__eye__inner',
        translateY: [-20,0],
        direction: 'alternate',
        duration: 2000,
        autoplay: true,
        loop: true,
        easing: 'easeInOutQuad'
      });

  
    var eyeCornea = {
      targets: '.c-cornea',
      translateX: -40,
      autoplay: true,
      duration: 3000,
      delay: 1500,
      easing: 'easeInOutExpo'
    };
  
    var eyeCorneaUp = {
      targets: '.c-cornea',
      translateY: -10,
      autoplay: true,
      duration: 100,
      easing: 'easeInOutExpo'
    };
  
    var eyeCorneaMid = {
      targets: '.c-cornea',
      translateY: 0,
      autoplay: true,
      duration: 50,
      delay: 1000,
      easing: 'easeInOutExpo'
    };
  
    var eyeCorneaBottom = {
      targets: '.c-cornea',
      translateY: 10,
      autoplay: true,
      duration: 50,
      delay: 1000,
      easing: 'easeInOutExpo'
    };
  
    var eyeCorneaStart = {
      targets: '.c-cornea',
      translateX: 0,
      translateY: 0,
      autoplay: true,
      duration: 1000,
      delay: 1000,
      easing: 'easeInOutExpo'
    };
  
    var eyeCorneaDown = {
      targets: '.c-cornea',
      translateY: 80,
      scale: 0.7,
      autoplay: true,
      duration: 500,
      delay: 3000,
      easing: 'easeInOutExpo'
    }
  
    var eyeRollUp = {
      targets: '.c-cornea',
      translateY: -30,
      autoplay: true,
      duration: 1300,
      delay: 400,
      easing: 'easeInOutBack'
    }
  
    var eyeRollDown = {
      targets: '.c-cornea',
      translateY: 0,
      autoplay: true,
      duration: 200,
      easing: 'easeOutBack'
    }
  
    var eyeCornPanRight = {
      targets: '.c-cornea',
      translateX: 80,
      autoplay: true,
      duration: 2000,
      delay: 200,
      easing: 'easeInOutBack'
    }
  
    var eyeCorneaReUp = {
      targets: '.c-cornea',
      translateX: 0,
      translateY: 0,
      scale: 1,
      autoplay: true,
      duration: 600,
      delay: 2000,
      easing: 'easeInOutExpo'
    }
  
    var eyeScale = {
      targets: '.c-hero__eye__scale',
      scale: 4.2,
      duration: 600,
      delay: 1500,
      easing: 'easeOutElastic(1, .8)'
    }
  
    var eyeScaledZoomLeft = {
      targets: '.c-cornea',
      translateX: -40,
      duration: 2500,
      easing: 'easeInOutExpo'
    }
  
    var eyeScaledZoomRight = {
      targets: '.c-cornea',
      translateX: 40,
      duration: 2500,
      easing: 'easeInOutExpo'
    }
  
    var eyeScaledZoomCenter= {
      targets: '.c-cornea',
      translateX: 0,
      duration: 2500,
      easing: 'easeInOutExpo'
    }
  
    var eyeScaleBack = {
      targets: '.c-hero__eye__scale',
      scale: 1,
      duration: 600,
      delay: 500,
      easing: 'easeInOutExpo'
    }
  
    var timelineEye = anime.timeline({
      loop: true,
      autoplay: true
    });
  
    timelineEye.add(eyeCornea)
    .add(eyeCorneaUp)
    .add(eyeCorneaMid)
    .add(eyeCorneaBottom)
    .add(eyeCorneaStart)
    .add(eyeRollUp)
    .add(eyeRollDown)
    .add(eyeCorneaDown)
    .add(eyeCornPanRight)
    .add(eyeCorneaReUp)
    .add(eyeScale)
    .add(eyeScaledZoomLeft)
    .add(eyeScaledZoomRight)
    .add(eyeScaledZoomCenter)
    .add(eyeScaleBack)
  }

  const eyeFollow = () => {

    $("html").mousemove(function(event) {
    var $eye = $(".c-logo__eye");
    var $x = ($eye.offset().left) + ($eye.width() / 2);
    var $y = ($eye.offset().top) + ($eye.height() / 2);
    var $rad = Math.atan2(event.pageX - $x, event.pageY - $y);
    var $rot = ($rad * (180 / Math.PI) * -1) + 180;
    $eye.css({
      '-webkit-transform': 'rotate(' + $rot + 'deg)',
      '-moz-transform': 'rotate(' + $rot + 'deg)',
      '-ms-transform': 'rotate(' + $rot + 'deg)',
      'transform': 'rotate(' + $rot + 'deg)'
    });
  });
  
  }
  
  eyeFollow();
  headerEye();

  // hover transform 

  const eyeLogo = document.querySelector('.c-logo'),
        lashLogo = document.querySelector('.c-logo__iris'),
        navbarLinks = document.querySelectorAll('.home__header-item'),
        logo = document.querySelector('.home__header-logo');

  function hoverEyeTransform(item) {
    item.addEventListener('mouseenter', (e) => {
        eyeLogo.classList.add('eyeToggleClass');
        lashLogo.classList.add('lashToggleClass');
    });
    item.addEventListener('mouseleave', () => {
        eyeLogo.classList.remove('eyeToggleClass');
        lashLogo.classList.remove('lashToggleClass');
    });
  }

  navbarLinks.forEach(item => {
    hoverEyeTransform(item);
  });

  hoverEyeTransform(logo);

  


});

