import { useState } from "react";

function App() {

  let [html, setHtml] = useState()
  let [css, setCss] = useState()
  let [js, setJs] = useState()

  let srcResult = `
  <html>
  <body>${html === undefined ? "" : html}</body>
  <style>${css === undefined ? "" : css}</style>
  <script>${js === undefined ? "" : js}</script>
  </html>
  `


  return (
 <>
 <div className="code h-[50vh] flex">
    <div className="html w-1/3 ">
      <div className="text flex w-full bg-black py-3">
    <i className="fa-brands fa-html5 text-5xl ml-2" style={{color : "#d15e00"}}></i>
    <h1 className="text-4xl text-white ml-3">HTML</h1>
      </div>
    <textarea className="w-full h-60 outline-0 selection:bg-black h-[calc(100%-72px)]	bg-[#d15e00] p-2 text-white text-lg" style={{resize: "none"}} spellcheck="false" onChange={(e) => setHtml(e.currentTarget.value)} name="html" id="html"></textarea>
    </div>
    <div className="css w-1/3">
      <div className="text flex bg-black py-3">
    <i className="fa-brands fa-css3-alt text-5xl ml-2" style={{color : "#005eff"}}></i>
    <h1 className="text-4xl text-white ml-3">CSS</h1>
      </div>
  <textarea className="w-full h-60 outline-0 selection:bg-black h-[calc(100%-72px)]	bg-[#005eff] p-2 text-white text-lg" style={{resize: "none"}} spellcheck="false" onChange={(e) => setCss(e.currentTarget.value)} name="css" id="css" ></textarea>
    </div>
    <div className="js w-1/3">
    <div className="text flex bg-black py-3">
    <i className="fa-brands fa-js text-5xl ml-2" style={{color : "#c2bb00"}}></i>
    <h1 className="text-4xl text-white ml-3">JavaScript</h1>
    </div>
  <textarea className="w-full h-60 outline-0 selection:bg-black h-[calc(100%-72px)] bg-[#c2bb00] p-2 text-white text-lg" style={{resize: "none"}} spellcheck="false" onChange={(e) => setJs(e.currentTarget.value)} name="javascript" id="javascript" ></textarea>
    </div>
    </div>
  <iframe className="w-full h-[50vh] select-none" title="result" srcDoc={srcResult}></iframe>
 </>
  );
}

export default App;
