/**
 * Created by Commander on 2016/7/18.
 */

$(function () {
    var str = '<div id="over" class="over"></div><div id="layout" class="layout"><img src="images/loading.gif"/></div>';
    $(".btn-primary").on("click",function () {
        $(".main").append(str);
        $("#layout").show();
        $("#over").show();
    });

    $(".btn-default").on("click",function () {
        $("#layout").remove();
        $("#over").remove();
    })

    $(".btn-danger").on("click",function () {
        $("body").append(str);
        $("#layout").show();
        $("#over").show();
    })
});
