// 实现头部导航栏样式 
var sliderWidth = 96;
var windowWidth=$(window).width();
var data={
    sliderOffset :0,
    sliderLeft: 0
}
var left = (windowWidth/3-sliderWidth)/2
$('.weui-navbar__slider').css("left",left)
$(function(){      
    $('.weui-navbar__item').on('click', function () {//选中事件
    //头部样式
        var index=$(this).index()
        $(this).addClass('navbar-active').siblings('.navbar-active').removeClass('navbar-active');
        $('.weui-navbar__slider').animate({"left":(left+windowWidth/3*index)+"px"});
    //显示页面
    // console.log($(".part-page")[index])
        $(".part-page").eq(index).addClass('show').siblings('.show').removeClass('show')
        
    }); 
//手风琴效果
var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
} 
    var accordion = new Accordion($('#accordion'), false);
    var accordion1 = new Accordion($('#accordion1'), false);
    var accordion2 = new Accordion($('#accordion2'), false);
});

	


