(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/top_atlas_.png", id:"top_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"top_atlas_", frames: [[0,0,1280,768],[0,1540,1280,768],[0,2310,1280,768],[0,3080,1280,768],[0,770,1280,768]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ビットマップ10 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ5 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ7 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ8 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ビットマップ9 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.シンボル7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ビットマップ10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


(lib.シンボル6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ビットマップ8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


(lib.シンボル5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ビットマップ7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


(lib.シンボル4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ビットマップ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


(lib.シンボル2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghBZQgEgFAAgHIAAgHIACgYIABg9QAAgugCgNQAAgIgHgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAgCADgCQAGgFAEAAQAGAAAJAFQAGAFAAAFQABADgDADQgDADAAADIAAApQAaADARAKQASAMAAANQAAANgKAAQgEAAgDgCIgFgKQgMgagbgIIADBnQgBANgJAAQgFAAgFgGg");
	this.shape.setTransform(389.3,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhXBQIABgBQA9gaAdgzQAPgWAIgdIACgJQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgOAEIgfALQgKAEgEAAQgHAAgEgGQgFgGAAgKIABAAQAEADAJAAQAIAAAdgHQAVgFAFgDIAHgDQAHAAAGAHQAJAIAAAFQAAADgEADQgDACgBAEQgMAjgRAXQAjALATASQANALAAANQAAAFgDAEQgEAEgEABQgEAAgCgDIgGgKQgPgegggTQgkAzhEANIgBAAg");
	this.shape_1.setTransform(364.3,77.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhABKQgFgFAAgIQAAgEACgFIABAAQAFAHAHAAQARAAAlgWQAzgdAfgpQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQgVAygzAiQgPAMgSAIQgTAIgJAAQgIAAgGgGgAgyACIgGgHQgJgNgQgHQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAIgCAHAAQAOAAAKAGQAJAGAAAIQAAAGgEACQgDADgFAAQgDAAgCgBgAglg3QgHgNgSgIQAAAAgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAIAPgCQANAAAJAFQAJAGAAAJQAAAFgDAEQgDADgFAAQgGAAgEgIg");
	this.shape_2.setTransform(342.7,76.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag9BaIAAgBQAjgVALgcQAJgVAAgcQAAgNgBgFQgBgEgFgFIgBgCIACgDIAEgBQAHAAAOAMQASgLAPgSQAHgIAAgDQAAgDgHAAQgVAAgoAHIgkAIIgMADQgNAAgEgXIAAgBQAHAEAJAAIAZgCIBEgIQAQgCAFgCIAGgBQAGAAAJAJQAKAJAAAHQAAAEgFACIgIAFQgZAVgeALQAAAsgNAYQgQAegsAPIgBgBg");
	this.shape_3.setTransform(319.1,77.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBoIAAgCQAVgNAMgLQAKgLAIgQQAKgSAFgZIgmABIgDgIIggAAIAABFIAigIQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQgeASgrAOQgBAIgEAAQgCAAgCgEIgIgXIAZgCIALgCIAAhIIgSAAIgNACIgCgHIAOACIATAAIAAgeIgGAAIgLABIgCgHQgKAIgJAEIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAWgWAMgaQAHgPADgNQAaAIAAAEQAAAEgJABIAAABQAhAKAAARQAAAKgIAAQgGAAgFgLQgHgQgJgHQgQAagVASIALACIAcAAQAHgKADAAQADAAAJAHQAFAEAAACQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgaAAIAAAeIAIAAQAIgLADAAQACAAAKAIQAFAEAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIAMABIAcAAQADgRABgZIgYAAQgGAQgOAOIgCAAIgBgCQAJgSAGgcIADgaQAYAHAAADQAAADgHACQgDAMgGAMIAVAAIAAgZIgBgfIAYADQAFABAAADQAAADgHADIgBArIANAAQALgOADAAQACAAAMAKQAGAEAAADQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgsAAQAAATgEAXIAYAAQALgMADAAQADAAAMAKQAGADAAACQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIg0AAQAKAhAUASQAMAKATAJIABABIgBABQgLAHgBALQAAAGgDAAQgEAAgKgKQgKgLgHgKQgNgXgHgnIgDAOQgKAigZAVQgRAPgdAJIgBABIgBgBgAhdAzQgBgUgFgNQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIACAAQAVATAAAOQAAAMgKAAQgHAAAAgLgAguA8QAFgNADgQIADgSQAXAIAAAEQAAADgHABQgLAUgNAMIgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_4.setTransform(296.3,76.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AglBbQgPgKgIgXQgKAQgQASQAAAHgBACQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgFAAgMgcQAHgCAIgEQAIgDAJgGIAAg8IgQAAQgGAAgGAAIgDgHQAIACAHAAIAPAAQAJgKADAAQADAAAJAIQAGAEAAACQAAABgHAFIAAA2QAFAJAEAEQAFAEAHACQARAFAiAAQAnAAAxgFIABABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQgHAEgCAJIgBAHIgEABQgMACgsAAQg3AAgTgMgAALBJIACgpQgYAXgfAIQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAAgCQAjgVAQgcIgUAAIAAAAQAAAIgLAAQgIAAAAgFIABgaIgBgXIAUAKIBDAAQAIgIACAAQADAAAJAHQAEAEAAADQAAADgGAEIABASQATAMAAADQAAAEgKgBQgNAHgMAFQAcALAAAOQAAAKgKAAQgEAAgKgLQgOgRgTgMIABAnQAAAJgNAAQgJAAAAgGgAAgAbIAYAHQAIgJAFgIIABgCIgFABQgHAAAAgFIgaAAgAgMAFIBGAAIAAgYIhGAAgAgwgxQAKACAIAAIApAAIAAgXIgiAAIgNACIgDgJQAGACAKAAIAiAAIgBgbQAeACAAAFQAAAEgIADIAAANIAaAAQAKgMADAAQADAAAJAJQAFADAAADQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIg1AAIAAAXIAjAAQAMgNACAAQACAAANAJQAGAEAAADQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIiBAAIgQABgAhOhBQgFgQgJgLIAAgBIABgBQAlAKAAAUQAAAOgMAAQgIAAgEgPg");
	this.shape_5.setTransform(273.2,76.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhHBIQgJgRAAgYQAAgaAKgoQAFgVAAgJQAAgMgGgJQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQALAEAHAKQAHAJAAALQAAALgHATQgNAjAAATQAAAMAGAMQAPgaAKgVIABABIgIAcQgFARAAAIQAAADACAFIACAIQABAKgKAAQgMAAgHgQgAAAA8QgIgLgBgTQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAIAbAaAAQAOAAAUgIQAFgCADAAQAFAAADADQAEAEAAAEQAAAHgLAGQgNAFgQAAQgcAAgMgQgAAAg8QAAAAAAAAQAAgBAAAAQAAAAAAAAQAAABAAAAQAHAFAHAAQAFAAAJgCQAFgBAMgGQAFgEAEAAQAEAAAFAEQAEADAAAFQAAAGgMAGQgMAFgOAAQgXAAgGgVg");
	this.shape_6.setTransform(227.5,76.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBjQAlgIAPgRQASgRAAgoQAAgVgDgKQgEgLgIAAQgHAAgaASQgNAIgGAAQgFAAgGgDQgFgFABgHQAAgFADgGIABAAQADAIAEAAIAIgDQAggPAQAAQASAAAIAQQALATAAAdQgBAsgkAQQgQAHgQADIgXACQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAgKg6IAUgSIgFgCQgJgFgEgGQgCgEgBgGQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAHAHAQABQAJAAAFADQAIAFgBAJQAAAKgMAAIgJAAQgGAAgRAIQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_7.setTransform(204.9,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjBZQgOgKABgTQgBgQAKgMQAKgNAWgOQgNgFABgRIACgrQAAgIgBgDQgCgDgGgEQgJgGgBgKIAAgDQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQACAEAKADQAMAFAFAHQAFAHAAAMIgCAjQAAAMADAFQAAAEAFAAQAGAAAIgGQAHgEAFAAQAFAAAEAEQAEADAAAFQAAAFgJADIgOADIgRAGQgUAIgMAMQgKAKAAAMQAAAWAiAAQAJAAAXgFIAJgBQAMAAAAAJQAAAHgMAEQgNAFgTAAQgZAAgPgKg");
	this.shape_8.setTransform(185.3,76.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgzBaQgDgEgEgRIgFgWQgOAegKAAQgJAAAAgOQAAgFAHgHQASgPANgpQgNAFgDAAQgHAAgGgHQgGgIAAgIIABgFIABAAQAHAJALAAQAJAAAJgDQAGgYAAgNQAAgHgCgCQgBgBgGAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBIADgGQAEgHAHAAQANAAAAASQAAAQgGAZQANgDAJAAQAZAAAAApQAAAngRAXQgGAJgKAFQgJAGgHAAQgHAAgDgFgAgqgLQgJAfgKAXIAJATQAHAKAFAAQAMAAAKgUQAKgUAAgaQAAgYgKAAQgGAAgSAHgABAARQgEgEgHgDIgOgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQASgBAFgCQAGgBAAgDQAAgKgJgKQgJgJgKAAQgDAAgKADQgBAAAAAAQAMgKALAAQAPAAAMAMQAMANAAAMQAAAKgFAGQgFAGgHAAQgEAAgDgFgAA+g6QgJgOgLgFIAAgBIAJAAQAaACAAAOQAAAEgCADQgDADgDAAQgEAAgDgGgABThLQgJgMgMgFQAAgBgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAJgBQALAAAHAFQAIAEAAAHQAAADgCADQgDACgCAAQgDAAgEgFg");
	this.shape_9.setTransform(164.2,76.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnBnIAAgBQAkgLAOgXQARgYAAgnQAAgVgGgOQgGgPgJAAQgLAAgMAgIgFATIgBAKIACALIACAJQAAAJgJAAQgJAAgGgOQgGgPAAgSQAAgUAIggQAGgZAAgFQAAgMgKgFIAAgBIAGgBQAJAAAIAHQAIAHAAAJQAAAGgHAPQgPAiAAATIABALQAJgWAJgOQAOgWANAAQAQAAALATQALATAAAbQAAA2gqAXQgPAKgeAFIgBgBg");
	this.shape_10.setTransform(141.7,76.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBmIAAgBQAUgFAOgIQAjgTABglQgBgTgKgNQgKgNgRgBQgFAigUAcIABALQAAAGgGAAQgEAAgDgDQgaAWgTAAQgLABAAgLQAAgFgHgEQgHgFAAgLQAAgTARgUQASgRAZgKIABgbQgMADgHAAQgPAAgHgRQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAGAEAKAAQAKgBAPgEIABgZQAAgEgEgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQABgDADgDQAEgCADAAQAGAAAFAEQAFAEAAAFIAAADQAJAGAEAAIAJgBQAIAAAAAKQAAANglALIgCAbQAKgEAKAAQAAgFgEgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAMADAEAKQAcADAQARQARAPAAAYQAAAggdATQgZAPglABIgBgBgAg1ASQgNARAAARQABAPAKgBQAPABAUgWQgDgWAAgXIAAgIQgRAIgNASgAgJgMQAAAPACAQIABALQAMgUAFgZQgLAAgJADgAgFhAQAJgEAFgEIgKgMg");
	this.shape_11.setTransform(120,76.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaBcQgMgIAAgNQAAgVAegMIABgWQAAgSgCgGQgCgHgGAAQgKAAgNAOQgJAGgNATQgJAPgFAAQgJAAAAgRQAAgFACgCIAHgHQAIgGAKgMQALgQAJgUIgOACQgQAAAAgPQAAgFADgGIAAAAQADAJAGAAQALAAAOgEQADgLAAgGQAAgEgEgDIgDgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQADgCAEAAQAGAAAFAEQAFAEAAAFQAKAEAEAAIAIgBQAIAAAAAJQAAAOgqAMIgSAkQARgLAJAAQAMAAADAMQADAKABAQQAaglAdAAQALAAAHAHQAIAHAAAIQAAAPgOAIQgLAHgjAGIgSAFIAAAPQAAARgIAAQgEAAgDgDQgEgEAAgFIADgQQgUAIAAANQAAAQAZAAQAGAAAPgEIALgCQAFAAAEADQADADAAAEQAAAFgHAEQgLAFgUAAQgSAAgLgIgAAZAAQgNANgEAUIAPgEQAYgIAIgGQAJgHAAgIQAAgOgNAAQgNAAgNAOgAgPhEQALgEAEgDIgKgJg");
	this.shape_12.setTransform(97.1,76.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKBTQgEgFAAgGQAAgHAEgEQAFgFAFAAQAFAAAFAFQAFAEAAAHQAAAGgFAFQgFAEgFAAQgFAAgFgEgAgDAlIABgOQAAgUgFgdIgIguQAAgOAPAAQAQAAAAAOQAAAHgIAlQgEAdAAAVIAAAOQAAADgFAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_13.setTransform(76.2,76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhMBcQgDgFAAgGQAAgFAEgGIAJgQQAMgdAMgwQgTAFgIAAQgHAAgEgEQgEgEAAgGQAAgFADgIQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQADAJAHAAQAMAAATgGQAFgXAAgNQAAgGgFgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBADgDQAEgEAFAAQAGAAAFAFQAHAEAAAEIgCAGQgCACAAAEQALALAJAAQAJAAAAAJQAAAIgMAGQgIAGgSAFQgNA8gOAlQgFAQgEAEQgDAGgFAAQgDAAgEgFgAgWguQALgDAHgDIgOgQgAALBTQgLgMAAgTQAAgEAAgFIABABQADAdAgAAQAMAAAQgFIAJgCQAFAAAEADQADAEAAAEQAAAQglAAQgYAAgNgKgAAhgBIARgOQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgCgKAAQgQAAgSAIIgBgBQAJgLAMgFQANgGAMAAQAKAAAGAFQAHAEAAAGQAAAJgJAAQgGABgHABIgVAKQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_14.setTransform(55.4,76.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPA2IAAgBQATgDARgJQAhgRgBgdQAAgRgIgLQgIgLgPAAQgPAAgXAUIgXAQQgKAHgFAAQgIAAgFgGQgFgFAAgHIAAgEQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAABABQADAEADAAQAEAAAPgJIAigRQATgIAQAAQAUAAAPAOQAPAPAAAVQAAAYgVAQQgUAPgiACIgGAAIgIAAg");
	this.shape_15.setTransform(31.8,79.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhfBeQACgmAAhIIgBhUQAPAHAKAGICGAAQAKgLACAAQAEAAAKAJQAFAFAAACQAAADgHAEIAAAcQAABHACBCQAAAKgOAAQgJAAgBgIIAAgHIiLAAIAAAHQgBAJgMAAQgKAAAAgHgAhIBQICLAAIAAiiIiLAAgAgPBAIAChAQgVAigiAQQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgCQAiggAOgqIgbAAIgPABIgDgIQAKACAIAAIAiAAIAAgTIgBgWQAaADAAAEQAAADgGAEIAAAbIAYAAQAKgNADAAQADAAALAJQAHAFAAACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIg1AAQAIATAQANQAQAQASAFQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgIAFgDAIQgDAGgCAAIgGgDQgKgJgKgQQgLgQgGgZIAABUQAAAJgLAAQgJAAAAgIg");
	this.shape_16.setTransform(9.7,76.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhIC/IAAgSIB+AAIAAlrIATAAIAAF9g");
	this.shape_17.setTransform(380.5,24.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgnAoQgRgRAAgXQAAgXARgQQARgRAWAAQAYAAAQARQARAQAAAXQAAAXgRARQgQARgYAAQgWAAgRgRgAgcgdQgMANAAAQQAAARAMANQAMAMAQAAQARAAANgMQAMgNAAgRQAAgQgMgNQgNgMgRAAQgQAAgMAMg");
	this.shape_18.setTransform(356.4,36.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABzDNIgSgNQgggagngTQgmAeg4APQg3AQhPAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQB9gRBCg3QgfgMgkgHIgIALQgHAIgPAAQgbAAAAgKQAAgDADgEQAYgeAVghIhRAAQgKAAgWACIgEgQQATAEARgBIBXAAIAHgLQAIgNAMgcQA0AMAAAFQAAAHgRADIgOAZICjAAQAZgcAGAAQAFAAAaAUQANALAAAEQAAAEgFAAIhoAAQgSApgbAfQAzANAbARQAXAQAAAQQAAAKgGAIQgHAHgLAAQgHAAgGgEgAhHBmQAmADAoAHQAZgcAPgiIhWAAQgQAbgQAZgAitgLQABgUABgrIgCg9QAZAJAZANIAvAAIAAg5IhcAAQgPAAgRACIgEgRQAQAEAUAAIElAAQAZgbAGAAQAEAAAdATQAPAKAAAEQAAAFgGAAIiKAAIAAA5IA4AAQASgVAFAAQADAAAFADIARANQALAJAAAFQAAAEgNAIIAAANQAAAjACAeQAAAPgaAAQgRAAAAgMIAAgGIj7AAIAAAFQAAAOgYAAQgTAAAAgNgAA8gbIA9AAIAAhLIg9AAgAgjgbIA2AAIAAhLIg2AAgAiCgbIA2AAIAAhLIg2AAgAgjhxIA2AAIAAg5Ig2AAg");
	this.shape_19.setTransform(325.5,21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhEC5QgUgLAAgkIAAgGQgzAfg7AVQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQA5gcA4guQAAh3gChWQAqAEAJACQAKACAAAFQAAAHgQAHIAACMIAPgPQA7g/AkhCQAcg0AMgsQA8AYAAAKQAAAEgEACQgEACgNACQgyBuhWBOQgUAVghAZIAAAXQAAAUAJAFQAJAEAiAAQAlAAAOgCQANgCAGgHQAKgLAOg5QAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAAAABIABAxQAAAIAEAEQACADAFADQAKAFAAAJQAAATgYAJQgZAKhEgBQg9AAgUgLgACkBYQgFgJgEgbQgGgrgZgiQAAAAgBgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAAAABAAQAAAAAAAAQBPAsAAAxQAAAPgIAJQgHAJgNAAQgKAAgFgIgAjHBTQgHgIAAgKQAAgKAEgFQAEgGAPgKQAPgLAIgOQAIgMAFgcQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAFAVAAAUQAAAigMAWQgMAYgVAAQgLAAgHgHgAAHh4QgHgGgLgSQgUgbgggSQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQBoALAAArQAAAMgGAHQgHAHgKAAQgHAAgGgEg");
	this.shape_20.setTransform(279.2,21.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhoC1QgGgJgIgiIgKgrQgcA8gTAAQgIAAgFgIQgFgIAAgMQAAgHACgEQADgEAJgJQARgPAQggQARggALgjQgZAJgHAAQgOAAgMgOQgMgOAAgSQAAgFADgFQAAAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAIALAIAEQAIAFAMAAQANAAAXgGQALgvAAgdQAAgOgDgDQgCgDgMAAQgEAAAAgDQABgHAEgFQAJgOAPAAQAZAAAAAkQAAAcgMA2QAdgHAOAAQA0AAAABVQAAAkgKAiQgIAhgRAWQgOARgSALQgRAKgQAAQgNAAgHgJgAhVgWQgKAkgIAWQgIAWgNAcQAIAUAMASQANAUAKAAQAZAAATgoQAUgoAAgzQAAgagEgLQgFgMgLAAQgMAAgkAOgACIArIgIgJQgHgIgNgEQgUgEgJgDQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAjgCALgDQAMgEAAgHQAAgUgSgTQgSgSgUAAQgLAAgQAGQgDABACgDQANgLAKgEQAKgEANAAQAdAAAZAYQAYAZAAAbQAAATgKAMQgJANgPAAQgFAAgCgCgAB9h1QgRgcgYgLQAAAAgBgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAJgBAKABQAWABAOAJQAPAKAAANQAAAHgEAGQgFAFgGAAQgHAAgHgLgACmiXQgKgNgJgIQgJgHgNgHQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBIARgBQAXAAAPAJQAOAJAAAOQAAAGgEAFQgEAFgFAAQgHAAgIgKg");
	this.shape_21.setTransform(234.4,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AjTDGQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQBfhDAnhRQAohPAAh+QAAgSgCgVQArAEALACQALADAAAHQAAADgDACIgOAHIgBArQAJBaArBCQA2BTBgAlQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgMADgGAHQgHAIgFAPQgDAJgGAAQgGAAgSgNQhRhCghhSQgVg0gHhFQgLBrgyBCQgxBAhnAvIAAAAIgDgBg");
	this.shape_22.setTransform(187.5,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AidCWQgSgnAAg0QAAgsAUhXQANg2AAgWQAAgUgIgSIAAgCIABAAQAUANAMASQAMASAAAUQAAASgMAmIgWBAQgIAeAAAbQAAAnAQAXQAQgYAMgVIAZguQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgWBJQgHAWAAANQAAAHAEAMQAEALAAAEQAAAHgFAFQgFAFgHAAQgZAAgSgngAgQClQgGgHgCgKQgCgIgFgFQgGgGAAgHQAAgXAXgQQAVgQAhAAIAUABQgDghgDhQQgPADgKAAQgaAAgQgMQgSgMgIgXQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAABQANAKALADQAMAEAOAAQAOAAAbgGIABhDQAAgMgDgDQgCgEgMgCQgFgBAAgCQAAgCAFgHQAIgIALAAQAOAAAKAIQALAHAAALIgCAKIgBAKQAQANAJAFQAKAFAIAAIAIAAQAHAAAFAGQAFAFAAAHQAAAOgUANQgUANghALQABA+ALA+QAmANAVARQAWASAAARQAAAIgEAFQgFAGgHAAQgFAAgDgDIgOgOQgUgUgWgMIAAAMQgCAcgRAPQgRAQgeAAQgeAAgQgQgAgDBnQgOAIAAAOQAAALAKAIQAJAHARAAQArAAAAgqIgBgKQgPgEgPAAQgXAAgLAIgABUhXQASgFAOgKQgPgTgOgOQgDAaAAAWg");
	this.shape_23.setTransform(142.8,22.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AiQCQQgRgiAAgwQAAgaAFgeQAEgbAMgzQAJgnAAgVQAAgZgNgRQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAVAIAOATQAOAUAAAWQAAAUgOAnQgaBHAAAnQAAAZAMAXQAVgiAdg7IACAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgQA4QgKAnAAALQAAAHADAJQAFALAAAGQAAAJgFAGQgFAFgHAAQgYAAgQghgAAAB4QgRgWgCglIABgBIABABQASA0A1AAQAQAAAOgDQAOgDAXgJQALgEAEAAQAKAAAIAHQAHAHAAAJQAAAOgXALQgZAKggAAQg4AAgZgggAAUhZQgOgKgHgWIAAgBIABAAQANALAQAAQAMAAAQgFQAKgDAXgMQALgGAIAAQAJAAAJAHQAIAHAAAIQAAANgYAMQgYALgbAAQgYAAgQgKg");
	this.shape_24.setTransform(96,22.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjTDGQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQBfhDAnhRQAohPAAh+QAAgSgCgVQArAEALACQALADAAAHQAAADgDACIgOAHIgBArQAJBaArBCQA2BTBgAlQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgMADgGAHQgHAIgFAPQgDAJgGAAQgGAAgSgNQhRhCghhSQgVg0gHhFQgLBrgyBCQgxBAhnAvIAAAAIgDgBg");
	this.shape_25.setTransform(49.5,22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhIC+IAAl8ICRAAIAAASIh+AAIAAFqg");
	this.shape_26.setTransform(16.9,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,393.9,86.9);


(lib.flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.シンボル6();
	this.instance.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.287},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.559},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.658},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0},0).wait(29).to({alpha:0.144},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.416},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.663},0).wait(1).to({alpha:0.709},0).wait(1).to({alpha:0.637},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.332},0).wait(1).to({alpha:0.283},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.096},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0},0).wait(1));

	// レイヤー 3
	this.instance_1 = new lib.シンボル5();
	this.instance_1.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.279},0).wait(1).to({alpha:0.407},0).wait(1).to({alpha:0.527},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.728},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.431},0).wait(1).to({alpha:0.349},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.108},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.004},0).wait(1).to({x:640.1,alpha:0},0).wait(1).to({x:640},0).wait(1).to({alpha:0.049},0).wait(1).to({alpha:0.096},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.32},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.402},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.481},0).wait(1).to({alpha:0.519},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.591},0).wait(1).to({alpha:0.626},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.693},0).wait(1).to({alpha:0.725},0).wait(1).to({alpha:0.679},0).wait(1).to({alpha:0.589},0).wait(1).to({alpha:0.503},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.259},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.043},0).wait(1).to({x:640.1,alpha:0},0).wait(22).to({_off:true},1).wait(5));

	// レイヤー 4
	this.instance_2 = new lib.シンボル4();
	this.instance_2.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.162},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.628},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.198},0).wait(1).to({alpha:0.08},0).wait(1).to({alpha:0},0).wait(39).to({alpha:0.144},0).wait(1).to({alpha:0.28},0).wait(1).to({alpha:0.409},0).wait(1).to({alpha:0.53},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.623},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.446},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.236},0).wait(1).to({alpha:0.181},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.092},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.015},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(15));

	// レイヤー 5
	this.instance_3 = new lib.ビットマップ9();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


// stage content:
(lib.top = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.シンボル2();
	this.instance.setTransform(638.3,443.5,1,1,0,0,0,197,43.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({y:439.5,alpha:0.067},0).wait(1).to({y:435.5,alpha:0.133},0).wait(1).to({y:431.4,alpha:0.2},0).wait(1).to({y:427.4,alpha:0.267},0).wait(1).to({y:423.4,alpha:0.333},0).wait(1).to({y:419.4,alpha:0.4},0).wait(1).to({y:415.4,alpha:0.467},0).wait(1).to({y:411.3,alpha:0.533},0).wait(1).to({y:407.3,alpha:0.6},0).wait(1).to({y:403.3,alpha:0.667},0).wait(1).to({y:399.3,alpha:0.733},0).wait(1).to({y:395.3,alpha:0.8},0).wait(1).to({y:391.2,alpha:0.867},0).wait(1).to({y:387.2,alpha:0.933},0).wait(1).to({y:383.2,alpha:1},0).wait(1));

	// image
	this.instance_1 = new lib.flash();
	this.instance_1.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1));

	// image
	this.instance_2 = new lib.シンボル7();
	this.instance_2.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.263},0).wait(1).to({alpha:0.316},0).wait(1).to({alpha:0.368},0).wait(1).to({alpha:0.421},0).wait(1).to({alpha:0.474},0).wait(1).to({alpha:0.526},0).wait(1).to({alpha:0.579},0).wait(1).to({alpha:0.632},0).wait(1).to({alpha:0.684},0).wait(1).to({alpha:0.737},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,384,1280,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;