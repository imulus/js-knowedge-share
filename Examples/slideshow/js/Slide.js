function Slide($this, Gallery){

	var Slide = this;
	var fxspeed = 400;

	Slide.init = function(){
		observe();
		return this;
	};

	Slide.activate = function(){
		$this.fadeIn(fxspeed);
		return this;
	};
	
	Slide.deactivate = function(){
		$this.fadeOut(fxspeed);
		return this;
	};
	
	// private

	function observe(){
		
		$this.click( function(){
			Gallery.next();
		});
		
	}
	

	
	
}