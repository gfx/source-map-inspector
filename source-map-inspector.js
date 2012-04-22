window.addEventListener('load', function (e) {
	function element(id) {
		var item = document.getElementById(id);
		if(!item) {
			throw new Error("Element not found for id " + id);
		}
		return item;
	}
	function elementOffset(elem) {
		// point to the center
		var valueL = elem.offsetWidth  >> 1;
		var valueT = elem.offsetHeight >> 1;

		// accumulate
		do {
		  valueT += elem.offsetTop  || 0;
		  valueL += elem.offsetLeft || 0;
		  elem = elem.offsetParent;
		} while (elem);

		return { x: valueL, y: valueT };
	}

	function load(name) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", name, false);
		xhr.send(null);
		return xhr.responseText;
	}

	function format(fmt, __va_args__) {
		var args = arguments;
		return fmt.replace(/%([0-9]+)/g, function (_unused, n) {
			return args[ n | 0 ];
		});
	}

	function asHTML(prefix, tokens) {
		var elements = tokens.map(function (tokenObject) {
			var s = tokenObject.token.
				replace(/&/g, "&amp;").
				replace(/</g, "&lt;").
				replace(/>/g, "&gt;")
				;

			return format('<span id="%1%2" class="%3">%4</span>',
						  prefix, tokenObject.id, tokenObject.type, s);
		});
		return "<code>" + elements.join("") + "</code>";
	}

	var Lexer = require("ecma262-lexer");
	require("source-map");

	var orig    = Lexer.tokenize(load("foo.js"));
	var gen     = Lexer.tokenize(load("foo.min.js"));

	var mappingURL;

	if(gen[gen.length-1].type === "space") {
		m = gen[gen.length-1].token.
			match(/\@ *sourceMappingURL=([^ \t\r\n]+)/);
		if(!m) {
			alert("sourceMappingURL is not found");
			return;
		}
		mappingURL = m[1];
	}
	var mapping = JSON.parse(load(mappingURL));

	var colorMapping = {
		identifier: "#333",
		keyword:    "#09d",
		string:     "#d70",
		number:     "#f60",
		regexp:     "#660"
	};

	var ORIG = "original";
	var GEN  = "generated";

	element(ORIG).innerHTML = asHTML(ORIG, orig);
	element(GEN).innerHTML  = asHTML(GEN,  gen);


	var consumer = new sourceMap.SourceMapConsumer(mapping);

	var canvas = element('display');

	canvas.width  = document.documentElement.offsetWidth - 10;
	canvas.height = document.documentElement.offsetHeight;

	var cx = canvas.getContext("2d");

	var original = [];
	orig.forEach(function (tokenObject) {
		if(!original[tokenObject.line]) {
			original[tokenObject.line] = [];
		}
		original[tokenObject.line][tokenObject.column] = tokenObject;
	});

	for(var i = 0; i < gen.length; ++i) {
		(function (genToken) {
			setTimeout(function() {
				if(genToken.type === "space") {
					return;
				}

				var origPos = consumer.originalPositionFor(genToken);
				var origToken = original[origPos.line][origPos.column];

				if(origToken.done) {
					return;
				}
				origToken.done = true;

				cx.beginPath();

				// left pain
				var elem  = element(ORIG + origToken.id);
				var p = elementOffset(elem);
				cx.moveTo(p.x, p.y);

				// to right pain
				elem = element(GEN + genToken.id);
				p = elementOffset(elem);
				cx.lineTo(p.x, p.y);

				cx.strokeStyle = colorMapping[ genToken.type ];
				cx.stroke();
			}, i * 3);
		}(gen[i]));
	}
});
