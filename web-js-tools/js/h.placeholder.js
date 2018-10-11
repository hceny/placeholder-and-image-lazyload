/**
 * 作者(Author)：hceny
 * github:https://github.com/hceny-architect/web-js-tools
 * Blog：http://blog.csdn.net/qq_17076445
 * 
 * Please use this plugin to retain this copyright information.
 * 使用该插件请保留该版权信息.
 **/
var $placeholder = {
	getStyle: function(ele) {
		var style = null;
		if(window.getComputedStyle)
			style = window.getComputedStyle(ele, null);
		else
			style = ele.currentStyle;
		return style;
	},
	extendFunction: function() {
		if(Function.bindNode)
			return;
		Function.prototype.bindNode = function(oNode) {
			var foo = this,
				iNodeItem;
			if(window.__bindNodes == null)
				__bindNodes = [];
			__bindNodes.push(oNode);
			iNodeItem = __bindNodes.length - 1;
			oNode = null;
			return function(e) {
				foo.call(__bindNodes[iNodeItem], e || event)
			}
		}
	},
	setStyleEvent: function(nodes, changeColor) {
		for(var i = 0; i < nodes.length; i++) {
			var hint = nodes[i].getAttribute('placeholder');
			if(!hint)
				continue;
			var tagName = nodes[i].tagName;
			var isTextarea = tagName.toUpperCase() == 'TEXTAREA';
			var nodeStyle = this.getStyle(nodes[i]);
			var nodeId = nodes[i].getAttribute('id');
			var color = nodeStyle.color;
			var textAlign = nodeStyle.textAlign;
			var fontSize = parseFloat(nodeStyle.fontSize);
			var width = parseFloat(nodes[i].offsetWidth);
			var height = parseFloat(nodes[i].offsetHeight);
			var top = nodes[i].offsetTop;
			var left = nodes[i].offsetLeft;
			var paddingTop = parseFloat(nodeStyle.paddingTop);
			var paddingLeft = parseFloat(nodeStyle.paddingLeft);
			var borderTop = parseFloat(nodeStyle.borderTopWidth);
			var borderLeft = parseFloat(nodeStyle.borderLeftWidth);

			hint = hint ? hint : '';
			fontSize = fontSize ? fontSize : 13;
			paddingTop = paddingTop ? paddingTop : 0;
			paddingLeft = paddingLeft ? paddingLeft : 0;
			borderTop = borderTop ? borderTop : 0;
			borderLeft = borderLeft ? borderLeft : 0;
			color = color && changeColor ? color : '#ccc';

			if(!nodeId) {
				nodeId = tagName + '-placeholder-' + i;
				nodes[i].setAttribute('id', nodeId);
			}

			var label = document.createElement('label');
			label.setAttribute('id', 'label_' + nodeId);
			label.setAttribute('for', nodeId);
			label.innerHTML = hint;
			label.style.position = 'absolute';
			label.style.display = 'inline-block';
			label.style.cursor = 'text';
			label.style.overflow = 'hidden';
			label.style.whiteSpace = isTextarea ? 'normal' : 'nowrap';
			label.style.color = color;
			label.style.textAlign = textAlign;
			label.style.fontSize = fontSize + 'px';
			label.style.top = (top + (isTextarea ? (paddingTop + borderTop) : ((height - fontSize) / 2))) + 'px';
			label.style.left = (left + paddingLeft + borderLeft) + 'px';
			label.style.width = (width - paddingLeft * 2 - borderLeft * 2) + 'px';
			nodes[i].parentNode.insertBefore(label, nodes[i]);
			nodes[i].removeAttribute('placeholder');
			this.extendFunction();
			var _nodeChange = function() {
				if(this.value == '')
					document.getElementById('label_' + this.getAttribute('id')).style.display = 'inline-block';
				else
					document.getElementById('label_' + this.getAttribute('id')).style.display = 'none';
			}
			if(typeof document.addEventListener != "undefined") {
				nodes[i].addEventListener("input", _nodeChange, true);
			} else {
				label.attachEvent("onclick", function() {
					this.focus();
				}.bindNode(nodes[i]));
				nodes[i].attachEvent("onpropertychange", _nodeChange.bindNode(nodes[i]));
			}
		}
	},
	init: function(isAll, changeColor) {
		var isObj = typeof(isAll) == 'object';
		isAll = isObj ? isAll.all : isAll;
		changeColor = isObj ? isObj.color : changeColor;
		changeColor = typeof(changeColor) == 'undefined' ? true : changeColor;
		if(!isAll && 'placeholder' in document.createElement('input'))
			return;
		this.setStyleEvent(document.getElementsByTagName('input'), changeColor);
		this.setStyleEvent(document.getElementsByTagName('textarea'), changeColor);
	}
};