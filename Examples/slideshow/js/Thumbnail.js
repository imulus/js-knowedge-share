function Thumbnail($this, Gallery){
	
	var Thumbnail = this;
	var fxspeed = 500;

	Thumbnail.init = function(){
		observe();
		return this;
	};
	
	Thumbnail.activate = function(){
		$this.addClass("active");
		return this;
	};
	
	Thumbnail.deactivate = function(){
		$this.removeClass("active");
		return this;
	};
	
	// private
	
	function observe(){

		$this.click(function(){
			var index = $(this).index();
			Gallery.goTo(index);
		});
		
	}
	
	

	
	
}