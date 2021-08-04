

class Npc{
	constructor(name,pos,csn,point) {
	    this.name = name ;
		this.pos = pos;
		this.dom = document.createElement("div")
		this.dom.className = csn;
		level.appendChild(this.dom);
		this.point = point
		this.flag = true;
	}
	show(){
		if(this.point.equal(new Vec(-1,0))){
			this.dom.style.backgroundImage = "url(./img/player/up.png)"
			
		}else if(this.point.equal(new Vec(1,0))){
			this.dom.style.backgroundImage = "url(./img/player/back.png)"
		
		}else if(this.point.equal(new Vec(0,1))){
			this.dom.style.backgroundImage = "url(./img/player/right.png)"
		}else if(this.point.equal(new Vec(0,-1))){
			this.dom.style.backgroundImage = "url(./img/player/left.png)"
		}
		this.dom.style.left = this.pos.y*32 + "px";
		this.dom.style.top = (this.pos.x*32)-16 + "px";
		map[this.pos.x][this.pos.y].state = false ;
		console.log(this.pos)
		
	}
	query(){
		
			var pos1 = this.pos.getVec() ;
			var pos2 = player.pos ;
			
			 if(
			 
				pos1.getVec().plus(new Vec(-1,0)).equal(pos2) ||
				pos1.getVec().plus(new Vec(0,-1)).equal(pos2) ||
				pos1.getVec().plus(new Vec(1,0)).equal(pos2) ||
				pos1.getVec().plus(new Vec(0,1)).equal(pos2) ||
				pos1.getVec().plus(new Vec(1,1)).equal(pos2) ||
				pos1.getVec().plus(new Vec(1,-1)).equal(pos2) ||
				pos1.getVec().plus(new Vec(-1,1)).equal(pos2) ||
				pos1.getVec().plus(new Vec(-1,-1)).equal(pos2) ){
				 
				this.Dialog();
				
			}else{
				
				this.delDialog();
				
			}
			
	}
	
	
	toforward(){
		if( !this.point.equal(new Vec(-1,0)))
			this.point = new Vec(-1 , 0);
		else if(x > 0 && map[x-1][y].state ){
			this.ply.style.backgroundImage ="url(./img/player/goup.gif)"
			this.pos.plus(this.point);
			this.flag = false;
		}
		this.fl();
	}
	
	toback(){
		if( !this.point.equal(new Vec(1,0)))
			this.point = new Vec(1 , 0);
		else if(x > 0 && map[x+1][y].state ){
			this.ply.style.backgroundImage ="url(./img/player/goup.gif)"
			this.pos.plus(this.point);
			this.flag = false;
		}
		this.fl();
		
	}
	
	toleft(){
		if( !this.point.equal(new Vec(0,-1)))
			this.point = new Vec(0,-1);
		else if(x > 0 && map[x][y-1].state ){
			this.ply.style.backgroundImage ="url(./img/player/goup.gif)"
			this.pos.plus(this.point);
			this.flag = false;
		}
		this.fl();
	}
	
	toright(){
		if( !this.point.equal(new Vec(0,1)))
			this.point = new Vec(0,1);
		else if(x > 0 && map[x][y+1].state ){
			this.ply.style.backgroundImage ="url(./img/player/goup.gif)"
			this.pos.plus(this.point);
			this.flag = false;
		}
			this.fl();
	}
	
	fl(){
		if( !this.flag){
			setTimeout(function(){
				this.flag = true;
			},"200")
		}
	}
}

