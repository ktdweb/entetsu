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
		{name:"top_atlas_", frames: [[0,770,1280,768],[0,0,1280,768]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ctDga7 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ctDga7_0 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.シンボル3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ctDga7_0();

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


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.ctDga7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


(lib.ctDga7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 2
	this.instance = new lib.シンボル3();
	this.instance.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.076},0).wait(1).to({alpha:0.088},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.144},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.175},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.187},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.16},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.135},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.098},0).wait(1).to({alpha:0.092},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.073},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0.062},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.052},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.038},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.023},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.017},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.012},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0.006},0).wait(1).to({alpha:0.004},0).wait(1).to({alpha:0.003},0).wait(1).to({alpha:0.002},0).wait(1).to({alpha:0.001},0).wait(1).to({alpha:0},0).wait(3));

	// レイヤー 1
	this.instance_1 = new lib.ctDga7_0();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,768);


// stage content:
(lib.名称未設定2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.シンボル2();
	this.instance.setTransform(638.3,443.5,1,1,0,0,0,197,43.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({y:442,alpha:0.025},0).wait(1).to({y:440.5,alpha:0.05},0).wait(1).to({y:439,alpha:0.075},0).wait(1).to({y:437.5,alpha:0.1},0).wait(1).to({y:436,alpha:0.125},0).wait(1).to({y:434.5,alpha:0.15},0).wait(1).to({y:432.9,alpha:0.175},0).wait(1).to({y:431.4,alpha:0.2},0).wait(1).to({y:429.9,alpha:0.225},0).wait(1).to({y:428.4,alpha:0.25},0).wait(1).to({y:426.9,alpha:0.275},0).wait(1).to({y:425.4,alpha:0.3},0).wait(1).to({y:423.9,alpha:0.325},0).wait(1).to({y:422.4,alpha:0.35},0).wait(1).to({y:420.9,alpha:0.375},0).wait(1).to({y:419.4,alpha:0.4},0).wait(1).to({y:417.9,alpha:0.425},0).wait(1).to({y:416.4,alpha:0.45},0).wait(1).to({y:414.9,alpha:0.475},0).wait(1).to({y:413.4,alpha:0.5},0).wait(1).to({y:411.8,alpha:0.525},0).wait(1).to({y:410.3,alpha:0.55},0).wait(1).to({y:408.8,alpha:0.575},0).wait(1).to({y:407.3,alpha:0.6},0).wait(1).to({y:405.8,alpha:0.625},0).wait(1).to({y:404.3,alpha:0.65},0).wait(1).to({y:402.8,alpha:0.675},0).wait(1).to({y:401.3,alpha:0.7},0).wait(1).to({y:399.8,alpha:0.725},0).wait(1).to({y:398.3,alpha:0.75},0).wait(1).to({y:396.8,alpha:0.775},0).wait(1).to({y:395.3,alpha:0.8},0).wait(1).to({y:393.8,alpha:0.825},0).wait(1).to({y:392.2,alpha:0.85},0).wait(1).to({y:390.7,alpha:0.875},0).wait(1).to({y:389.2,alpha:0.9},0).wait(1).to({y:387.7,alpha:0.925},0).wait(1).to({y:386.2,alpha:0.95},0).wait(1).to({y:384.7,alpha:0.975},0).wait(1).to({y:383.2,alpha:1},0).wait(1));

	// image
	this.instance_1 = new lib.ctDga7_1();
	this.instance_1.setTransform(640,384,1,1,0,0,0,640,384);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).wait(1));

	// image
	this.instance_2 = new lib.シンボル1();
	this.instance_2.setTransform(640.1,384,1.156,1.156,-3.3,0,0,639.1,383.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:640,regY:384,scaleX:1.15,scaleY:1.15,x:641.2,y:384.9,alpha:0.034},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-3.2,alpha:0.068},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-3.1,x:641.1,alpha:0.101},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-3,x:641.2,alpha:0.133},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-2.9,alpha:0.165},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-2.8,x:641.1,alpha:0.196},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-2.7,x:641.2,alpha:0.227},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-2.6,x:641.1,alpha:0.257},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-2.5,x:641.2,alpha:0.286},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-2.4,x:641.1,alpha:0.315},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-2.3,alpha:0.343},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-2.2,alpha:0.371},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-2.1,alpha:0.398},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-2,alpha:0.424},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-1.9,alpha:0.45},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-1.8,alpha:0.476},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-1.7,alpha:0.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-1.6,alpha:0.524},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.548},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-1.5,alpha:0.571},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-1.4,alpha:0.593},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-1.3,alpha:0.615},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.636},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-1.2,alpha:0.656},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-1.1,x:641,alpha:0.676},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.696},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-1,x:641.1,y:384.8,alpha:0.714},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-0.9,x:641,y:384.9,alpha:0.732},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:641.1,alpha:0.75},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-0.8,x:641,alpha:0.767},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.783},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-0.7,y:384.8,alpha:0.799},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-0.6,alpha:0.814},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:384.9,alpha:0.829},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-0.5,y:384.8,alpha:0.843},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.856},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.869},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-0.4,alpha:0.881},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.893},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.3,alpha:0.904},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:384.9,alpha:0.914},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:384.8,alpha:0.924},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.2,y:384.9,alpha:0.933},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:384.8,alpha:0.942},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.95},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.1,alpha:0.957},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.964},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.97},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.976},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.981},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.985},0).wait(1).to({rotation:0,alpha:0.989},0).wait(1).to({scaleX:1,scaleY:1,x:640.9,alpha:0.993},0).wait(1).to({alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.997},0).wait(1).to({alpha:0.999},0).wait(1).to({x:641,alpha:1},0).wait(1).to({x:640.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(517,283,1528.2,971.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;