define(['jquery','scrollTo'],function($, scrollto){
	function BackTop(el,opts){
		this.opts= $.extend({}, BackTop.DEFAULTS, opts)
		this.$el= $(el);
		this.scroll= new scrollto.ScrollTo({
			dest: this.opts.dest,
			speed: this.opts.speed
		});
		
		if(this.opts.mode == 'move'){
			this.$el.on('click', $.proxy(this._move, this));
		} else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	}
	BackTop.DEFAULTS = {
		mode: 'move',
		dest: $(window).height(),
		speed: 800
	}
	
	BackTop.prototype._move = function(){
		this.scroll.move();
	};
	BackTop.prototype._go = function(){
		this.scroll.go();
	};
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		if($(window).scrollTop()>this.opts.dest){
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
	
	$.fn.extend({
		backTop: function(opts){
			return this.each(function (){
				new BackTop(this, opts);
			});
		}
	});
	
	return {
		BackTop: BackTop	
	};
});