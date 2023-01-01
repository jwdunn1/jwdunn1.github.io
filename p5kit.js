// a minimal implementation of the p5js framework
// hand-coded by jWilliamDunn
function p5(sketch, canvid){

(function (w) {
  var version="1.1.2",
      ctx,set=false,gdoStroke=true,gdoFill=true,
      gFill="#fff",gStroke="#000",gWeight=1,looping=true,
      gtextSize=12,gtextFont='serif',gtextStyle=0,canv;
  w.windowWidth = w.innerWidth,
  w.windowHeight = w.innerHeight,
  w.NORMAL = 0, w.ITALIC = 1, w.BOLD = 2,
  w.ARROW = 'default', w.HAND = 'pointer', w.frameCount=1,
  w.mouseIsPressed=false;

  w.createCanvas = function(width,height){
    var c = document.getElementById(canvid);
    c.setAttribute("width", width);
    c.setAttribute("height", height);
    ctx = c.getContext('2d');
    w.width = ctx.canvas.width;
    w.height = ctx.canvas.height;
    w.mouseX = w.width/2, w.mouseY = w.height/2; // new init
    c.addEventListener("mousemove", handleEvt);
    c.addEventListener("mousedown", handleEvt);
    c.addEventListener("mouseup", handleEvt);
    c.addEventListener("touchstart", handleEvt);
    c.addEventListener("touchend", handleEvt);
    canv = c;
    set = true;
    return c;
  };

  function handleEvt(e){
    if (e.type == "mousedown") {
      var rect = canv.getBoundingClientRect();
      w.mouseX = e.x-rect.left;
      w.mouseY = e.y-rect.top;
      w.mouseIsPressed=true;
      return;
    }
    if (e.type == "touchstart") {
      var rect = canv.getBoundingClientRect();
      w.mouseX = e.touches[0].clientX-rect.left;
      w.mouseY = e.touches[0].clientY-rect.top;
      w.mouseIsPressed=true;
      return;
    }
    if (e.type == "mouseup" || e.type == "touchend") {
      w.mouseIsPressed=false;
      return;
    }
    if (e.type == "mousemove") {
      var rect = canv.getBoundingClientRect();
      w.mouseX = e.x-rect.left;
      w.mouseY = e.y-rect.top;
      if(w.mouseMoved) w.mouseMoved();
    }
  }

  w.scale = function(x,y){
    if(arguments.length==1)y=x;
    ctx.scale(x,y);
  };

  w.background = function(r,g,b){
    if(arguments.length==1)
      ctx.fillStyle = "rgb("+r+","+r+","+r+")";
    if(arguments.length==2) // new: alpha
      ctx.fillStyle = "rgba("+r+","+r+","+r+","+g/255+")";
    if(arguments.length==3)
      ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    ctx.fillRect(0,0,w.width,w.height);
  };

  w.textSize = function(s){
    gtextSize = s;
  };

  w.textStyle = function(s){
    gtextStyle = s;
  };

  w.textFont = function(s){
    gtextFont = s;
  };

  w.text = function(s, x,y){
    ctx.font = gtextSize+"px "+gtextFont;
    if(gtextStyle>0) ctx.font = (gtextStyle==1? "italic " : "bold " )+ctx.font;
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    if(gdoStroke)ctx.strokeText(s, x,y);
    if(gdoFill)ctx.fillText(s, x,y);
  };

  w.fill = function(r,g,b){
    if(arguments.length==1)
      gFill = "rgb("+r+","+r+","+r+")";
    if(arguments.length==3)
      gFill = "rgb("+r+","+g+","+b+")";
    gdoFill = true;
  };

  w.noFill = function(){
    gdoFill = false;
  };

  w.stroke = function(r,g,b){
    if(arguments.length==1)
      gStroke = "rgb("+r+","+r+","+r+")";
    if(arguments.length==3)
      gStroke = "rgb("+r+","+g+","+b+")";
    gdoStroke = true;
  };

  w.strokeWeight = function(w){
    gWeight = w;
    gdoStroke = true;
  };

  w.noStroke = function(){
    gWeight = 0;
    gdoStroke = false;
  };

  w.cursor = function(c){
    _.style.cursor = c;
  };

// begin new
  w.loadImage = function(file){
    let img = new Image();
    img.src = file;
    return img;
  };
  w.image = function(img, x,y){ctx.drawImage(img, x,y);};
  w.clear = function(){ctx.clearRect(0,0, w.width,w.height);};
  w.shearX = function(r){
    ctx.transform(1, 0, Math.tan(r), 1, 0, 0);
  };
  w.random = Math.random;
  w.translate = function(x,y){ctx.translate(x,y);};
  w.rotate = function(r){ctx.rotate(r);};
  w.push = function(){ctx.save();};
  w.pop = function(){ctx.restore();};
  w.ellipse = function(x,y,w,h){
    var offset = (gWeight%2==0)?0:0.5;
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x,y);
    ctx.ellipse(offset,offset, w,h, 0,0,2*Math.PI);
    ctx.restore();
    if(gdoFill)ctx.fill();
    if(gdoStroke)ctx.stroke();
  };
  w.circle = function(x,y,d){w.ellipse(x,y,d/2,d/2);};
  w.loop = function(){looping=true;loop();};
  w.noLoop = function(){looping=false;};
  w.line = function(x1,y1, x2,y2){
    var offset = (gWeight%2==0)?0:0.5;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    if(gdoStroke)ctx.stroke();
  };
// end new

  w.rect = function(x,y,w,h){
    var offset = (gWeight%2==0)?0:0.5;
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.save();
    ctx.beginPath();
    ctx.translate(x,y);
    ctx.rect(offset,offset, w,h);
    ctx.restore();
    if(gdoFill)ctx.fill();
    if(gdoStroke)ctx.stroke();
  };

  w.triangle = function(x1,y1, x2,y2, x3,y3){
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.closePath();
    if(gdoFill)ctx.fill();
    if(gdoStroke)ctx.stroke();
  };

  w.quad = function(x1,y1, x2,y2, x3,y3, x4,y4){ // new
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3,y3);
    ctx.lineTo(x4,y4);
    ctx.closePath();
    if(gdoFill)ctx.fill();
    if(gdoStroke)ctx.stroke();
  };
  w.polygon = function(x1,y1, s,n){ // new
    ctx.fillStyle = gFill;
    ctx.strokeStyle = gStroke;
    ctx.lineWidth = gWeight;
    ctx.beginPath();
    ctx.moveTo (x1+s*Math.cos(0), y1+s*Math.sin(0));        
    for (var i=1; i<=n; i++)
      ctx.lineTo(x1+s*Math.cos(i*2*Math.PI/n), y1+s*Math.sin(i*2*Math.PI/n));
    ctx.closePath();
    if(gdoFill)ctx.fill();
    if(gdoStroke)ctx.stroke();
  };
  if(typeof w === "function")w(w); // !!
  function loop(){ if(!looping)return;
    if(set && w.draw) {ctx.setTransform(1,0,0,1,0,0);w.draw();w.frameCount++;}
    else if(!set && w.setup) {w.setup();if(w.draw===undefined)looping=false;}
    requestAnimationFrame(loop);
  }
  loop();
})(sketch);

}
//create a global sketch instance
new p5(window, "_");