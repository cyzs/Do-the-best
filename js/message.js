//表单信息
$(function () {
   var nameSpan = $(".first .text-wrap .pic-wall .mes-wrap .mes .name span"),
       peopleSpan = $(".first .text-wrap .pic-wall .mes-wrap .mes .mes-people span"),
       youthSpan =$(".first .text-wrap .pic-wall .mes-wrap .mes .youth-title span"),
       youthList = $(".first .text-wrap .pic-wall .mes-wrap .mes .youth-list"),
       youthli =  $(".first .text-wrap .pic-wall .mes-wrap .mes .youth-list .youth-li"),
       enveTitle = $(".first .text-wrap .pic-wall .mes-wrap .envelope .envelope-tile"),
       enveDate = $(".first .text-wrap .pic-wall .mes-wrap .envelope .envelope-date"),
       enveName = $(".first .text-wrap .pic-wall .mes-wrap .envelope .envelope-name"),
       inputName = $("#name"),
       inputPeople = $("#people"),
       inputYouth = $("#youth"),
       inputTime = $("#time"),
       $recode = $("#recode"),
       $deleteAll = $("#deleteAll");
   //关闭按钮
    function clearText() {
        $(this).siblings("input").val("");
    }
    nameSpan.on("click",clearText);
    peopleSpan.on("click",clearText);

   //添加按钮
    function addLabel() {
        if(inputYouth.val() === ""){
           return;
        }
        //取得青春标签的内容
        var youthLable = inputYouth.val();
        var ele = "<li class='youth-li'>"+youthLable +"</li>";
        youthList.append($(ele));
        inputYouth.val("");
    }
    function keyD(e) {
        if(e.which === 13){
            addLabel();
        }
    }
    inputYouth.on("keydown",keyD);
    youthSpan.on("click",addLabel);

    //双击删除标签
    youthList.on("dblclick","li",function () {
       $(this).remove();
    });

    //删除全部标签
    $deleteAll.on("click",function () {
        //empty() 删除全部子标签
        youthList.empty();
    });
    //记录事件
    function recode() {
        //清空信封头部
        enveTitle.text("");
        var strTtile = "亲爱的" + inputPeople.val();
        enveTitle.text(strTtile);

        //清空信封事件
        enveDate.text("");
        enveDate.text(inputTime.val());

        //清空写信的人
        enveName.text("");
        enveName.text(inputName.val());
    }
    $recode.on("click",recode);
});