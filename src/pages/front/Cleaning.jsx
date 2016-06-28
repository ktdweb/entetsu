import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import data from '../../../src/movies/seisou/seisou'

var canvas;
var lib = data.lib;
var images = data.img;
var ss = data.ss;

export default class Cleaning extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <article id="Cleaning">
        <DocumentTitle title="遠鉄アシスト | 清掃" />

        <div id="mainImage">
          <canvas
            id="canvas"
            width="1040"
            height="624"
            ></canvas>
        </div>

        <a href="/seisou_detail">
        <img
          src="imgs/pages/cleaning.jpg"
          width="1040"
          height="375"
          alt="cleaning"
          />
        </a>
      </article>
    );
  }

  init() {
    let ua = this.ua();
    if (ua.eq_IE9) {
      let mainImage = document.getElementById("mainImage");
      let canvas = document.getElementById("canvas");
      let body = document.getElementById("Home");
      let img = document.createElement("img");
      img.src = 'imgs/legacy/driving.jpg';
      img.width = 1040;
      img.height = 624;
      mainImage.removeChild(canvas);
      mainImage.appendChild(img);
    } else {
      canvas = document.getElementById("canvas");
      var images = images||{};
      var ss = ss||{};
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", this.handleFileLoad);
      loader.addEventListener("complete", this.handleComplete);
      loader.loadManifest(lib.properties.manifest);
    }
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

    exportRoot = new lib.seisou();
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

  ua() {
    return {
    lte_IE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
    lte_IE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
    lte_IE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
    lte_IE9:document.uniqueID && typeof window.matchMedia == "undefined",
    gte_IE10:document.uniqueID && window.matchMedia ,
    eq_IE8:document.uniqueID && document.documentMode === 8,
    eq_IE9:document.uniqueID && document.documentMode === 9,
    eq_IE10:document.uniqueID && document.documentMode === 10,
    eq_IE11:document.uniqueID && document.documentMode === 11,
    //        eq_IE10:document.uniqueID && window.matchMedia && document.selection,
    //        eq_IE11:document.uniqueID && window.matchMedia && !document.selection,
    //        eq_IE11:document.uniqueID && window.matchMedia && !window.ActiveXObject,
    Trident:document.uniqueID
    }
  }
}
