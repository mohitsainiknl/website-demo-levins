/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */





(function() {
    var circles = [
        {
            target: '#circle-tr ellipse',
            cy: -292.5,
        },
        {
            target: '#circle-dl ellipse',
            cy: 537.8,
        }
    ];

    const len = circles.length;
    var animations = [];
    

    var introDesignAnimation = anime({
        begin: function() {
            circles.forEach(circle => {
                animations.push(anime({
                    targets: circle.target,
                    cy: circle.cy,
                    easing: 'easeOutSine',
                    duration: 1000,
                    delay: 1400,
                }));
            });
        },
        autoplay: false,
    });
    introDesignAnimation.play();
})();






(function() {
    const speed = 40;
    const delay = 100;
    // const delay = 20;
    const val = 3;

    anime.set('#main-logo .bounced-letter', { translateX: -131.1 });
    anime.set('#main-logo #quote', { translateY: 100 });


    var introLogoAnimation = anime.timeline({
        easing: 'easeOutSine',
        autoplay: false,
        // direction: 'alternate',
        // loop: true,
    })
    .add({
        targets: '#main-logo .bounced-letter',
        transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
        translateX: [
            { value: 50, duration: 9*speed, endDelay: 1*speed, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)' },
            { value: -10, duration: 6*speed, easing: 'easeInQuad' },
            { value: 0, duration: 6*speed, easing: 'easeInQuad' }
        ],
        delay: anime.stagger(2*speed, {direction: 'reverse'})
    }, delay)
    .add({
        targets: '#main-logo #quote',
        transformOrigin: ['50% 100% 0px', '50% 100% 0px'],
        translateY: [
            { value: -40, duration: 9*speed, endDelay: 1*speed, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)' },
            { value: 20, duration: 6*speed, easing: 'easeInOutQuad' },
            { value: 0, duration: (6+val)*speed, easing: 'easeInQuad' }
        ],
    }, '-=' + 2.5*speed)
    .add({
        targets: '.bounced-letter',
        scaleY: [
          {value: .9, duration: 7.5*speed, easing: 'easeOutQuart'},
          {value: 1, duration: 40*speed, easing: 'easeOutElastic(1, .5)'}
        ],
        delay: anime.stagger(1.5*speed)
      }, '-=' + (10+val)*speed)
    .add({
        begin: function() {
            var backEls = document.getElementById('main-logo').getElementsByClassName('st0');
            const len = backEls.length;
            for (let i = 0; i < len; i++) {
                backEls[i].style.fill = 'rgba(0, 0, 0, 0';
            }
        }
    }, '-=2000')
    introLogoAnimation.play();
})();





