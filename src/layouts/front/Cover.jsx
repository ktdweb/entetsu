import React from 'react'
import Cleaning from '../../movies/cleaning/cleaning'
import Building from '../../movies/building/building'
import Mansion  from '../../movies/mansion/mansion'
import Driving  from '../../movies/driving/driving'

import UserAgent from '../../components/UserAgent'

var bgpath  = '../imgs/pages/covers/';

var cover, canvas, body;
var page, lib, images, ss;

var data = {
  cleaning: Cleaning,
  building: Building,
  mansion: Mansion,
  driving: Driving
};

export default class Cover extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      page: props.route.page,
      width: 960,
      height: 580
    };
  }

  componentWillReceiveProps(props) {
    this.updateState(props);
  }

  componentDidMount() {
    this.updateState();
  }

  componentWillUnmount() {}

  updateState(props = null) {
    if (props) {
      page = props.route.page;
    } else {
      page = this.props.route.page;
    }
    lib = data[page].lib;
    images = data[page].img;
    ss = data[page].ss;
    let src = 'src/movies/' + page + '/images/' + page + '.jpg';
    this.setState({
      src: src,
    }, this.init());
  }

  render() {
    return (
        <div id="cover">
          <canvas
            id="canvas"
            width={this.state.width}
            height={this.state.height}
            ></canvas>
        </div>
    );
  }

  init() {
    let ua = new UserAgent();

    cover = document.getElementById("cover");
    canvas = document.getElementById("canvas");
    body = document.getElementById("Home");

    let cls = cover.className;
    console.log(cls);
    if (cls) {
      cover.classList.remove(cls);
    }
    cover.classList.add('bg-' + page);

    if (ua.eq_IE9 || ua.eq_IE10) {
      this.altCanvas();
    } else {
      this.setMovie();
    }
  }

  altCanvas() {
      let img = document.createElement("img");
      img.src = this.state.src;
      img.width = this.state.width;
      img.height = this.state.height;

      cover.removeChild(canvas);
      cover.appendChild(img);
  }

  setMovie() {
      if (lib != undefined) {
        canvas = document.getElementById("canvas");
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", this.fileLoad);
        loader.addEventListener("complete", this.complete);
        loader.loadManifest(
          lib.properties.manifest
        );
      }
  }

  fileLoad(e) {	
    if (e.item.type == "image") {
      images[e.item.id] = e.result;
    }	
  }

  complete(e) {
    let stage;
    let exportRoot = {
      cleaning: undefined,
      building: undefined,
      mansion: undefined,
      driving: undefined
    };

    let queue = e.target;
    let ssMetadata = lib.ssMetadata;

    for(var i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        "images": [queue.getResult(ssMetadata[i].name)],
        "frames": ssMetadata[i].frames
      })
    }

    exportRoot = new lib[page]();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);	

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.removeAllEventListeners();
    createjs.Ticker.addEventListener("tick", stage);

    (function(isResp, respDim, isScale, scaleType) {
      let lastW, lastH, lastS=1;
      resizeCanvas();

      function resizeCanvas() {
        let w = lib.properties.width;
        let h = lib.properties.height;
        let iw = window.innerWidth;
        let ih = window.innerHeight;
        var pRatio = window.devicePixelRatio;
        let xRatio=iw/w, yRatio=ih/h, sRatio=1;

        if(isResp) {
          if(
            (respDim=='width'&&lastW==iw) ||
            (respDim=='height'&&lastH==ih)
          ) {
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
