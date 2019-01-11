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
	init: function (defaultImage) {
		this.fn && this.fn(defaultImage);
	}
};
$(function () {
	var defaultImage = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIACYAMgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APUtK03SovD/APaerm5cPN5SJCQO3v8AQ0AJ53hP/n21X80/xoAPO8J/8+2q/mn+NAB53hP/AJ9tV/NP8aAF83woQSLXVuPdf8aALNlp/h/V4ruPTlvobmKFpVMpGDj6Z9RQB8X/ABn/AOSlax/2x/8ARKUAfY9z/wAk8tP+v4/+gtQBgWVpPe3CwWkTSyt0VaAGXEEttO8NxG0cqHDKwwRQBHQB6L4I1TSLbw+0NzNBDMCxmEhAMnJx9eOMUAY/hBoX1zWWtl2wNazGNfRdy4/SgD4x+M//ACUrWP8Atj/6JSgD7Huf+SeWn/X8f/QWoA67wFon9m6d9qnTF1cAE56qnYf1P/1qAF8beHRqtt9ptVAvohx/00X+79fSgDzTT7C5v71bS2jLTMcEHjb6k+gFAHT614HuLKxWeyla6dBmWPbg/VfX6UAVPAX/AB/6j/14yfzWgD44+M//ACUrWP8Atj/6JSgD7m8I6bHqfhqxSfBihvGmZT/FgEAfmRQB3FABQBDFa28U0k0UMaSyffdVALfU96AJqAMW60a1t7m91G3Xy5ZLaSORV6NnB3fXigD8+/jP/wAlK1j/ALY/+iUoA+jfD/x98MaNaNbR6lFLEW3DfazgjPXolAGp/wANJ+Gf+fy3/wDAe4/+IoAP+Gk/DP8Az+W//gPcf/EUAH/DSfhn/n8t/wDwHuP/AIigA/4aT8M/8/lv/wCA9x/8RQBBe/tG+G7m0lhW/gjMildwtpyRn/gFAHyx8TdVs9a8calqGmTefaTeVsk2sucRIp4YA9QaAP8A/9k=";
	var imageNode = 'img[data-src]',
		bgNode = '[data-bg-src]',
		dataAttr = 'data-src',
		dataBgAttr = 'data-bg-src';
	var lazyload = function () {
		var images = $(imageNode);
		var bgNodes = $(bgNode);
		var imgIndexArray = [];
		var bgIndexArray = [];
		return function (reset) {
			if (reset) {
				images = $(imageNode);
				imgIndexArray = [];
				bgNodes = $(bgNode);
				bgIndexArray = [];
			}
			var seeHeight = window.innerHeight ? window.innerHeight : $(window).height();
			var scrollTop = $(window).scrollTop();
			$.each(images, function (index, obj) {
				if ($.inArray(index, imgIndexArray) > -1)
					return true;
				var _this = $(obj);
				if (_this.offset().top < seeHeight + scrollTop) {
					var src = _this.attr('src');
					if (!src || src == defaultImage)
						_this.attr('src', _this.attr(dataAttr));
					imgIndexArray.push(index);
				}
			});
			$.each(bgNodes, function (index, obj) {
				if ($.inArray(index, bgIndexArray) > -1)
					return true;
				var _this = $(obj);
				if (_this.offset().top < seeHeight + scrollTop) {
					var src = _this.css('background-image');
					if (!src || src.indexOf(defaultImage) > -1 || src == 'none')
						_this.css('background-image', "url(" + _this.attr(dataBgAttr)) + ")";;
					bgIndexArray.push(index);
				}
			});
		}
	}

	var throttle = function (fn, delay, atleast) {
		var timeout = null,
			startTime = new Date();
		return function () {
			var curTime = new Date();
			clearTimeout(timeout);
			if (curTime - startTime >= atleast) {
				fn(defaultImage);
				startTime = curTime;
			} else {
				timeout = setTimeout(fn, delay);
			}
		}
	}
	var loadImages = lazyload();
	$lazyload.fn = function (outImg) {
		$.each($(imageNode), function (index, obj) {
			var _this = $(obj);
			if (!_this.attr('src'))
				_this.attr('src', outImg && defaultImage);
		});
		$.each($(bgNode), function (index, obj) {
			var _this = $(obj);
			var bgSrc = _this.css('background-image');
			if (!bgSrc || bgSrc == 'none')
				_this.css('background-image', "url(" + outImg && defaultImage + ")");
		});
		loadImages(true);
	};
	$lazyload.fn(defaultImage);
	$(window).scroll(throttle(loadImages, 500, 1000));
});