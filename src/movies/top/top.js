export default (function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1040,
	height: 624,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/src/movies/top/images/top_atlas_.png", id:"top_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"top_atlas_", frames: [[0,0,1280,768],[0,2022,1040,624],[0,1396,1040,624],[0,770,1040,624]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bmpbase = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bmpeffect01 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bmpeffect02 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bmpeffect03 = function() {
	this.spriteSheet = ss["top_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.imgeffect03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bmpeffect01();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


(lib.imgeffect02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bmpeffect03();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


(lib.imgeffect01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bmpeffect02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


(lib.imgbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.bmpbase();
	this.instance.setTransform(0,0,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


(lib.bmptext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaBIQgEgEAAgGIABgGIAChDQAAgmgCgLQAAgHgFgBIgCgBIACgDQAEgFAEAAQAGAAAGAFQAGAEAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACAAAEIgBAhQAWADANAIQAPAJAAAKQAAALgJAAQgFAAgEgKQgLgVgVgGIACBUQAAAKgHABQgFAAgDgGg");
	this.shape.setTransform(316.3,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhGBAIAAgBQAygUAXgqQAMgRAHgYIACgIQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgLACIgZAKQgHADgEAAQgGAAgEgFQgEgFAAgHQAAgBABAAQADACAHAAQALAAATgFQARgEAFgDIAFgCQAFAAAGAGQAHAGAAAEQAAADgDACQgCABgBAEQgKAcgOATQAbAJARAOQAKAJAAAKQAAAFgCADQgDAEgEAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgCgCgDgGQgNgagZgOQgdApg3ALIgBgBg");
	this.shape_1.setTransform(296,62.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag0A8QgEgEAAgHIABgHIABAAQAFAFAFAAQAOAAAegRQAqgYAYghIABABQgRApgqAcQgLAJgPAGQgPAHgIAAQgGAAgFgFgAgugDQgGgLgOgGIAAgBIAMgBQAMAAAIAEQAHAFAAAHQAAAFgDABQgCADgEAAQgFAAgFgGgAgegsQgHgLgOgGIAAgBIANgCQALAAAHAFQAHAEAAAHQAAAKgJAAQgEAAgEgGg");
	this.shape_2.setTransform(278.5,62.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgxBIQAcgRAJgXQAHgQAAgXIAAgOQgCgEgEgEIAAgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAEgBQAGAAALAKQAOgJANgPQAFgHAAgCQAAgCgFAAQgPAAgjAGIgdAGIgJACQgLAAgEgSIAAgBQAHADAHAAIBKgIIASgDIAFgBQAEAAAIAHQAIAIAAAFQAAAEgEABIgGAEQgVASgYAIQAAAlgLASQgMAZgkAMQgBAAAAAAQAAAAgBgBQAAAAAAAAQABAAAAgBg");
	this.shape_3.setTransform(259.3,62.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBUIAAgBQARgKAJgJQAIgKAHgNQAIgOAEgVIgVAAIgKABIgCgGIgaAAIAAA4IAcgHQAAAAAAAAQABAAAAABQAAAAAAAAQAAABgBAAQgdARgeAIQgBAHgDAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgGgSIAdgEIAAg6IgZABIgCgFIAMABIAPAAIAAgXIgFAAIgJABIgBgHQgHAGgIAEIgCAAIAAgBQARgSAKgWQAGgNACgJQAWAGAAADQAAAEgHABIgBABQAcAHAAAOQAAAIgIAAQgEAAgEgJQgGgMgHgGQgMAUgTAQIAJABIAXAAQAGgIADAAQACAAAHAGQAEACAAACQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgVAAIAAAXIAGAAQAHgIACgBQADABAHAGQAEADAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAJABIAXAAQACgSAAgQIgSAAQgEALgNANIgBAAIgBgBQAIgQAEgWQADgMAAgJQATAGAAADQAAABgGACIgHAUIARAAIAAgVIgBgZIATADQAEABAAACQAAADgFABIgBAkIALAAQAIgMADAAQACAAAJAJIAFAFQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgkAAQAAAQgDASIATAAQAJgKADAAQADAAAJAIIAFAEQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgqAAQAIAbARAPQAKAJAPAGQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgJAFgBAJQAAAGgDgBQgDAAgIgIQgIgJgFgIQgMgVgFgdIgDALQgIAcgUARQgOAMgXAIIgBgBgAglAwIAHgXIACgOQASAGAAADQAAADgFAAQgJAQgLAKIgCABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAhLApQgBgRgEgJQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQARAPAAALQAAAKgHAAQgGAAAAgJg");
	this.shape_4.setTransform(240.7,62);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeBKQgMgIgGgTQgIANgOAPIAAAHQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgEAAgKgWIAMgFIAOgIIAAgwIgMAAIgLAAIgCgGQAHACAGAAIALAAQAIgIACAAQACAAAIAGQAEAEAAACIgFAEIAAAsQAHAMALADQANAFAbAAQAaAAAugFQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAgBABQgHAEAAAGIgBAGIgEABQgKACgjAAQgsAAgQgKgAAJA7IABghQgTATgZAGIgBgBIAAgBQAdgRAMgYIgQAAIAAABQAAAGgIAAQgHAAAAgEIABgUIgBgTQAJAEAHAEIA3AAQAGgHACAAQACAAAHAGQAEAEAAABQAAADgFADIAAAOQAQALAAACQAAADgIgBQgMAHgIADQAWAJAAALQAAAIgIAAQgDAAgIgJQgLgNgQgKIAAAfQAAAIgKAAQgHAAAAgFgAAaAWIATAFIALgNIABgCIgEABQgGAAAAgFIgVAAgAgKAEIA5AAIAAgUIg5AAgAgngoIAPACIAhAAIAAgTIgbAAIgLACIgCgHIAMABIAcAAIgBgWQAYACAAAEQAAADgGACIAAALIAVAAQAIgKACAAQACAAAJAHQAEAEAAACQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAIgrAAIAAATIAdAAQAJgLACAAQACAAAKAIQAFADAAACQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIhpAAIgNABgAg/g0QgFgPgHgHIAAgCIACAAQAdAHAAARQAAALgKAAQgGAAgDgLg");
	this.shape_5.setTransform(222,61.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag6A6QgHgOAAgTQAAgTAJgjQADgPABgJQAAgKgGgHIABgBQAIADAHAIQAFAIAAAJQAAAIgFAQQgLAcAAAQQAAAJAEAKQALgRAKgVIABABIgGAXQgFAOAAAGIACAGIACAHQAAAEgCACQgDADgDAAQgJAAgHgOgAAAAwQgGgIgBgQQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAHAWAUAAQAMAAAQgHIAGgBQAEAAAEACQACADAAAEQABAGgLAEQgJAEgOAAQgWAAgKgNgAAAgxIAAAAQAFAEAGAAIAMgBIAOgGQAEgDADAAQADAAAEADQADADABADQAAAFgKAFQgKAEgLAAQgTAAgFgRg");
	this.shape_6.setTransform(184.9,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfBRQAegIALgNQAPgNAAghQAAgigMABQgIAAgSAOQgLAFgEAAQgGAAgDgBQgFgFAAgFQAAgEADgEIABAAQACAFAEAAIAHgCQAZgMANAAQAOAAAIANQAHAPABAXQAAAlgeAMQgNAGgNADIgSABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAgAgIgvIAQgOIgFgCQgGgEgDgFQgDgEABgEIAAgBQAFAFANABQAJABADACQAGAFAAAHQAAAHgKAAIgIAAQgEAAgNAHIgBgBg");
	this.shape_7.setTransform(166.5,61.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnAwQAAgXAigVQgLgEABgOIABgjIAAgIQgCgCgFgEQgIgGgBgHIABgDIAAAAQADADAHADQALAEADAFQAEAGAAAKIgBAcQAAASAFAAQAFAAAHgFQAGgDADAAQAFAAADADQAEADAAADQAAAEgIACIgZAHQgQAIgJAJQgJAIAAAJQAAATAbAAQAIAAASgEIAIgBQAKAAAAAHQAAAGgKAEQgLADgQAAQgqAAAAggg");
	this.shape_8.setTransform(150.6,61.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBJQgDgDgDgOIgEgSQgMAZgHAAQgIAAABgLQAAgFAFgFQAPgOAKggIgNAEQgGAAgEgGQgGgFAAgHIABgFIABAAQAGAJAJgBQAHABAIgDQAEgRAAgOQAAgGgBAAQgBgBgFAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIACgFQAEgFAGgBQALAAAAAPQAAAMgFAWQAKgEAHAAQAUAAAAAiQAAAfgNAUQgMAPgOAAQgFAAgDgEgAghgIQgIAYgIATQADAIAFAIQAFAHAEAAQAKAAAIgQQAIgQAAgVQAAgTgIAAQgEAAgPAGgAAzAOQgDgEgEgBIgNgDIAAgBIATgCQAFgBAAgCQAAgJgIgHQgHgHgIgBQgDABgIACIAAgBQAKgHAJgBQAMAAAKALQAKAJAAAKQAAAIgFAFQgEAGgFgBQgDAAgEgEgAAyguQgGgMgKgEIAAgBIAHAAQAJABAGADQAGAFAAAEQAAAIgGAAQgDAAgDgEgABDg8QgHgJgKgGIAAAAIAHgBQAJAAAHAEQAFAEAAAFQABAHgGAAQgDAAgDgEg");
	this.shape_9.setTransform(133.5,61.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgfBTQA2gRAAg+QAAgQgFgNQgFgMgHAAQgJAAgJAbQgDAHgCAIIgBAIQAAAEACAFIACAIQAAAHgHAAQgIAAgFgMQgFgMAAgOQAAgRAHgZQAFgUAAgFQAAgJgIgFIAAAAIAFgBQAHAAAGAFQAHAGAAAHQAAAFgGAMQgMAcAAAQIABAIQAHgSAIgLQALgSAKAAQANAAAJAQQAJAQAAAVQAAArgiAUQgNAIgXADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_10.setTransform(115.2,62.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGBSQAQgDALgHQAdgQAAgdQAAgRgIgKQgJgKgOgCQgEAdgPAWIAAAFIAAAEQAAAFgEAAQgCAAgEgDQgVATgPgBQgKAAAAgIQAAgEgFgDQgGgEAAgJQAAgPAOgQQAOgPAVgIIABgVIgQACQgMAAgGgOIABgBQAGADAGABQAIgBANgEIABgTQAAgEgDgDQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBABAAQACgDADAAQAFAAAEAEQAEADAAAEIAAADQAHAEAEAAIAHAAQAGAAAAAHQAAALgdAJIgBAWQAGgCAJgBQAAgGgDgDQAAAAgBAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAJADAEAHQAWAEAOANQANALAAAUQAAAbgYAPQgUAMgeAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAgAgrAOQgKAPAAANQAAAMAIAAQAMAAARgRQgCgPAAgWIAAgGQgPAGgKAOgAgGgKIABAZIABAJQAJgQAEgVQgJABgGACgAgEg0QAGgCAFgFIgHgIIgEAPg");
	this.shape_11.setTransform(97.5,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVBLQgJgHAAgKQgBgSAYgJIABgSQAAgOgBgGQgCgFgFAAQgHgBgMAMQgIAIgJANQgIALgEAAQgHAAAAgNQABgGAGgGQAHgFAIgKQAJgNAIgQIgNACQgMAAAAgMQAAgEACgFIAAAAQACAHAGAAQAJAAALgDIACgNQAAgEgDgDIgCgCQgCgFAJAAQAFAAAEADQAEADAAAEQAIADADABIAGgBQAIAAgBAHQABALgjAKQgEALgLASQAPgIAHgBQAJABACAJQADAJABAMQAVgeAYAAQAIAAAGAGQAHAFAAAHQgBALgKAIQgIAEgfAHIgOADIAAAMQAAAOgGAAQgDAAgDgCQgCgDAAgFIAAgGIABgHQgPAGgBALQAAANAVAAQAGAAALgDIAIgCQALABAAAHQAAAGgHACQgHAEgSAAQgOAAgJgGgAAUAAQgKALgDAQIALgEQAUgGAGgFQAIgGAAgGQAAgLgLAAQgLAAgKALgAgMg4QAHgBAFgDIgIgIQgBAGgDAGg");
	this.shape_12.setTransform(79,61.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBDQgEgEAAgFQAAgFAEgEQAEgDADAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDAEgFAAQgDAAgEgEgAgCAeIABgLQAAgRgEgXQgHgfAAgGQAAgMAMAAQANAAAAAMQAAAGgGAeQgEAWAAASIABALQAAADgEAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_13.setTransform(61.9,61.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag9BKQgCgDAAgGQAAgDACgGQADgDAEgJQAKgXAKgnQgOADgIAAQgMAAAAgLQAAgEACgGIABAAQADAGAGAAQAKAAAPgEQAEgSAAgLQAAgFgFgBIgCgCQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAEgCADAAQAFAAAFADQAFADAAAEIgCAFIgBAFQAKAIAGAAQAIAAAAAHQAAAHgLAFQgIAFgNAEQgJAsgMAjIgHAQQgDAEgDAAQgEAAgCgEgAgRglIAOgGIgLgMgAAJBCQgJgIAAgQIAAgHIAAAAQADAYAaAAQAKAAANgEIAHgBQAEAAADACQADADAAADQAAANgfAAQgSAAgLgJgAAbgBIANgLIADgDQAAgCgIAAQgOAAgOAGIAAgBQAHgIAKgEQAKgFAKAAQAHAAAGADQAFAEABAFQAAAHgIAAIgKACIgSAIIAAAAIAAgBg");
	this.shape_14.setTransform(45,61.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAsQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAQgDANgHQAagOAAgWQAAgPgGgJQgHgJgLAAQgNAAgTAQIgSANQgIAGgFAAQgFAAgFgEQgEgEAAgGIAAgEIABAAQADAEADAAQACAAAMgHQAOgIAPgGQAOgHAOAAQARAAALAMQALAMAAARQABATgRANQgQANgbABg");
	this.shape_15.setTransform(25.8,64.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhNBMQACgeAAg7IgChEQAKADAMAHIBrAAQAJgJACAAQACAAAJAHQAEAEAAACQAAADgGADIAAAXQABA5ABA2QAAAIgMAAQgHAAAAgGIAAgGIhyAAIAAAGQAAAHgLAAQgHAAAAgGgAg7BAIByAAIAAiCIhyAAgAgMA0IACg0QgRAcgbAMQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAcgaALgiIgWAAIgMABIgCgHIAOACIAcAAIAAghQAUACAAAEQAAACgFADIAAAWIAUAAQAIgKADAAQACAAAJAHQAFADAAACQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgrAAQAFAPANALQANAMAPAFQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAABQgGADgDAHQgCAFgCAAIgEgDQgKgIgHgMQgKgPgEgSIABBEQAAAIgKAAQgHAAAAgHg");
	this.shape_16.setTransform(7.9,62);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag6CbIAAgPIBmAAIAAkmIAPAAIAAE1g");
	this.shape_17.setTransform(309.2,19.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAhQgOgOAAgTQAAgSAOgNQANgOASAAQATAAAOAOQANANAAASQAAATgNAOQgOANgTAAQgSAAgNgNgAgXgXQgKAKAAANQAAAOAKAKQAKAKANAAQAOAAAKgKQAKgKAAgOQAAgNgKgKQgKgKgOAAQgNAAgKAKg");
	this.shape_18.setTransform(289.6,29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABdCnIgOgLQgbgWgfgPQgfAZgtAMQgsAMhBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQBlgNA2gsQgWgJgggIIgHAKQgFAHgNAAQgVAAAAgJQgBgDADgDQAUgYAQgaIhBAAQgMAAgOACIgEgOQAOADAQAAIBHAAIAFgJQAJgPAHgSQArAJAAAEQAAAFgPADIgLAVICEAAQAVgXAFAAQAEAAAVAQQALAJAAADQAAAEgFAAIhUAAQgQAhgUAZQApAKAWAPQASAMAAANQAAAJgFAGQgGAGgIAAQgFAAgGgDgAg6BSIBAAJQARgUAPgeIhFAAQgMAUgPAVgAiMgIIABg0IgBgyQAVAJATAJIAnAAIAAguIhLAAQgMAAgOACIgEgOQAOADAQAAIDuAAQATgWAFAAQAEAAAXAQQANAIAAADQgBAEgFAAIhvAAIAAAuIAtAAQAOgQAFAAQADAAARANQAJAHAAADQAAAEgKAHIAAAKQgBAcACAZQAAALgUAAQgPAAgBgJIAAgFIjLAAIAAAFQABAKgUAAQgPAAAAgJgAAxgWIAwAAIAAg9IgwAAgAgcgWIArAAIAAg9IgrAAgAhqgWIAtAAIAAg9IgtAAgAgchcIArAAIAAguIgrAAg");
	this.shape_19.setTransform(264.5,17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag3CWQgQgJAAgdIAAgFQgnAYgzASQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAwgYAsglQAAhggChGIAqAFQAHACABAEQAAAGgNAFIAABxIAMgMQAvgxAeg4QAXgpAJgkQAxAUAAAIQAAADgDACQgEABgKABQgoBahGA/QgTAUgYARIAAATQAAAQAHAEQAHADAcAAQAdAAAMgCQALgBAEgFQAJgJAMgvQAEgBAAACIABApQABAJAIAEQAJAEAAAIQAAAQgUAHQgWAIg1AAQgxAAgRgKgACFBHQgEgHgDgWQgFgjgUgbQgBAAAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQBAAkAAAnQAAAMgGAHQgGAIgKAAQgIAAgFgHgAihBDQgGgGAAgJQAAgHADgFQAEgEAMgJQAMgIAHgMQAFgJAFgWQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAEATAAAOQAAAbgJASQgKAUgSAAQgIAAgGgGgAAFhiQgFgEgJgOQgPgXgagOQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQBUAIAAAkQAAAJgFAGQgFAGgJAAQgGAAgFgEg");
	this.shape_20.setTransform(226.9,17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhUCTQgFgIgHgbIgIgjQgXAxgPAAQgHAAgEgHQgEgGAAgKQAAgFACgEQACgDAIgHQANgMAOgbQANgaAJgbQgTAHgGAAQgMAAgKgMQgJgLAAgPQAAgEACgEIABAAQAMAQASAAQALAAASgFQAJgmAAgXQAAgLgCgDQgCgCgKAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQABgFADgFQAIgLALAAQAVAAAAAeQAAAUgKAuQAXgGAMAAQAqAAAABFQAAAegIAaQgGAbgOASQgLAOgPAJQgOAIgNAAQgLAAgFgHgAhEgSQgPAzgRAlQAFANALASQAKAQAIAAQAUAAARghQAQggAAgpQAAgVgEgJQgEgKgJAAQgJAAgdALgABuAjQgCgBgEgGQgFgHgMgDIgXgGQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAcgCAKgDQAJgDAAgFQAAgRgPgPQgOgPgQAAQgJAAgNAFQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQALgJAIgDQAIgEALAAQAXAAAUAUQAUAUAAAWQAAAPgIAKQgIALgMAAQgEAAgCgCgABlheQgOgXgTgJIAAgCIAPAAQATACALAHQAMAIAAAKQAAAHgEAEQgDAEgFAAQgGAAgGgIgACHh6QgOgTgTgKQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIANgBQATAAAMAHQAMAHAAALQAAAGgEAEQgDAEgEAAQgGAAgGgIg");
	this.shape_21.setTransform(190.5,17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AirChQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQBNg3AghCQAghAAAhmQAAgNgCgTQAjAEAJACQAJACAAAFQAAADgDACIgLAGIgBAiQAIBJAjA1QArBEBPAeQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgKACgFAGQgGAGgEANQgDAHgEAAQgFAAgOgKQhDg1gahEQgRgpgGg5QgJBXgoA1QgoA1hTAmIgBAAIgCgBg");
	this.shape_22.setTransform(152.4,18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah/B6QgPggAAgqQAAgmAQhEQAKgqAAgUQAAgRgFgOQgBAAAAgBQAAAAABAAQAAAAAAAAQAAgBABAAQAQALAKAPQAJAPABAPQAAAOgLAgIgRAzQgHAZAAAWQAAAfANATQAMgRALgUIATgkQABgBABAAQAAAAAAABQAAAAABAAQAAAAgBABIgSA7QgFARAAALQAAAHADAIQADAJAAAEQAAAGgEAEQgEADgFAAQgUABgPgggAgMCGQgGgFgBgIQgBgGgFgFQgEgFAAgHQAAgSASgNQARgNAaAAIARABQgDgigCg5QgKACgKAAQgqAAgNgnQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQASAOAVAAQAPAAATgFIAAg2QAAgKgCgCQgCgDgIgCQgFgBAAgCQAAgCAEgFQAGgGAJAAQALAAAJAGQAJAGAAAJIgDAQQAXASAMABIAHgBQAGAAAEAFQADAEAAAGQAAALgPALQgSALgZAIQAAAyAKAyQAdAMASAOQASAOAAAOQAAAGgDAEQgEAFgGAAQgEAAgDgCIgLgMQgQgQgSgKIAAAKQgCAXgOAMQgOANgYAAQgYAAgMgNgAgCBUQgLAHAAALQgBAJAJAFQAHAGANAAQAjAAAAgiIAAgIQgNgDgMABQgTAAgIAGgABEhGQAPgFAMgIQgQgRgJgJg");
	this.shape_23.setTransform(116.1,18.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah1B0QgNgbAAgnQAAgmARhGQAHghAAgQQAAgUgKgPIAAgBIABAAQARAGAMAQQALAQAAASQAAASgLAeQgWA6AAAfQAAATAKAUQAVgjAUgoQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAIgMAuQgJAdAAALQAAAHADAGQAFALAAADQAAAHgFAFQgEAFgHAAQgSAAgOgcgAAABhQgNgSgCgeIABgBIABABQAOArAqAAQAYAAAggNQAGgDAGAAQAIAAAGAGQAGAFAAAHQAAAMgTAJQgUAIgaAAQgtAAgVgagAAAhiQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAKAIAOAAQALAAAMgDQAHgCATgKQAJgFAGAAQAHAAAIAFQAHAGAAAHQAAALgUAJQgTAJgXAAQgmAAgKgig");
	this.shape_24.setTransform(78,17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AirChQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQBNg3AghCQAhhAAAhmQAAgNgCgTQAiAEAJACQAJACAAAFQAAADgDACQgCACgIAEIgCAiQAIBIAjA2QAsBEBOAeIABADIgBACQgKACgFAGQgGAGgEANQgCAHgFAAQgFAAgOgKQhCg2gbhDQgRgpgGg5QgIBWgpA2QgoA1hTAmIgBAAIgCgBg");
	this.shape_25.setTransform(40.2,18.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag6CaIAAkzIB1AAIAAANIhmAAIAAEmg");
	this.shape_26.setTransform(13.8,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320.1,70.6);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.bmptext("synched",0);
	this.instance.setTransform(160,35.2,1,1,0,0,0,160,35.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320.1,70.6);


(lib.effecct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// effect03b
	this.instance = new lib.imgeffect03("synched",0);
	this.instance.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({startPosition:0},10).to({startPosition:0},11).wait(1));

	// effect02b
	this.instance_1 = new lib.imgeffect02("synched",0);
	this.instance_1.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(11));

	// effect01b
	this.instance_2 = new lib.imgeffect01("synched",0);
	this.instance_2.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({alpha:1},9).to({alpha:0},10).to({_off:true},1).wait(21));

	// effect03
	this.instance_3 = new lib.imgeffect03("synched",0);
	this.instance_3.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({startPosition:0},10).to({startPosition:0},10).to({_off:true},1).wait(40));

	// effect02
	this.instance_4 = new lib.imgeffect02("synched",0);
	this.instance_4.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(50));

	// effect01
	this.instance_5 = new lib.imgeffect01("synched",0);
	this.instance_5.setTransform(520,312,1,1,0,0,0,520,312);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},9).to({alpha:0},10).to({_off:true},1).wait(60));

	// base
	this.instance_6 = new lib.bmpbase();
	this.instance_6.setTransform(0,0,0.813,0.813);

	this.instance_7 = new lib.imgbg("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.imgbg("synched",0);
	this.instance.setTransform(520,312,1,1,0,0,0,520,312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1040,624);


// stage content:
(lib.top = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6g5QhThOh4gDIEjAAIAAEVQgDh2hVhOg");
	this.shape.setTransform(1028.1,11.3,0.813,0.813);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiRCZIAAkxQADB5BVBZQBVBcB2ADg");
	this.shape_1.setTransform(11.9,611.6,0.813,0.813);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkrkrIJXAAIpXJXg");
	this.shape_2.setTransform(24.4,24.4,0.813,0.813);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkqErIJVpVIAAJVg");
	this.shape_3.setTransform(1015.6,599.6,0.813,0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	// text
	this.text = new lib.text();
	this.text.setTransform(358,306.3);
	this.text.alpha = 0;
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(40).to({_off:false},0).to({y:286.3,alpha:1},39,cjs.Ease.get(1)).wait(1));

	// effect
	this.instance = new lib.effecct();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).wait(1));

	// bg
	this.bg = new lib.bg();
	this.bg.setTransform(520,312,1,1,0,0,0,520,312);
	this.bg.alpha = 0;
	this.bg._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(4).to({_off:false},0).to({alpha:0.73},36,cjs.Ease.get(1)).to({alpha:1},38).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(520,312,1040,624);

var obj = { lib: lib, img: img, createjs: cjs, ss: ss  };
return obj;
})(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
