/*! HTML5 Shiv vpre3.6 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
;(function(o,s){var g=o.html5||{};var j=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var d=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;var x;var k="_html5shiv";var c=0;var u={};var h;(function(){var A=s.createElement("a");A.innerHTML="<xyz></xyz>";x=("hidden" in A);h=A.childNodes.length==1||(function(){try{(s.createElement)("a")}catch(B){return true}var C=s.createDocumentFragment();return(typeof C.cloneNode=="undefined"||typeof C.createDocumentFragment=="undefined"||typeof C.createElement=="undefined")}())}());function i(A,C){var D=A.createElement("p"),B=A.getElementsByTagName("head")[0]||A.documentElement;D.innerHTML="x<style>"+C+"</style>";return B.insertBefore(D.lastChild,B.firstChild)}function q(){var A=n.elements;return typeof A=="string"?A.split(" "):A}function w(A){var B=u[A[k]];if(!B){B={};c++;A[k]=c;u[c]=B}return B}function t(D,A,C){if(!A){A=s}if(h){return A.createElement(D)}C=C||w(A);var B;if(C.cache[D]){B=C.cache[D].cloneNode()}else{if(d.test(D)){B=(C.cache[D]=C.createElem(D)).cloneNode()}else{B=C.createElem(D)}}return B.canHaveChildren&&!j.test(D)?C.frag.appendChild(B):B}function y(C,E){if(!C){C=s}if(h){return C.createDocumentFragment()}E=E||w(C);var F=E.frag.cloneNode(),D=0,B=q(),A=B.length;for(;D<A;D++){F.createElement(B[D])}return F}function z(A,B){if(!B.cache){B.cache={};B.createElem=A.createElement;B.createFrag=A.createDocumentFragment;B.frag=B.createFrag()}A.createElement=function(C){if(!n.shivMethods){return B.createElem(C)}return t(C)};A.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+q().join().replace(/\w+/g,function(C){B.createElem(C);B.frag.createElement(C);return'c("'+C+'")'})+");return n}")(n,B.frag)}function e(A){if(!A){A=s}var B=w(A);if(n.shivCSS&&!x&&!B.hasCSS){B.hasCSS=!!i(A,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")}if(!h){z(A,B)}return A}var n={elements:g.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(g.shivCSS===false),supportsUnknownElements:h,shivMethods:!(g.shivMethods===false),type:"default",shivDocument:e,createElement:t,createDocumentFragment:y};o.html5=n;e(s);var b=/^$|\b(?:all|print)\b/;var l="html5shiv";var r=!h&&(function(){var A=s.documentElement;return !(typeof s.namespaces=="undefined"||typeof s.parentWindow=="undefined"||typeof A.applyElement=="undefined"||typeof A.removeNode=="undefined"||typeof o.attachEvent=="undefined")}());function f(E){var F,C=E.getElementsByTagName("*"),D=C.length,B=RegExp("^(?:"+q().join("|")+")$","i"),A=[];while(D--){F=C[D];if(B.test(F.nodeName)){A.push(F.applyElement(v(F)))}}return A}function v(C){var D,A=C.attributes,B=A.length,E=C.ownerDocument.createElement(l+":"+C.nodeName);while(B--){D=A[B];D.specified&&E.setAttribute(D.nodeName,D.nodeValue)}E.style.cssText=C.style.cssText;return E}function a(D){var F,E=D.split("{"),B=E.length,A=RegExp("(^|[\\s,>+~])("+q().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),C="$1"+l+"\\:$2";while(B--){F=E[B]=E[B].split("}");F[F.length-1]=F[F.length-1].replace(A,C);E[B]=F.join("}")}return E.join("{")}function p(B){var A=B.length;while(A--){B[A].removeNode()}}function m(A){var E,C,B=A.namespaces,D=A.parentWindow;if(!r||A.printShived){return A}if(typeof B[l]=="undefined"){B.add(l)}D.attachEvent("onbeforeprint",function(){var F,J,H,L=A.styleSheets,I=[],G=L.length,K=Array(G);while(G--){K[G]=L[G]}while((H=K.pop())){if(!H.disabled&&b.test(H.media)){try{F=H.imports;J=F.length}catch(M){J=0}for(G=0;G<J;G++){K.push(F[G])}try{I.push(H.cssText)}catch(M){}}}I=a(I.reverse().join(""));C=f(A);E=i(A,I)});D.attachEvent("onafterprint",function(){p(C);E.removeNode(true)});A.printShived=true;return A}n.type+=" print";n.shivPrint=m;m(s)}(this,document));

// markup layout fix
function initBlocksHeight(){
	setSameHeight({
		holder: '.same-height',
		elements: '.logo-area',
		flexible: true,
		multiLine: true
	});
}

// set same height for blocks
function setSameHeight(opt) {
	// default options
	var options = {
		holder: null,
		skipClass: 'same-height-ignore',
		leftEdgeClass: 'same-height-left',
		rightEdgeClass: 'same-height-right',
		elements: '>*',
		flexible: false,
		multiLine: false,
		useMinHeight: false
	}
	for(var p in opt) {
		if(opt.hasOwnProperty(p)) {
			options[p] = opt[p];
		}
	}
	
	// init script
	if(options.holder) {
		var holders = SameHeight.queryElementsBySelector(options.holder);
		for(var i = 0; i < holders.length; i++) {
			(function(i){
				var curHolder = holders[i], curElements = [], resizeTimer;
				var tmpElements = SameHeight.queryElementsBySelector(options.elements, curHolder);
				
				// get resize elements
				for(var i = 0; i < tmpElements.length; i++) {
					if(!SameHeight.hasClass(tmpElements[i], options.skipClass)) {
						curElements.push(tmpElements[i]);
					}
				}
				if(!curElements.length) return;
				
				// resize handler
				function doResize() {
					for(var i = 0; i < curElements.length; i++) {
						curElements[i].style[options.useMinHeight && SameHeight.supportMinHeight ? 'minHeight' : 'height'] = '';
					}
					
					if(options.multiLine) {
						// resize elements row by row
						SameHeight.resizeElementsByRows(curElements, options);
					} else {
						// resize elements by holder
						SameHeight.setSize(curElements, curHolder, options);
					}
				}
				doResize();
				
				// handle flexible layout / font resize
				function flexibleResizeHandler() {
					clearTimeout(resizeTimer);
					resizeTimer = setTimeout(function(){
						doResize();
						setTimeout(doResize, 100);
					},1)
				}
				if(options.flexible) {
					addEvent(window, 'resize', flexibleResizeHandler);
					addEvent(window, 'orientationchange', flexibleResizeHandler);
					FontResize.onChange(flexibleResizeHandler);
				}
				// handle complete page load including images and fonts
				addEvent(window, 'load', flexibleResizeHandler);
			}(i));
		}
	}
	
	// event handler helper functions
	function addEvent(object, event, handler) {
		if(object.addEventListener) object.addEventListener(event, handler, false);
		else if(object.attachEvent) object.attachEvent('on'+event, handler);
	}
}

/*
 * SameHeight helper module
 */
SameHeight = {
	supportMinHeight: typeof document.documentElement.style.maxHeight !== 'undefined', // detect css min-height support
	setSize: function(boxes, parent, options) {
		var holderHeight = typeof parent === 'number' ? parent : this.getHeight(parent);
		
		for(var i = 0; i < boxes.length; i++) {
			var box = boxes[i];
			var depthDiffHeight = 0;
			box.className = box.className.replace(options.leftEdgeClass, '').replace(options.rightEdgeClass, '');
			
			if(typeof parent != 'number') {
				var tmpParent = box.parentNode;
				while(tmpParent != parent) {
					depthDiffHeight += this.getOuterHeight(tmpParent) - this.getHeight(tmpParent);
					tmpParent = tmpParent.parentNode;
				}
			}
			var calcHeight = holderHeight - depthDiffHeight - (this.getOuterHeight(box) - this.getHeight(box));
			if(calcHeight > 0) {
				box.style[options.useMinHeight && this.supportMinHeight ? 'minHeight' : 'height'] = calcHeight + 'px'
			}
		}
		
		boxes[0].className += ' ' + options.leftEdgeClass;
		boxes[boxes.length - 1].className += ' ' + options.rightEdgeClass;
	},
	getOffset: function(obj) {
		if (obj.getBoundingClientRect) {
			var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
			var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
			return {
				top:Math.round(obj.getBoundingClientRect().top + scrollTop - clientTop),
				left:Math.round(obj.getBoundingClientRect().left + scrollLeft - clientLeft)
			}
		} else {
			var posLeft = 0, posTop = 0;
			while (obj.offsetParent) {posLeft += obj.offsetLeft; posTop += obj.offsetTop; obj = obj.offsetParent;}
			return {top:posTop,left:posLeft};
		}
	},
	getStyle: function(el, prop) {
		if (document.defaultView && document.defaultView.getComputedStyle) {
			return document.defaultView.getComputedStyle(el, null)[prop];
		} else if (el.currentStyle) {
			return el.currentStyle[prop];
		} else {
			return el.style[prop];
		}
	},
	getStylesTotal: function(obj) {
		var sum = 0;
		for(var i = 1; i < arguments.length; i++) {
			var val = parseFloat(this.getStyle(obj, arguments[i]));
			if(!isNaN(val)) {
				sum += val;
			}
		}
		return sum;
	},
	getHeight: function(obj) {
		return obj.offsetHeight - this.getStylesTotal(obj, 'borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom');
	},
	getOuterHeight: function(obj) {
		return obj.offsetHeight;
	},
	resizeElementsByRows: function(boxes, options) {
		var currentRow = [], maxHeight, firstOffset = this.getOffset(boxes[0]).top;
		for(var i = 0; i < boxes.length; i++) {
			if(this.getOffset(boxes[i]).top === firstOffset) {
				currentRow.push(boxes[i]);
			} else {
				maxHeight = this.getMaxHeight(currentRow);
				this.setSize(currentRow, maxHeight, options);
				firstOffset = this.getOffset(boxes[i]).top;
				currentRow = [boxes[i]];
			}
		}
		if(currentRow.length) {
			maxHeight = this.getMaxHeight(currentRow);
			this.setSize(currentRow, maxHeight, options);
		}
	},
	getMaxHeight: function(boxes) {
		var maxHeight = 0;
		for(var i = 0; i < boxes.length; i++) {
			maxHeight = Math.max(maxHeight, this.getOuterHeight(boxes[i]));
		}
		return maxHeight;
	},
	hasClass: function(obj,cname) {
		return (obj.className ? obj.className.match(new RegExp('(\\s|^)'+cname+'(\\s|$)')) : false);
	},
	trim: function (str) {
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	queryElementsBySelector: function(selector, scope) {
		var searchScope = scope || document;
		if(selector === '>*') return scope.children;
		if(document.querySelectorAll) {
			return searchScope.querySelectorAll(selector);
		} else {
			selector = this.trim(selector);
			if(selector.indexOf('#') === 0) {
				return [searchScope.getElementById(selector.substr(1))];
			} else if(selector.indexOf('.') != -1) {
				selector = selector.split('.');
				var tagName = selector[0], className = selector[1], collection = [];
				var elements = searchScope.getElementsByTagName(tagName || '*');
				for(var i = 0; i < elements.length; i++) {
					if(this.hasClass(elements[i], className)) {
						collection.push(elements[i]);
					}
				}
				return collection;
			} else {
				return searchScope.getElementsByTagName(selector);
			}
		}
	}
}

/*
 * FontResize Event
 */
FontResize = (function(window,document){
	var randomID = 'font-resize-frame-' + Math.floor(Math.random() * 1000);
	var resizeFrame = document.createElement('iframe');
	resizeFrame.id = randomID; resizeFrame.className = 'font-resize-helper';
	resizeFrame.style.cssText = 'position:absolute;width:100em;height:10px;top:-9999px;left:-9999px;border-width:0';
	
	// wait for page load
	function onPageReady() {
		document.body.appendChild(resizeFrame);
		
		// use native IE resize event if possible
		if (/MSIE (6|7|8)/.test(navigator.userAgent)) {
			resizeFrame.onresize = function() {
				window.FontResize.trigger(resizeFrame.offsetWidth / 100);
			}
		}
		// use script inside the iframe to detect resize for other browsers
		else {
			var doc = resizeFrame.contentWindow.document;
			doc.open();
			doc.write('<scri' + 'pt>window.onload = function(){var em = parent.document.getElementById("' + randomID + '");window.onresize = function(){if(parent.FontResize){parent.FontResize.trigger(em.offsetWidth / 100);}}};</scri' + 'pt>');
			doc.close();
		}
		
	}
	if(window.addEventListener) window.addEventListener('load', onPageReady, false);
	else if(window.attachEvent) window.attachEvent('onload', onPageReady);
	
	// public interface
	var callbacks = [];
	return {
		onChange: function(f) {
			if(typeof f === 'function') {
				callbacks.push(f);
			}
		},
		trigger: function(em) {
			for(var i = 0; i < callbacks.length; i++) {
				callbacks[i](em);
			}
		}
	}
}(this, document));
 
if (window.addEventListener) window.addEventListener("load", initBlocksHeight, false);
else if (window.attachEvent) window.attachEvent("onload", initBlocksHeight);




// jQuery smooth scroll https://github.com/kswedberg/jquery-smooth-scroll

(function($) {

var version = '@VERSION',
    defaults = {
      exclude: [],
      excludeWithin:[],
      offset: 0,
      direction: 'top', // one of 'top' or 'left'
      scrollElement: null, // jQuery set of elements you wish to scroll (for $.smoothScroll).
                          //  if null (default), $('html, body').firstScrollable() is used.
      scrollTarget: null, // only use if you want to override default behavior
      beforeScroll: function() {},  // fn(opts) function to be called before scrolling occurs. "this" is the element(s) being scrolled
      afterScroll: function() {},   // fn(opts) function to be called after scrolling occurs. "this" is the triggering element
      easing: 'swing',
      speed: 400,
      autoCoefficent: 2 // coefficient for "auto" speed
    },

    getScrollable = function(opts) {
      var scrollable = [],
          scrolled = false,
          dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

      this.each(function() {

        if (this == document || this == window) { return; }
        var el = $(this);
        if ( el[dir]() > 0 ) {
          scrollable.push(this);
        } else {
          // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
          el[dir](1);
          scrolled = el[dir]() > 0;
          if ( scrolled ) {
            scrollable.push(this);
          }
          // then put it back, of course
          el[dir](0);
        }
      });

      // If no scrollable elements, fall back to <body>,
      // if it's in the jQuery collection
      // (doing this because Safari sets scrollTop async,
      // so can't set it to 1 and immediately get the value.)
      if (!scrollable.length) {
        this.each(function(index) {
          if (this.nodeName === 'BODY') {
            scrollable = [this];
          }
        });
      }

      // Use the first scrollable element if we're calling firstScrollable()
      if ( opts.el === 'first' && scrollable.length > 1 ) {
        scrollable = [ scrollable[0] ];
      }

      return scrollable;
    },
    isTouch = 'ontouchend' in document;

$.fn.extend({
  scrollable: function(dir) {
    var scrl = getScrollable.call(this, {dir: dir});
    return this.pushStack(scrl);
  },
  firstScrollable: function(dir) {
    var scrl = getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  },

  smoothScroll: function(options) {
    options = options || {};
    var opts = $.extend({}, $.fn.smoothScroll.defaults, options),
        locationPath = $.smoothScroll.filterPath(location.pathname);

    this
    .unbind('click.smoothscroll')
    .bind('click.smoothscroll', function(event) {
      var link = this,
          $link = $(this),
          exclude = opts.exclude,
          excludeWithin = opts.excludeWithin,
          elCounter = 0, ewlCounter = 0,
          include = true,
          clickOpts = {},
          hostMatch = ((location.hostname === link.hostname) || !link.hostname),
          pathMatch = opts.scrollTarget || ( $.smoothScroll.filterPath(link.pathname) || locationPath ) === locationPath,
          thisHash = escapeSelector(link.hash);

      if ( !opts.scrollTarget && (!hostMatch || !pathMatch || !thisHash) ) {
        include = false;
      } else {
        while (include && elCounter < exclude.length) {
          if ($link.is(escapeSelector(exclude[elCounter++]))) {
            include = false;
          }
        }
        while ( include && ewlCounter < excludeWithin.length ) {
          if ($link.closest(excludeWithin[ewlCounter++]).length) {
            include = false;
          }
        }
      }

      if ( include ) {
        event.preventDefault();

        $.extend( clickOpts, opts, {
          scrollTarget: opts.scrollTarget || thisHash,
          link: link
        });

        $.smoothScroll( clickOpts );
      }
    });

    return this;
  }
});

$.smoothScroll = function(options, px) {
  var opts, $scroller, scrollTargetOffset, speed,
      scrollerOffset = 0,
      offPos = 'offset',
      scrollDir = 'scrollTop',
      aniProps = {},
      aniOpts = {},
      scrollprops = [];

  if ( typeof options === 'number') {
    opts = $.fn.smoothScroll.defaults;
    scrollTargetOffset = options;
  } else {
    opts = $.extend({}, $.fn.smoothScroll.defaults, options || {});
    if (opts.scrollElement) {
      offPos = 'position';
      if (opts.scrollElement.css('position') == 'static') {
        opts.scrollElement.css('position', 'relative');
      }
    }

    scrollTargetOffset = px ||
                        ( $(opts.scrollTarget)[offPos]() &&
                        $(opts.scrollTarget)[offPos]()[opts.direction] ) ||
                        0;
  }

  opts = $.extend({link: null}, opts);
  scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

  if ( opts.scrollElement ) {
    $scroller = opts.scrollElement;
    scrollerOffset = $scroller[scrollDir]();
  } else {
    $scroller = $('html, body').firstScrollable();
  }

  aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;

  opts.beforeScroll.call($scroller, opts);

  speed = opts.speed;

  // automatically calculate the speed of the scroll based on distance / coefficient
  if (speed === 'auto') {

    // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
    speed = aniProps[scrollDir] || $scroller.scrollTop();

    // divide the speed by the coefficient
    speed = speed / opts.autoCoefficent;
  }

  aniOpts = {
    duration: speed,
    easing: opts.easing,
    complete: function() {
      opts.afterScroll.call(opts.link, opts);
    }
  };

  if (opts.step) {
    aniOpts.step = opts.step;
  }

  if ($scroller.length) {
    $scroller.stop().animate(aniProps, aniOpts);
  } else {
    opts.afterScroll.call(opts.link, opts);
  }
};

$.smoothScroll.version = version;
$.smoothScroll.filterPath = function(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
};

// default options
$.fn.smoothScroll.defaults = defaults;

function escapeSelector (str) {
  return str.replace(/(:|\.)/g,'\\$1');
}

})(jQuery);



// custom

$(document).ready(function() {

  // smooth scroll config
  $('a').smoothScroll({offset:-250});
  
  // floating header
  $('#header').portamento({gap:0});

});