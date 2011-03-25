function Gallery(config){
	
	var Gallery = this;
	var Slides = [];
	var Thumbnails = [];
	
	Gallery.active = 0;
	
	Gallery.init = function(){
		build();
		activate(0);
		return this;
	};

	Gallery.goTo = function(index){
		activate(index);
		return this;
	};
	
	Gallery.next = function(){
		/* If we're on the last slide, go to the first */
		if( Gallery.active == Slides.length - 1 ){
			activate(0);
		}
		else {
			activate(Gallery.active + 1);
		}
		return this;
	};
	

	// private 
	
	function build(){
		
		$(config.slideElements).each(function(){
			Slides.push( new Slide( $(this), Gallery).init() );
		});

		$(config.thumbElements).each(function(){
			Thumbnails.push( new Thumbnail( $(this), Gallery).init() );
		});
	}
	
	function activate(index){
		Slides[Gallery.active].deactivate();
		Slides[index].activate();
		Thumbnails[Gallery.active].deactivate();
		Thumbnails[index].activate();		
		Gallery.active = index;
		return index;
	}
		
	
}