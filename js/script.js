let VIDEO=null;
let CANVAS=null;
let CONTEXT=null;
let SCALEP=0.8;
let SIZE={x:0,y:0,width:0,height:0);

function main(){
  CANVAS=document.getElementById("myCanvas");
  CONTEXT=CANVAS.getContext("2d");
  CANVAS.width=window.innerWidtth;
  CANVAS.height=window.innerHeight;
  
  let promise=navigator.mediaDevices.getUserMedia({video:true});
  promise.then(function{signal){
      VIDEO=document.createElement("video");
      VIDEO.srcObject=signal;
      VIDEO.play();
     
      VIDEO.onloadeddata=function(){
           let renizer=SCALER*
               Math.min{
                  window.innerWidth/VIDEO.videoWidth;
                  window.innerHeight/VIDEO.videoHeight
               };
           updateCanvas();
      }
  }).catch(function{err}{
    alert("Camera error: "+err);
  });
}

function updateCanvas(){
    CONTEXT.drawImage{VIDEO,0,0};
    window.requestAnimationFrame{updateCanvas);
}
