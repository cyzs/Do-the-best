$(function () {
    var con = $(".first .text-wrap .pic-wall .con-list li");
    console.log(con);
    //大小转换
    con.hover(function () {
        $(this).removeClass("smaller").addClass("biger");
        $(this).siblings("li").removeClass("biger").addClass("smaller")
    }, function () {
        $(this).removeClass("biger");
        $(this).siblings("li").removeClass("smaller");
    });

    //轮播事件
   var i = 0;
   var timer = null;
   var picList = $(".first .text-wrap .pic-wall .pic-tv  .source-list");
   var picLi = picList.find("li");
   //点击右按钮
   $(con[0]).on("click",autoR);


    function  autoR() {
        if(i<4){
            i++;
            picList.animate({"left":i*-290 + "px"},1000)
        }else{
            i=0;
            picList.animate({"left":5*-290 + "px" },1000,function(){
                picList.css("left","0px");

            })
        }


    }


    //点击左按钮
    $(con[1]).on("click",function(){
        if(i>0){
           i--;
            picList.animate({"left":i*-290},1000)
        }else{
            i=4;
            picList.css("left","-1450px");
            picList.animate({"left":i*-290 + "px"},1000)
        }
    });


    timer=setInterval(autoR,2000);

    var picTv = $(".pic-tv");
    picTv.mouseover(function(){
        clearInterval(timer)
    });
    picTv.mouseout(function(){
        clearInterval(timer);
        timer=setInterval(autoR,2000);
    })

});