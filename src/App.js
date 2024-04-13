import React from "react";
import "./App.css";
import v1 from "./assets/v1.mp4";
import v2 from "./assets/v2.mp4";
import v3 from "./assets/6.mp4";
import i5 from "./assets/6.png";
import i3 from './assets/3.png'
import i4 from './assets/4.png'
import cpy from './assets/3cpy.png'
import cpy2 from './assets/3cpy2.png'
import cpy5 from './assets/cpy5.png'
import cpy6 from './assets/cpy6.png'
import cpyy from './assets/cpyy.png'

function App() {
  return (
    <div className="parent">
      <div className="v-1">
        <video src={v1} autoPlay muted loop />
        <div className="headings">
          <div className="company">ATHENYX</div>
          <div className="state">VISION BEYOND SIGHT</div>
        </div>
      </div>
      <div className="v-1">
        <video src={v2} autoPlay muted loop />
       
        <div className="content">
          <div className="title">HORUS</div>
          <p>The Eye of Horus, ancient and unyielding, gazes unwaveringly, its vigilant glare piercing through shadows, safeguarding against the encroachment of malevolence. With each blink, it dispels darkness, a sentinel of light in the eternal battle against evil.
</p>
        </div>
        
      </div>
      <img src={cpyy} className="cont"/>
      <div className="v-1 v-17">
        <img src={i3}/>
        
        <img src={cpy2}/>
        <img src={cpy}/>

      </div>
      <div className="v-1 v-16">
        <img src={i4}/>
        <img src={cpy6}/>
        <img src={cpy5}/>

      </div>
      <div className="v-1">
        <video src={v3} autoPlay muted loop/>
      </div>
      <div className="v-1">
        <img src={i5}/>
      </div>
    </div>
  );
}

export default App;
