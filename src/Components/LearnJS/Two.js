import React from 'react';
import  EZUIKit from 'ezuikit-js';

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.playr = null; //定义播放器
  }
  componentDidMount(){

    // 直播
    const player1 = new EZUIKit.EZUIPlayer('myPlayer1');
    player1.on('log');


    // 监控
    // const decoder = new EZUIKit.EZUIPlayer({
    //   id: 'playWind',
    //   autoplay: true,
    //   url: 'ezopen://open.ys7.com/D33183516/1.hd.live',
    //   accessToken: 'at.49gpxbs2c8ho2k16dqj9k1x59fvunq2g-8s1y4gji2y-0e8wug5-pfpupswhf',
    //   decoderPath: '',
    //   width: 600,
    //   height: 400,
    //   // handleError: handleError,
    //   // handleSuccess: handleSuccess,
    // });
    // decoder.on('log');

    
  }
  render(){
    return(
      <div className="demo">
        <h2>视频模式使用示例：</h2>

        {/* 监控 */}
        <video id="myPlayer1" autoPlay
              src="https://flvopen.ys7.com:9188/openlive/b7f69a71d5ca497c999946cab080c4c0.flv" controls playsInline
              webkit-playsinline>
            </video>
            <iframe src="http://127.0.0.1:5500/monitor.html" width="800" height="500" frameborder="0"></iframe>
        {/* <div id="playWind" style={{width: '400px',height: '300px',backgroundColor: 'aquamarine'}}></div> */}

      </div>
    )
  }
}


export default App;
