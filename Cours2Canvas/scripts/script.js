/*
<!--Par: William John Adam Trindade-->
<!--2021-04-24-->
 */
initialize = function name() {
    var canvas=document.getElementById("monCanvas");
    var ctx =canvas.getContext("2d");
    ctx.fillStyle="#f00";
    //ctx.fillRect(100,100,300,300);
    var my_gradient = ctx.createLinearGradient(250, 250, 500, 0);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.5 ,"red");
    my_gradient.addColorStop(1, "white");
    
    ctx.moveTo(0,0);
    ctx.lineTo(500,500);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = my_gradient;
    ctx.arc(250,250,100,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

}
