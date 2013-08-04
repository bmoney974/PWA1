/**
 * Created by:  Bobby Newland 8-3-13
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){
   var canvas = document.createElement("canvas");     //draw canvas
    canvas.width = 400;
    canvas.height =300;
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var chartData = [85,95,75,100];
    var maxBarHeight = 200;
    var img =  new Image();
    img.src = "images/bg.jpg";
    img.addEventListener("load",function(){
     ctx.drawImage(img,0,0,400,300)
        drawBars();
    },false);

    var drawBars = function(){
      ctx.font ="14px Georgia";
        for(var i = 0,maxdata = chartData.length; i<maxdata; i++){
         ctx.beginPath();
         ctx.fillStyle ="rgba(100,200,200,0.75)";
            var height = maxBarHeight*chartData[i]/100;
            ctx.rect(i*80+90,270-height,50,height);
            ctx.fill();
            ctx.fillStyle ="rgb(255,255,255)";
            ctx.fillText(chartData[i],i*85+100,50);
            drawChartText();

        }  // end for loop

    }// end draw bars function

   var  drawChartText = function(){
     ctx.font="20px Georgia";
       ctx.fillStyle = "rgb(255,255,255)";
       ctx.fillText("TEST GRADES",30,30);
      var xAxisData =["Quiz 1","Quiz 2","Quiz 3","Quiz 4"];
       ctx.font="14px Georgia";
       ctx.fillStyle="rgb(0,0,0)";
       for(var i=0,max=xAxisData.length;i<max;i++){
           ctx.fillText(xAxisData[i],i*80+95,290);

       }  // end for loop


    } // end drawChartText function

  console.log(chartData);
})();