$(document).ready(function() {
    const skillBars = $('.skill-level');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = $(entry.target);
                const percent = parseInt(skillLevel.attr('data-percent'), 10);
                skillLevel.css('width', percent + '%');

                let currentPercent = 0;
                const interval = setInterval(() => {
                    if (currentPercent >= percent) {
                        clearInterval(interval);
                    } else {
                        currentPercent++;
                        skillLevel.attr('data-percent', currentPercent + '%');
                    }
                }, 40);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    skillBars.each(function() {
        observer.observe(this);
    });
});

$('#translate-btn').click(function() {
    const btn = $('#translate-btn');
    $('body').toggleClass('rtl');
    const elementsToTranslate = $('h2, h3, p, li');
    if (btn.hasClass('english')) {
        btn.removeClass('english');
        elementsToTranslate.each(function() {
            const element = $(this);
            switch (element.text()) {
                case 'درباره من':
                    element.text('About Me');
                    break;
                case 'تماس با من':
                    element.text('Contact Me');
                    break;
                case 'مهارت‌های من':
                    element.text('My Skills');
                    break;
                case 'توسعه وب':
                    element.text('Web Development');
                    break;
                case 'توسعه ویندوز':
                    element.text('Windows Development');
                    break;
                case 'سایر مهارت‌ها':
                    element.text('Other Skills');
                    break;
                default:
                    if (element.text().includes('سلام، من احمد هستم، توسعه‌دهنده وب و بازی')) {
                        element.text('Hi I\'m Ahmad, web&Game developer And Still in Progress =]');
                    }
            }
        });
    } else {
        btn.addClass('english');
        elementsToTranslate.each(function() {
            const element = $(this);
            switch (element.text()) {
                case 'About Me':
                    element.text('درباره من');
                    break;
                case 'Contact Me':
                    element.text('تماس با من');
                    break;
                case 'My Skills':
                    element.text('مهارت‌های من');
                    break;
                case 'Web Development':
                    element.text('توسعه وب');
                    break;
                case 'Windows Development':
                    element.text('توسعه ویندوز');
                    break;
                case 'Other Skills':
                    element.text('سایر مهارت‌ها');
                    break;
                default:
                    if (element.text().includes('Hi I\'m Ahmad, web&Game developer And Still in Progress =]')) {
                        element.text('سلام، من احمد هستم، توسعه‌دهنده وب و بازی');
                    }
            }
        });
    }
});