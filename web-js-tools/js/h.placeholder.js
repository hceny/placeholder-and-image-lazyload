/**
 * 作者(Author)：hceny
 * github:https://github.com/hceny-architect/web-js-tools
 * Blog：http://blog.csdn.net/qq_17076445
 * 
 * Please use this plugin to retain this copyright information.
 * 使用该插件请保留该版权信息.
 **/
var $placeholder = {
	isChangeColor: false,
	labelArray: [],
	getStyle: function (ele) {
		var style = null;
		if (window.getComputedStyle)
			style = window.getComputedStyle(ele, null);
		else
			style = ele.currentStyle;
		return style;
	},
	extendFunction: function () {
		if (Function.bindNode)
			return;
		Function.prototype.bindNode = function (oNode) {
			var foo = this,
				iNodeItem;
			if (window.__bindNodes == null)
				__bindNodes = [];
			__bindNodes.push(oNode);
			iNodeItem = __bindNodes.length - 1;
			oNode = null;
			return function (e) {
				foo.call(__bindNodes[iNodeItem], e || event)
			}
		}
	},
	setSingleStyle: function (node, label, hint) {
		var nodeStyle = this.getStyle(node);
		var isTextarea = node.tagName.toLowerCase() == 'textarea';
		var color = nodeStyle.color;
		var textAlign = nodeStyle.textAlign;
		var fontSize = parseFloat(nodeStyle.fontSize);
		var width = parseFloat(node.offsetWidth);
		var height = parseFloat(node.offsetHeight);
		var top = node.offsetTop;
		var left = node.offsetLeft;
		var paddingTop = parseFloat(nodeStyle.paddingTop);
		var paddingLeft = parseFloat(nodeStyle.paddingLeft);
		var borderTop = parseFloat(nodeStyle.borderTopWidth);
		var borderLeft = parseFloat(nodeStyle.borderLeftWidth);
		var display = nodeStyle.display;

		fontSize = fontSize ? fontSize : 13;
		paddingTop = paddingTop ? paddingTop : 0;
		paddingLeft = paddingLeft ? paddingLeft : 0;
		borderTop = borderTop ? borderTop : 0;
		borderLeft = borderLeft ? borderLeft : 0;
		color = color && this.isChangeColor ? color : '#ccc';
		display = node.value != '' ? 'none' : display;

		label.innerHTML = hint ? hint : label.innerHTML;
		label.style.position = 'absolute';
		label.style.display = display == 'none' ? 'none' : 'inline-block';
		label.style.cursor = 'text';
		label.style.overflow = 'hidden';
		label.style.whiteSpace = isTextarea ? 'normal' : 'nowrap';
		label.style.color = color;
		label.style.textAlign = textAlign;
		label.style.fontSize = fontSize + 'px';
		label.style.top = (top + (isTextarea ? (paddingTop + borderTop) : ((height - fontSize) / 2))) + 'px';
		label.style.left = (left + paddingLeft + borderLeft) + 'px';
		width = (width - paddingLeft * 2 - borderLeft * 2);
		label.style.width = width < 0 ? 0 : width + 'px';
	},
	setStyleEvent: function (nodes) {
		for (var i = 0; i < nodes.length; i++) {
			var hint = nodes[i].getAttribute('placeholder');
			if (!hint)
				continue;
			var tagName = nodes[i].tagName.toLowerCase();
			var nodeId = nodes[i].getAttribute('id');
			if (!nodeId) {
				nodeId = tagName + '-placeholder-' + i;
				nodes[i].setAttribute('id', nodeId);
			}

			var label = document.createElement('label');
			label.setAttribute('id', 'label_' + nodeId);
			label.setAttribute('for', nodeId);
			this.setSingleStyle(nodes[i], label, hint);
			nodes[i].parentNode.insertBefore(label, nodes[i]);
			nodes[i].removeAttribute('placeholder');
			this.labelArray.push({
				"node": nodes[i],
				"label": label
			});
			this.extendFunction();
			var _this = this;
			var _nodeChange = function () {
				if (this.value == '' && _this.getStyle(this).display != 'none')
					document.getElementById('label_' + this.getAttribute('id')).style.display = 'inline-block';
				else
					document.getElementById('label_' + this.getAttribute('id')).style.display = 'none';
			}
			if (typeof document.addEventListener != "undefined") {
				nodes[i].addEventListener("input", _nodeChange, true);
			} else {
				label.attachEvent("onclick", function () {
					this.focus();
				}.bindNode(nodes[i]));
				nodes[i].attachEvent("onpropertychange", _nodeChange.bindNode(nodes[i]));
			}
		}
	},
	refresh: function () {
		for (var i = 0; i < this.labelArray.length; i++) {
			this.setSingleStyle(this.labelArray[i].node, this.labelArray[i].label);
		}
	},
	init: function (isAll, isChangeColor) {
		var isObj = typeof (isAll) == 'object';
		isAll = isObj ? isAll.all : isAll;
		isChangeColor = isObj ? isObj.color : isChangeColor;
		isChangeColor = typeof (isChangeColor) == 'undefined' ? false : isChangeColor;
		if (!isAll && 'placeholder' in document.createElement('input'))
			return;
		this.isChangeColor = isChangeColor;
		this.setStyleEvent(document.getElementsByTagName('input'));
		this.setStyleEvent(document.getElementsByTagName('textarea'));
	}
};