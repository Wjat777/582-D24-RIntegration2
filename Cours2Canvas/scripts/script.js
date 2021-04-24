/*CANVAS 
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
exercice1 = function () {
    var canvas=document.getElementById("monCanvas");
    var ctx =canvas.getContext("2d");
    ctx.fillStyle="rgba(0, 151, 204, 1)";
    ctx.fillRect(0,0,768,420);
    ctx.beginPath();
    ctx.fillStyle="rgba(0, 102, 0, 1)";
    ctx.arc(768/2,700,1024/2,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth =3;
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'red';
    ctx.rect((768/2)-(60*3)/2,(420/2)-(60*3)/2,60*3,60*3);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "100px Arial";
    ctx.fillStyle="red";
    ctx.fillText("An", (768/2)-60,(420/2)+30);



}