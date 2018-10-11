/**
 * The default initialization loads data-src, the background image sets data-bg-src, and initializes again using $lazyload.init();
 * 默认初始化加载data-src,背景图片设置data-bg-src,再次初始化使用$lazyload.init();
 * 
 * 作者(Author)：hceny
 * github:https://github.com/hceny-architect/web-js-tools
 * Blog：http://blog.csdn.net/qq_17076445
 * 
 * Please use this plugin to retain this copyright information.
 * 使用该插件请保留该版权信息.
 **/
var $lazyload = {
	fn: null,
	init: function() {
		this.fn && this.fn();
	}
};
$(function() {

	var defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDBDQzNEODNEQTczMTFFN0IwOUVDMjZCNzk2Q0I3MEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDBDQzNEODREQTczMTFFN0IwOUVDMjZCNzk2Q0I3MEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MENDM0Q4MURBNzMxMUU3QjA5RUMyNkI3OTZDQjcwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MENDM0Q4MkRBNzMxMUU3QjA5RUMyNkI3OTZDQjcwRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlXesxAAAAAGUExURcXFxQAAAIQkT1cAAAACdFJOU/8A5bcwSgAAA8RJREFUeNrsm9uS7CAIRTf//9NTM9WJlyg30XTV4EufSaIuARHRA/rKgsRKrMRKrMRKrNPjW24NXfkCLEzKm1hgy0tYEMsLWFCVw1hQl4NYMJVTWMAJLmymcoJhN5SPC/upPFw4QOXgQgCV6ZNoLG1/IVxYoYr41oFVt2nraJULbvu2CjcCK2BuLXFhX9TyrGQwgo2x1EI78DjNSP+rxAr12e4lADup/FyIEntseI0gqQdzwRMj7OeCK3LZEKQZsEIctosL8/pRmQaPCuZYbOPtm+v955fl0q3lUFJNGi8cVizeNCD3K1A/saAcEGMaEyzRRixYzIBlLNmkN2DNuKAW1qz1NSx6EYttezxPDVi0BYsSy2Bcw2YTS+WpX5uJC1h4DQsHvbzYNoO1cU0Mw7JFEFjyWxYsaVvbY11PEY7FcjERm2J7FYiljeW3Y5E6VUuxWDiCRcFYpNwnGtN+dh26sIR9IIVjjSejSRohOiRVaG06IVD7YQsWTVZj7XJJFCEsLncqsI6qySkINxax20w2AbJMBSkBru93EUvaJy4WjSz082EzlpNqM5bN4Z3CEhKRuvyWMteox+JSkeokpXorNrdtX86UTemuHj7LOvJgqeMDLrxZgJrk5fWhJ/OlH2pyimG91zBeNqOgxlim5nusmEsl8A6wb3et9h4ssWPrsdYRLKYH/gh9O5XxJol/9rhMR3vIth3LufBbr68coSKlZ3audv4wSdVZ0DUCD5btQvdWKNXJvusIejXWlfryHI4HhODmPKc9cA3B+oqSWImVWImVWImVWIn1n7GgbGWYWBx/BPUWo3qNfkfZH7aUP/qUQ5f7rJ/VnDzWY1x/bfw+B33+0Y75yiG11w6qvNLnBboUWOHp66mkVWGVbtrNZSPSm7LIrWDVWaUWCzYs3EICXU0NbujWaazqi+63GlWrw2voBKUSa22gFoiMNbStW36t+q+2oTf5KiMyxWqtrIjgo9yC2992uaR0Gy+7q6bBmTGPdUlqeJeh+kUlr/JSxOr7LVr4G/YMq52Qo5xkNRGLjm+sD7MqNULdbW4wtiVuty911lneLkk681vDAVIv+ZkSn1bJX6175G6n+a3BAoHGATFYgyRxqT1CVWON3Sk1rmWG9VzlINwm7b4my396uLHKeqFVYm3GIE5aELCeSqw9JKvEQaa/zLBu4Uf9bLJ88Je0qiqD2mCV2ACisdQ2cc0YKI1PtDt3j9bpTabdY1F6Vmja7VaK89Gp/kpBxvKJlViJlViJlViJlViJlViJFVh+BBgA9PE/s1lsNbwAAAAASUVORK5CYII=";
	var imageNode = 'img[data-src]',
		bgNode = '[data-bg-src]',
		dataAttr = 'data-src',
		dataBgAttr = 'data-bg-src';
	var lazyload = function() {
		var images = $(imageNode);
		var bgNodes = $(bgNode);
		var imgIndexArray = [];
		var bgIndexArray = [];
		return function(reset) {
			if(reset) {
				images = $(imageNode);
				imgIndexArray = [];
				bgNodes = $(bgNode);
				bgIndexArray = [];
			}
			var seeHeight = window.innerHeight ? window.innerHeight : $(window).height();
			var scrollTop = $(window).scrollTop();
			$.each(images, function(index, obj) {
				if($.inArray(index, imgIndexArray) > -1)
					return true;
				var _this = $(obj);
				if(_this.offset().top < seeHeight + scrollTop) {
					var src = _this.attr('src');
					if(!src || src == defaultImage)
						_this.attr('src', _this.attr(dataAttr));
					imgIndexArray.push(index);
				}
			});
			$.each(bgNodes, function(index, obj) {
				if($.inArray(index, bgIndexArray) > -1)
					return true;
				var _this = $(obj);
				if(_this.offset().top < seeHeight + scrollTop) {
					var src = _this.css('background-image');
					var defImg = defaultImage;
					if(!src || src.indexOf(defImg) > -1 || src == 'none')
						_this.css('background-image', "url(" + _this.attr(dataBgAttr)) + ")";;
					bgIndexArray.push(index);
				}
			});
		}
	}

	var throttle = function(fn, delay, atleast) {
		var timeout = null,
			startTime = new Date();
		return function() {
			var curTime = new Date();
			clearTimeout(timeout);
			if(curTime - startTime >= atleast) {
				fn();
				startTime = curTime;
			} else {
				timeout = setTimeout(fn, delay);
			}
		}
	}
	var loadImages = lazyload();
	$lazyload.fn = function() {
		$.each($(imageNode), function(index, obj) {
			var _this = $(obj);
			if(!_this.attr('src'))
				_this.attr('src', defaultImage);
		});
		$.each($(bgNode), function(index, obj) {
			var _this = $(obj);
			var bgSrc = _this.css('background-image');
			if(!bgSrc || bgSrc == 'none')
				_this.css('background-image', "url(" + defaultImage + ")");
		});
		loadImages(true);
	};
	$lazyload.fn();
	$(window).scroll(throttle(loadImages, 500, 1000));
});