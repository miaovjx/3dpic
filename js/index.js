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
    var jq = jQuery.noConflict();
    jq(document).ready(function() {
        jq('.roundabout_box ul').roundabout({
            duration: 1000,
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
    jq('.roundabout-holder li').on('tap', function() {});
    var swipercd = null;
    var swiperwh = null;
    var swiperhf = null;
    $('.roundabout-in-focus').live('tap', function() {
        var city = $(this).attr('data-city');
        // alert(city)
        if (city == 'cd') {
            $('.tk-detail').addClass('none');
            $('.tk-detail-cd').removeClass('none');
            if (swipercd) {
                swipercd.destroy()
            } else {
                setTimeout(function() {
                    swipercd = new Swiper('.swiper-container-cd', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true
                    })
                }, 100)
            }
        } else if (city == 'wh') {
            $('.tk-detail').addClass('none');
            $('.tk-detail-wh').removeClass('none');
            if (swiperwh) {
                swiperwh.destroy()
            } else {
                setTimeout(function() {
                    swiperwh = new Swiper('.swiper-container-wh', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true
                    })
                }, 100)
            }
        } else if (city == 'hf') {
            $('.tk-detail').addClass('none');
            $('.tk-detail-hf').removeClass('none');
            if (swiperhf) {
                swiperhf.destroy()
            } else {
                setTimeout(function() {
                    swiperhf = new Swiper('.swiper-container-hf', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true
                    })
                }, 100)
            }
        }
    });
    $('.btn_close').on('tap', function() {
        $(this).closest('.tk').addClass('none');
    });
});