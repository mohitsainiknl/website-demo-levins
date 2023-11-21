/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

(function () {

    var iconEls = [];
    var animations = [];
    const iconsLength = 3;
    var fPath = document.getElementById('banner').getElementsByClassName('filled-path');


    iconEls.push(document.querySelectorAll('#formula-purple path'));
    iconEls.push(document.querySelectorAll('#formula-green path'));
    iconEls.push(document.querySelectorAll('#formula-yellow path'));

    for (let i = 0; i < fPath.length; i++) {
        fPath.item(i).style.transition = 'opacity 1s linear';    
    }
    
    var introIconsAnimation = anime({
        begin: function() {
            for (let i = 0; i < iconsLength; i++) {
                    animations.push(anime({
                    targets: iconEls[i],
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 300,
                    autoplay: true,
                    delay: function(el, n) {return (n * 250 + i * 1000 + 5000)},
                    update: function(anim) {
                        progress = Math.round(anim.progress);
                        if(progress === 95) {
                            fPath.item(i).style.opacity = '1';
                        }
                    }
                }));
            }
        },
        autoplay: false,
    });


    introIconsAnimation.play();
    // introIconsAnimation.seek(introIconsAnimation.duration);
    
})();




(function() {
    var circlePathEls = document.querySelector('.front-image').querySelectorAll('.breath');
    const pathLength = circlePathEls.length;
    var animations = [];
    
    var breathAnimation = anime({
        begin: function() {
            for (let i = 0; i < pathLength; i++) {
            // for (let i = pathLength-1; i >= 0; i--) {
                    animations.push(anime({
                    targets: circlePathEls[i],
                    translateY: [3, -6],
                    // translateX: [3, -6],
                    // scale: [0.98, 1.02],
                    easing: 'linear',
                    autoplay: false
                }));
            }
        },
        update: function(ins) {
            animations.forEach((animation, i )=> {
                var percent = (1 - Math.sin((i * .65) + (.0011 * ins.currentTime))) / 2;
                animation.seek(animation.duration * percent);
            });
        },
        duration: Infinity,
        autoplay: false
    });


    const speed = 40;

    var introCirclesAnimation = anime({
        targets: '.front-image .breath',
        easing: 'easeOutSine',
        duration: 1000,
        r: [
            { value: anime.stagger(-12.8, {start: 110}), duration: 9*speed, endDelay: 1*speed, easing: 'cubicBezier(0.225, 1, 0.915, 0.980)' },
            { value: anime.stagger(-12.8, {start: 98}), duration: 6*speed, easing: 'easeInQuad' },
            { value: anime.stagger(-12.8, {start: 110.4}), duration: 6*speed, easing: 'easeOutQuad' }
        ],
        delay: anime.stagger(50),
        autoplay: false
    });

    anime.set('.front-image .image-front', {
        translateY: 10,
    });

    var introImageAnimation = anime({
        targets: '.front-image .image-front',
        translateY: 0,
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000,
        autoplay: false,
        delay: 1000,
    });

    
    introCirclesAnimation.play();
    introImageAnimation.play();
    breathAnimation.play();
    // introCirclesAnimation.seek(introCirclesAnimation.duration);

})();    


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
                    delay: 4000,
                }));
            });
        },
        autoplay: false,
    });
    introDesignAnimation.play();
})();






(function() {
    const speed = 40;
    const delay = 2000;
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








// let x = 0,
//     y = 0,
//     strength = 500, // higher is stronger
//     mouseMoveHandler = function (e) {
//         x = e.pageX;
//         y = e.pageY;
//     };

// let points = Array.from(document.querySelectorAll('.breath'), el => {
//     let rec = el.getBoundingClientRect();
//     console.log(rec);
//     return {
//         magnet: el, //getBoundingClientRect
//         x: Number(rec.left),
//         y: Number(rec.top),
//         ox: Number(rec.left),
//         oy: Number(rec.top)
//     };
// });

// let animate = function () {
//     let dx,
//         dy,
//         dist,
//         angle;
//     points.forEach((el, i) => {
//         // start repulsion calculation
//         dx = el.x - x;
//         dy = el.y - y;
//         angle = Math.atan2(dy, dx);
//         dist = strength / Math.sqrt(dx * dx + dy * dy);
//         el.x += Math.cos(angle) * dist;
//         el.y += Math.sin(angle) * dist;
//         el.x += (el.ox - el.x) * .1;
//         el.y += (el.oy - el.y) * .1;
//         // end repulsion calculation
//         el.magnet.setAttribute('cx', el.x);
//         el.magnet.setAttribute('cy', el.y);
//     });
//     window.requestAnimationFrame(animate);

// };
// window.addEventListener('mousemove', mouseMoveHandler);
// animate();




