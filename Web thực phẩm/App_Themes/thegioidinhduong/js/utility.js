$(document).ready(function () {
    loadWorldMen();
    loadWorldWomen();
    loadPartnerSlide();
    loadDefaultKey();
    loadNav();
    showRate();

    linkCartShop();
    try {
        $('.root li ul').not(':has(li)').remove();
        $('.nav-ft li ul').not(':has(li)').remove();
        //        $('.root > li > a').each(function () {
        //            if ($(this).height() < 40)
        //            { $(this).addClass('fix-height'); }
        //        });
        //loadJWPlayer("mediaplayer", "video/7YearsofLove.flv", "images/chanel2.png", 578, 350, 0);
        //loadJWPlayer("mediaplayer2", "video/7YearsofLove.flv", "images/chanel2.png", 400, 315, 0);
    } catch (e) { }
    try {
        $('#coin-slider').coinslider({
            width: 999, // width of slider panel
            height: 344, // height of slider panel
            spw: 7, // squares per width
            sph: 5, // squares per height
            delay: 3000, // delay between images in ms
            sDelay: 30, // delay beetwen squares in ms
            opacity: 0.7, // opacity of title and navigation
            titleSpeed: 500, // speed of title appereance in ms
            effect: '', // random, swirl, rain, straight
            navigation: true, // prev next and buttons
            links: true, // show images as links
            hoverPause: true // pause on hover
        });
    } catch (e) { }

    try {
        jQuery('#mycarousel').jcarousel({
            auto: 0,
            wrap: 'last',
            initCallback: mycarousel_initCallback,
            scroll: 1
        });
        jQuery('#mycarousel2').jcarousel({
            auto: 0,
            wrap: 'last',
            initCallback: mycarousel_initCallback,
            scroll: 1
        });
    } catch (e) { }

    $('.nav-ft ul li:first').css({ 'border-left': 'none' });
    try {
        $('#s6').cycle({
            fx: 'scrollUp',
            timeout: 6000,
            delay: -2000
        });
    } catch (e) { }  

    $('.gotop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
    //search
    $('#btnSearch').click(function () {
        var k = $('#key').val();
        if (k != "Nhập từ khóa tìm kiếm") {
            window.location.href = '/tim-kiem.html?keyword=' + $('#key').val();
            return true;
        }
        else return false;
    });
    $('#key').keypress(function (e) {
        if (e.keyCode == 13) {
            var k = $('#key').val();
            if (k != "Nhập từ khóa tìm kiếm") {
                window.location.href = '/tim-kiem.html?keyword=' + $('#key').val();
                return true;
            }
            else return false;
        }
    });
	$('#icon-support a.exit-support').click(function(){
		$('#icon-support').hide();
		return false;
	});
});
function loadNav() {
    $('#nav .root > li > a').hover(function () {
        $(this).next().stop(true, true).slideDown('fast');
    }, function () { });
    $('#nav .root > li').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).find('ul:first').stop(true, true).slideUp('fast');
        $(this).removeClass('hover');
    });
    $('#nav .root ul > li').hover(function () {
        $(this).addClass('hover-lev1');
    }, function () {
        $(this).removeClass('hover-lev1');
    });
}
function mycarousel_initCallback(carousel) {
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function () {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function () {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function () {
        carousel.stopAuto();
    }, function () {
        carousel.startAuto();
    });
};
function loadWorldMen() {
    $('.world-men .men-products .item:nth-child(3n)').css({ 'margin-right': 0 });
    $('.world-men .men-products .item:nth-child(1) .label').addClass('label1');
    $('.world-men .men-products .item:nth-child(2) .label').addClass('label2');
    $('.world-men .men-products .item:nth-child(3) .label').addClass('label3');
}
function loadWorldWomen() {

    $('.world-women .women-products .item:nth-child(4n)').css({ 'margin-right': 0 });
}
function loadJWPlayer(id, fileName, imgSrc, width, height, autostart) {
    try {
        jwplayer(id).setup({
            flashplayer: "plugins/player.swf",
            file: fileName,
            image: imgSrc,
            skin: "plugins/newtubedark/newtubedark.xml",
            'viral.onpause': false,
            'viral.oncomplete': false,
            'controlbar.position': 'bottom',
            'controlbar.idlehide': false,
            autoplay: autostart,
            width: width,
            height: height
        });
    } catch (e) { }
}
function loadPartnerSlide() {
    marqueeInit({
        uniqueid: 'ftpartner',
        style: {
            'padding': '0',
            'width': '100%',
            'height': '80px',
            'margin': '0 auto'
        },
        inc: 30, //speed - pixel increment for each iteration of this marquee's movement
        mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
        moveatleast: 2,
        neutral: 400,
        addDelay: 30,
        savedirection: true,
        random: true
    });

    marqueeInit({
        uniqueid: 'certificate',
        style: {
            'padding': '0',
            'width': '100%',
            'height': '206px'
        },
        inc: 30, //speed - pixel increment for each iteration of this marquee's movement
        mouse: 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
        moveatleast: 2,
        neutral: 400,
        addDelay: 30,
        savedirection: true,
        random: true
    });
}
function loadDefaultKey() {
    $('.search .search-text').focus(function () {
        var defaultText = 'Nhập địa chỉ email của bạn...';
        var defaultEngText = 'Enter email address your...';
        if ($(this).val() == defaultText || $(this).val() == defaultEngText) {
            $(this).val('');
        }
    });
    $('.search .search-text').blur(function () {
        var defaultText = 'Nhập địa chỉ email của bạn...';
        var defaultEngText = 'Enter email address your...';
        var reg = new RegExp("^\s*$");
        if ($(this).val() == defaultText || reg.test($(this).val().replace(/\s/g, ''))) {
            $(this).val(defaultText);
        }
    });
    $('#key').focus(function () {
        var defaultText = 'Nhập từ khóa tìm kiếm';
        var defaultEngText = 'Enter key word';
        if ($(this).val() == defaultText || $(this).val() == defaultEngText) {
            $(this).val('');
        }
    });
    $('#key').blur(function () {
        var defaultText = 'Nhập từ khóa tìm kiếm';
        var defaultEngText = 'Enter key word';
        var reg = new RegExp("^\s*$");
        if ($(this).val() == defaultText || reg.test($(this).val().replace(/\s/g, ''))) {
            $(this).val(defaultText);
        }
    });
}

function showRate() {
    try {
        var tyGia = '';
        tyGia += "<table class='rateTable'><tr><td align='Left'>&nbsp; " + vForexs[0] + " </td><td align=right> " + vCosts[0] + " </td></tr>";
        tyGia += "<tr><td align='center' colspan='2'>Nguồn: VnExpress.net </td></tr></table>";
        $('.exRate').html(tyGia);
    } catch (e) { }
}

function onCart() {
    try {
        $.ajax({
            type: "POST",
            url: document.location.protocol + '//' + document.location.host + "/WebServices/Product.asmx/ChopCart",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () { },
            async: true,
            success: function (n) {
                document.location = n.d;
            }
        });
    } catch (e) { }
}
function linkCartShop() {
    try {
        if ($('#aCarShop').length > 0) {
            $.ajax({
                type: "POST",
                url: "/WebServices/Product.asmx/LinkCartShop",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () { },
                async: false,
                success: function (m) {
                    $('#aCarShop').text(m.d);
                }
            });
        }
    } catch (e) { } 
}
