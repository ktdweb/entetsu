import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import data from '../../../src/movies/mansion/mansion'

var canvas;
var lib = data.lib;
var images = data.img;
var ss = data.ss;

export default class Mansion extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <article id="Mansion">
        <DocumentTitle title="遠鉄アシスト | マンション管理" />

        <canvas
          id="canvas"
          width="1040"
          height="624"
          ></canvas>

        <img
          src="imgs/pages/mansion.jpg"
          width="1040"
          height="380"
          alt="mansion"
          />
      </article>
    );
  }

  init() {
    canvas = document.getElementById("canvas");
    var images = images||{};
    var ss = ss||{};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", this.handleFileLoad);
    loader.addEventListener("complete", this.handleComplete);
    loader.loadManifest(lib.properties.manifest);
  }

  handleFileLoad(evt) {	
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
  }

  handleComplete(evt) {
    var stage, exportRoot;
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;

    for(var i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        "images": [queue.getResult(ssMetadata[i].name)],
        "frames": ssMetadata[i].frames
      })
    }

    exportRoot = new lib.mansion();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);	

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);	    

    (function(isResp, respDim, isScale, scaleType) {		
      var lastW, lastH, lastS=1;		
      window.addEventListener('resize', resizeCanvas);		
      resizeCanvas();		
      function resizeCanvas() {			
        var w = lib.properties.width, h = lib.properties.height;			
        var iw = window.innerWidth, ih=window.innerHeight;			
        var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
        if(isResp) {                
          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
            sRatio = lastS;                
          }				
          else if(!isScale) {					
            if(iw<w || ih<h)						
              sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==1) {					
            sRatio = Math.min(xRatio, yRatio);				
          }				
          else if(scaleType==2) {					
            sRatio = Math.max(xRatio, yRatio);				
          }			
        }			
        canvas.width = w*pRatio*sRatio;			
        canvas.height = h*pRatio*sRatio;
        canvas.style.width = w*sRatio+'px';			
        canvas.style.height = h*sRatio+'px';
        stage.scaleX = pRatio*sRatio;			
        stage.scaleY = pRatio*sRatio;			
        lastW = iw; lastH = ih; lastS = sRatio;		
      }
    })(false,'both',false,1);	
  }
}
