$(document).ready(function() {
    onSelectTestimonialAvatar();
    loadLatestNews();

    const menu = new Mmenu("#mobile-nav", {
        offCanvas: {
            position: "right-front",
            page: {
                selector: "#page"
            }
        },
        theme: "light"
    });

    $('.mobile-nav-link').click(function() {
        menu.API.close();
    });


    $(".log-in-button").click(function() {
        $.magnificPopup.open({
            items: {
                src: '#login-popup',
                type: 'inline'
            }
        });
    });

    $(".sign-up-button").click(function() {
        $.magnificPopup.open({
            items: {
                src: '#signup-popup',
                type: 'inline'
            }
        });
    });
});

$('#team-left-arrow').click(function() {
    let target = $('#team-content-right').scrollLeft() - 300;
    if (target < 0) {
        target = 0;
    }

    $('#team-content-right').animate({
        scrollLeft: target
    }, 500);
});

$('#team-right-arrow').click(function() {
    const width = $('#team-content-right').prop("scrollWidth");
    let target = $('#team-content-right').scrollLeft() + 300;
    if (target > width) {
        target = width;
    }

    $('#team-content-right').animate({
        scrollLeft: target
    }, 500);
});

$('.testimonal-avatar').click(function(e) {
    const isClickable = $(e.target).attr("class").split(/\s+/).includes('clickable');
    if (isClickable) {
        const selected = $('.testimonal-avatar.testimonal-avatar-selected');
        selected.removeClass('testimonal-avatar-selected');
        selected.addClass('clickable');

        $(e.target).removeClass('clickable');
        $(e.target).addClass('testimonal-avatar-selected');

        onSelectTestimonialAvatar();
    }
});

$("#testimonials-left-arrow").click(function() {
    const testimonals = $('.testimonal-avatar').toArray();
    const selected = $('.testimonal-avatar.testimonal-avatar-selected');
    const selectedIndex = testimonals.indexOf(selected[0]);

    if (selectedIndex === -1) return;
    if ((selectedIndex - 1) < 0) return;

    selected.removeClass('testimonal-avatar-selected');
    selected.addClass('clickable');

    const toSelect = $(testimonals[selectedIndex - 1]);
    $(toSelect).removeClass('clickable');
    $(toSelect).addClass('testimonal-avatar-selected');

    onSelectTestimonialAvatar();

});

$("#testimonials-right-arrow").click(function() {
    const testimonals = $('.testimonal-avatar').toArray();
    const selected = $('.testimonal-avatar.testimonal-avatar-selected');
    const selectedIndex = testimonals.indexOf(selected[0]);

    if (selectedIndex === -1) return;
    if ((selectedIndex + 1) >= testimonals.length) return;

    selected.removeClass('testimonal-avatar-selected');
    selected.addClass('clickable');

    const toSelect = $(testimonals[selectedIndex + 1]);
    $(toSelect).removeClass('clickable');
    $(toSelect).addClass('testimonal-avatar-selected');

    onSelectTestimonialAvatar();
});

function onSelectTestimonialAvatar() {
    const fullNameMap = {
        'chika': { 'en': 'Chika Mefor', 'ar': 'تشيكا ميفور' },
        'eman': { 'en': 'Eman Mounir', 'ar': 'إيمان منير' },
        'hillary': { 'en': 'Hillary Murani', 'ar': 'هيلاري موراني' },
        'nahla': { 'en': 'Nahla al-Qadasi', 'ar': 'نهلة القدسي' },
        'soulaimane': { 'en': 'Soulaimane Bakbach', 'ar': 'سليمان بكباش' },
    };

    const regionMap = {
        'chika': { 'en': 'Nigeria', 'ar': 'نيجريا' },
        'eman': { 'en': 'Egypt', 'ar': 'مصر' },
        'hillary': { 'en': 'Kenya', 'ar': 'كينيا' },
        'nahla': { 'en': 'Yemen', 'ar': 'اليمن' },
        'soulaimane': { 'en': 'Morocco', 'ar': 'المغرب' }
    };

    const testimonialMap = {
        'chika': {
            'en': 'Working with Egab has put me in the spotlight. It has exposed me and my writing to a broader spectrum of readers, and at this point in my writing career, I can only hope for the best!<br>Thank you Egab.',
            'ar': 'أصبحت موضع الأنظار بفضل عملي مع إيجاب، فقد اطلع عدد كبير من القراء على كتاباتي. وفي هذه المرحلة من مسيرتي المهنية لا يسعني إلا أن أتمنى الأفضل. شكرا إيجاب.',
        },
        'eman': {
            'en': 'Working with Egab is different and exciting, as it enables me to reach a wider and larger audience for my local stories through publishing in international media outlets. This also enables me to help to extend the voice of  local victims that are often overlooked to a global audience interested in their cause. I was so pleased to find Western non-Arabic speaking audiences engaging with and sharing my story about the impact of climate change on  Egypt&rsquo;s Fayyum Governorate.',
            'ar': 'العمل مع إيجاب ممتع ومختلف، لأنه يمكني من الوصول لمؤسسات عالمية وبالتالي جمهور أوسع وأكبر لقصصي المحلية. أيضا يمكني من إيصال أصوات الضحايا المحليين الذين غالبا لا يلتفت لهم أحد إلى جمهور عالمي مهتم بقضيتهم. كانت لحظة سعيدة عندما عملت على قصة محلية عن تأثيرات تغير المناخ في محافظة الفيوم المصرية، وبعدها وجدت جمهور غربي غير متحدث باللغة العربية يتفاعل ويعيد نشر قصتي من جديد.',
        },
        'hillary': {
            'en': 'Working with Egab provided me with an opportunity to tell the African story from a positive perspective. I have experienced writing for an international audience through Egab and the exemplary guidance I received from my editor has been heartwarming. I gained knowledge in pitching a story and writing skills. I feel like joining the Egab network of journalists was the best decision I ever made.',
            'ar': 'أتاح لي العمل مع إيجاب فرصة سرد قصة أفريقيا من منظور إيجابي. جرّبت الكتابة لجمهور عالمي من خلال إيجاب وحصلت من المحررة، التي عملت معها، على إرشادات مثالية وصادقة. لقد اكتسبت معرفة بخصوص عرض قصتي كما طورت مهاراتي في الكتابة. أشعر أن الانضمام إلى إيجاب كان أفضل قرار اتخذته على الإطلاق.',
        },
        'nahla': {
            'en': 'By following Egab&rsquo;s social media pages, I saw how they helped journalists from different countries spread their stories on global media networks. I became enthusiastic to do the same and got in touch! I published my first report from Sanaa on The National with Egab&rsquo;s help, which paved the way for me to tell readers around the world about successful initiatives that were born amid the war in Yemen. ',
            'ar': 'من` شهور وانا اتابع صفحة ايجاب على فيسبوك ورأيت كيف ساعدت ايجاب صحفيين من بلدان مختلفة على نشر قصصهم على منصات عالمية. أحببت الأمر وتحمست له فراسلت ايجاب وكان اول تقرير لي من صنعاء  مع ايجاب التي مهدت لي الطريق لأكشف عن مبادرات ناجحة نطلقت من بين ركام الحرب في اليمن لتصل الى ملايين القراء في العالم عبر منصة ذا ناشيونال الناطقة باللغة الانجليزية ..شكرآ ايجاب.',
        },
        'soulaimane': {
            'en': 'Egab not only helps you publish your work but they also provide hands-on teaching of new approaches to journalism. In my opinion, this is the right way of learning and with Egab&rsquo;s help, young journalists will master new methods which make them stand apart from the rest of their peers.',
            'ar': 'إيجاب لا تساعدك في نشر أعمالك الصحفية فحسب، بل تأخذ بيدك وتعلمك تقنيات الكتابة الصحفية الحديثة، والتي لم نحصل على تكوين فيها في المعاهد ذات المناهج التقليدية. في نظري، طريقة التعلم الصحيحة، هي التي تقدمها إيجاب وأفراد طاقمها للصحفيين الشباب الذين يشقون طريقا صعبا في دروب صاحبة الجلالة. مع مرور الوقت، ستجد نفسك متمكنا من أدوات صحفية لم تكن متمكنا منها قبل، والأهم أنك ستغدو متميزا عن بقية أقرانك.',
        }
    };

    const selected = $('.testimonal-avatar.testimonal-avatar-selected');
    const key = selected.data('key');
    const language = document.documentElement.lang;

    $('#testimonial-name').text(fullNameMap[key][language]);
    $('#testimonial-region').text(regionMap[key][language]);
    $('#testimonial-text').html(testimonialMap[key][language]);
}

function loadLatestNews() {
    $.get("/data/articles.csv", function(data, status) {
        if (status === 'success') {
            const articles = $.csv.toObjects(data)
                .filter(a => a.language === 'English' && a.imageUrl !== '')
                .sort((a, b) => new Date(b.date) - new Date(a.date));

            articles.forEach(article => {
                const storyCard = $('#our-work-story-card-template').clone();
                storyCard.removeAttr('id');
                storyCard.find('.our-work-story-card-background').attr('style', `background-image: url('${article.imageUrl}')`);
                storyCard.find('.our-work-story-card-title').text(article.title);
                storyCard.find('.our-work-story-card-description').text(article.description);
                storyCard.find('.our-work-story-card-link').attr('href', article.url);

                $('#our-work-story-container').append(storyCard);

                var x,left,down;
                $('#our-work-story-container').mousedown(function(e) {
                    e.preventDefault();
                    down = true;
                    x = e.pageX;
                    left = $(this).scrollLeft()
                });
                $('body').mousemove(function(e) {
                    if (down) {
                        var newX = e.pageX;
                        $('#our-work-story-container').scrollLeft(left - newX + x)
                    }
                });
                $('body').mouseup(function(e){down = false;});
            });
        }
    })
}
