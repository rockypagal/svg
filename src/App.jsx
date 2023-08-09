import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        <h1>hello</h1>
      </div>
      <svg
        className="rotatet"
        width="500"
        height="200"
        style={{ border: "0px solid red" }}
      >
        <circle
          stroke="red"
          stroke-width="5"
          cx="250"
          cy="100"
          r="50"
          fill="green"
        />
        <svg
          viewBox="0 0 100 100"
          stroke="green"
          style={{ border: "1px solid yellow" }}
        >
          {/* <rect width="100"  height="100"  stroke="blue" stroke-width="5" x="50" y="50" /> */}
          <path fill="none" d="M27,40 L73,40 L50,75 Z" stroke="red">
            {" "}
          </path>
        </svg>




      </svg>
      <svg
        className="rotate"
        width="500"
        height="200"
        style={{ border: "0px solid green" }}
      >
        <circle
          stroke="red"
          stroke-width="5"
          cx="250"
          cy="100"
          r="50"
          fill="green"
        />
        <svg
          viewBox="0 0 100 100"
          stroke="green"
          style={{ border: "1px solid yellow" }}
        >
          {/* <rect width="100"  height="100"  stroke="blue" stroke-width="5" x="50" y="50" /> */}
          <path fill="yellow" d="M27,40 L73,40 L50,75 Z" stroke="red">
            {" "}
          </path>
        </svg>
      </svg>


      <svg viewBox="0 0 200 70" style={{border:'1px solid green'}}>
      <path d="M27,40 L50,40 L77,25 L100,25  L135,40 L140,40 L145,40 L145,60 L140,60 C130,42 110,42 100,60 " fill="none" stroke="red"></path>
     
      <svg style={{border:'2px solid red'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17 17" >
 	<path id="arrow" class="st0" d="M9.3,16.4c3.2-0.4,5.8-2.9,6.2-6.1c0.5-4.2-2.8-7.7-6.9-7.8V0.6c0-0.1-0.1-0.2-0.2-0.1l-4,2.9
    	c-0.1,0-0.1,0.1,0,0.2l3.9,2.8c0.1,0.1,0.2,0,0.2-0.1V4.5c2.9,0,5.2,2.5,5,5.4c-0.2,2.5-2.2,4.5-4.8,4.7c-2.7,0.2-5-1.7-5.4-4.2
    	c-0.1-0.5-0.5-0.8-1-0.8c-0.6,0-1,0.5-1,1.1C2.1,14.2,5.4,16.9,9.3,16.4L9.3,16.4z">
    	
    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 8.4 9.5" to="0 8.4 9.5" dur="0.5s" additive="sum" repeatCount="indefinite" />
  </path>
</svg>

     
      </svg>


    </>
  );
}

export default App;
