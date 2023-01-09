(function() {


  let sketch6 = function(p) {

  var img, X={x:0,y:0}, obst=[{x:100,y:325},{x:240,y:60},{x:1200,y:40},{x:722,y:366}, 
                              {x:520,y:360},{x:700,y:125},{x:1050,y:350},{x:910,y:70}];

  function dist(x1,y1, x2,y2) {
    return Math.sqrt((x1 - x2)**2 + (y1 - y2)**2);
  }
  
  p.setup=()=> {
    img = p.loadImage('images/car.png');
    p.createCanvas(1400,420);
  }

  p.draw=()=> {
    p.push();
      let gradient = p.drawingContext.createLinearGradient(0,210, p.width,210);
      gradient.addColorStop(0, 'rgb(46,61,73)');
      gradient.addColorStop(0.5, 'rgb(37,86,106)');
      gradient.addColorStop(1, 'rgb(3,177,226)');
      p.drawingContext.fillStyle = gradient;
      p.rect(0,0, p.width,p.height);
    p.pop();
    
    p.stroke(255,91,0);
    p.strokeWeight(6);

    X.x = 0.01*(p.mouseX - X.x) + X.x; //lerp

    for(let i=0; i<8; i++)
      if(dist(X.x,248, obst[i].x,obst[i].y)<650)
        p.line(X.x,248, obst[i].x,obst[i].y);

    p.image(img, X.x-171/2,248-85/2);
    
    p.fill(237,202,25);
    p.noStroke();
    
    for(let i=0; i<8; i++)
      if(dist(X.x,248, obst[i].x,obst[i].y)<650)
        p.circle(obst[i].x,obst[i].y, 28);
  }

};
new p5(sketch6, "_6_");


let sketch5 = function(p) {

  let particlesArray = [], X={x:0,y:0};

  p.setup=()=> {
    let cnv = p.createCanvas(1400, 420);
    cnv.onmouseover = p.loop;
    X.x=p.width*0.6, X.y=p.height*0.4;
    generateParticles(151);
    p.noStroke();
  };

  p.draw=()=> {
    p.scale(1,1);
    p.background(0,0.1*255);
    particlesArray.forEach((p) => p.rotate());
    if(p.frameCount%300==0)p.noLoop();
  }

  function generateParticles(amount) {
    for (let i = 0; i < amount; i++) {
      let c,r0=p.random(),r1=p.random()*127+128,r2=p.random();
      c = (r0<0.5)?[r1,r1,r1]:[0,r2*255,r2*127+128]
      particlesArray[i] = new Particle(
        1+p.random()*2, // size
        c,             // color
        0.015         // velocity
      );
    }
  }
  function Particle(width, fillColor, velocity) {
    this.w = width;
    this.c = fillColor;
    this.theta = p.random() * 2*Math.PI;
    let rnd = p.random() + 0.3;
    this.v = velocity/rnd;
    this.r = rnd * 150; // radius

    this.rotate =()=> {
      this.theta += this.v;
      p.push();
        p.fill(this.c[0],this.c[1],this.c[2]);
        let rad = this.r + this.r * (Math.sin(this.theta))*0.25; // perspective-ish
        p.translate(X.x+rad*Math.cos(this.theta)*2, X.y+rad*Math.sin(this.theta)); // ellipse 2:1
        p.rotate(this.theta); // rotate the upcoming rectangle to align with the centerpoint
        p.rect(0,0, this.w*(Math.sin(this.theta)+1.5),this.w*2); // 4th arg is y-depth, aligned with the trail
      p.pop();
    };
  }

};
new p5(sketch5, "_5_");


let sketch4 = function(p) {
	let x = 718, y= 367, w=13, h=57, img,
		dx = 15, dy = 25,
		on = [];

	updater=()=> {
		on[10]=1;
    p.loop();
	}
  
	p.setup=()=> {
    img = p.loadImage('images/intel.png');
		let cnv = p.createCanvas(1400, 420);
		for (let i = 0; i < 25; i++) {
			let r = p.random();
			on[i] = (r<0.475)?0:((r>0.95)?2:1);
		}
		on[10]=1;
    cnv.onmouseover = updater;
		p.noStroke();
	}

	p.draw=()=> {
		for (let i = 0; i < 25; i++){
			let r = p.random();
			if (p.frameCount % (15 * (i + 1)) == 0) on[i] = (r<0.475)?0:((r>0.95)?2:1);
		}
		p.background(0);
		p.image(img, 0,0);

		if (p.frameCount%60 < 25) p.fill(165); else p.fill(102);
		p.rect(940,0, 36,235);
		
		p.fill(0);
		p.rect(x,y-dy, 25*dx,h+dy);
		for(let q=0;q<25;q++)
		  {
				if (on[q]==0) p.fill(165); else {if(on[q]==1) p.fill(224); else p.fill(190,0,0);}
				p.rect(x+q*dx, y-((q%2==0)?0:dy), w,h+((q%2==0)?0:dy));
			}

		if(on[10]==0) {
			p.fill(190,0,0);
			p.rect(940,0, 36,235);
			p.noLoop();
		}
	}

};
new p5(sketch4, "_4_");

let sketch1 = function(p) {
	let x = 51, y= 33, w=224, h=59,
		dx = 269, dy = 72,
		on = [];

	updater=()=> {
		on[10]=1;
    p.loop();
	}

	p.setup=()=> {
		let cnv = p.createCanvas(1400, 420);
		for (let i = 0; i < 25; i++) {
			let r = p.random();
			on[i] = (r<0.475)?0:((r>0.95)?2:1);
		}
		on[10]=1;
		cnv.onmouseover = updater;
		//cnv.mouseOver(updater);
		p.background(0);
		p.noStroke();
	}

	p.draw=()=> {
		for (let i = 0; i < 25; i++){
			let r = p.random();
			if (p.frameCount % (15 * (i + 1)) == 0) on[i] = (r<0.475)?0:((r>0.95)?2:1);
		}
		//p.clear();
		p.fill(83);
		p.rect(0, 0, 1400, 420);
		
		for(let q=0;q<5;q++)
		  for(let t=0;t<5;t++){
				if (on[q*5+t]==0) p.fill(116); else {if(on[q*5+t]==1) p.fill(43,135,214); else p.fill(255,98,0);}
				p.rect(x+q*dx, y+t*dy, w,h);
			}

		if(on[10]==0) p.noLoop();
	}

};

let sketch2 = function(p) {
	let x = 386, dx = 115, on = [];

	updater=()=> {
		on[17]=true;
    p.loop();
	}
	p.setup = () => {
		let cnv = p.createCanvas(1400, 420);
		for (let i = 0; i < 17; i++) on[i] = (p.random() < 0.5);
		on[17]=true;
		cnv.onmouseover = updater;
		p.noStroke();
	}

	p.draw = () => {
		for (let i = 0; i < 18; i++)
			if (p.frameCount % (15 * (i + 1)) == 0) on[i] = !on[i];
		p.fill(83);
		p.rect(0, 0, 1400, 420);

		p.push();
		if (on[0]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x, 84, 103);
		if (on[1]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx, 84, 103);
		if (on[2]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 2, 84, 103);
		if (on[3]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 3, 84, 103);
		if (on[4]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 4, 84, 103);
		if (on[5]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 6, 84, 103);
		p.pop();

		p.push();
		p.translate(-3 * dx, 150);
		if (on[6]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x, 84, 103);
		if (on[7]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx, 84, 103);

		if (on[8]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 2, 84, 103);
		if (on[9]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 3, 84, 103);
		if (on[10]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 4, 84, 103);
		if (on[11]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 5, 84, 103);
		p.pop();

		p.push();
		p.translate(3 * dx, 251);
		if (on[12]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x, 84, 103);
		if (on[13]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx, 84, 103);
		if (on[14]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 2, 84, 103);
		if (on[15]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 3, 84, 103);

		if (on[16]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 4, 84, 103);
		if (on[17]) p.fill(43, 135, 214);
		else p.fill(116);
		p.circle(x + dx * 5, 84, 103);
		p.pop();
		if(!on[17]) p.noLoop();
	}
};

new p5(sketch1, "_1_");
new p5(sketch2, "_2_");

})();