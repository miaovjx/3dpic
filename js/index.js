/**
 * Created by json(610330335@qq.com) .
 */
$(function() {
    //加载图
    var imgarr = ['images/bg1.jpg'];
    //app初始化
    var h5 = new PageSlider({
        pages: $('.page-wrap .page'),
        dev: 0, //
        // musicUrl: 'music/bg.mp3',
        baseUrl: 'http://xk.guoxinad.com.cn/ad_invitation/'
    });
    ////默认分享
    h5.wxShare('宝贝性格测试，你是否真懂你的娃？', '解自家娃！', '宝贝性格测试，你是否真懂你的娃？', h5.baseUrl + 'index.html', h5.baseUrl + 'images/jsshare.jpg');
    h5._loadimg(imgarr, function() {
        setTimeout(function() {
            $('.loading').addClass('none');
            $('.page1').removeClass('none');
        }, 500);
    });



    /*3d 滚动 +弹窗*/
    var cindex = 2;
    var jq = jQuery.noConflict();
    jq(document).ready(function() {
        jq('.roundabout_box ul').roundabout({
            //  duration: 1000,
            minScale: 0.6,
            autoplay: false,
            autoplayDuration: 5000,
            minOpacity: 0,
            maxOpacity: 1,
            reflect: true,
            startingChild: 3,
            autoplayInitialDelay: 5000,
            autoplayPauseOnHover: true,
            enableDrag: true
        });
    });
    jq('.roundabout_box ul').roundabout("animateToChild", cindex)
    jq('.roundabout-holder li').on('tap', function() {});
    var swipercd = null;
    var swiperwh = null;
    var swiperhf = null;
    $('.roundabout-in-focus').live('tap', function() {
        var city = $(this).attr('data-city');
    });
    btnSlide('.cd_newsbtn_a', '.tk-detail-cd', swipercd, '.swiper-container-cd', 0);
    btnSlide('.cd_newsbtn_b', '.tk-detail-cd', swipercd, '.swiper-container-cd', 1);
    btnSlide('.cd_newsbtn_c', '.tk-detail-cd', swipercd, '.swiper-container-cd', 2);
    btnSlide('.wh_newsbtn_a', '.tk-detail-wh', swiperwh, '.swiper-container-wh', 0);
    btnSlide('.wh_newsbtn_b', '.tk-detail-wh', swiperwh, '.swiper-container-wh', 1);
    btnSlide('.wh_newsbtn_c', '.tk-detail-wh', swiperwh, '.swiper-container-wh', 2);
    btnSlide('.hf_newsbtn_a', '.tk-detail-hf', swiperhf, '.swiper-container-hf', 0);
    btnSlide('.hf_newsbtn_b', '.tk-detail-hf', swiperhf, '.swiper-container-hf', 1);
    btnSlide('.hf_newsbtn_c', '.tk-detail-hf', swiperhf, '.swiper-container-hf', 2);

    function btnSlide(btn, tk, swiper, obj, index) {
        $(btn).on('tap', function() {
            $('.tk-detail').addClass('none');
            $(tk).removeClass('none');
            if (swiper) {
                swiper.slideTo(index);
            } else {
                setTimeout(function() {
                    swiper = new Swiper(obj, {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'cube',
                        cube: {
                            slideShadows: true,
                            shadow: true,
                            shadowOffset: 100,
                            shadowScale: 0.6
                        },
                        loop: false
                    })
                    swiper.slideTo(index);
                }, 100)
            }
        });
    }
    $('.btn_close').on('tap', function() {
        $(this).closest('.tk').addClass('none');
    });


    /*3d 滚动 +弹窗*/
});