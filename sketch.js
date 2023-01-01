(function() {


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