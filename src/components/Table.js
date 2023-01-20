import React from 'react';
// import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Table = () => {
  let combined_day4= "Bootstrap Beginner with Project - {MOUSAM}";
  let combined_d4 = "HOLA JS-5 at 6pm-7pm - {HARI}";
  let combined_day11 = "JS Advanced to Master - {HARI}";
  let combined_d11 = "HOLA JS-6 at 6pm-7pm - {HARI}";
  let combined_day18 = "ReactJS Advanced to Master at 8pm-9pm - {NABENDU}";
  let combined_d18 = "HOLA JS-7 at 6pm-7pm- {HARI}";
  let combined_day21 = "Redux Saga Premier at 9am-10am - {NABENDU}";
  let combined_d21 = "WEBDEV WORKSHOP on ZOOM at 3pm-6pm - {TEAM}";
  // let combined_day25 = "JS Advanced to Master - {HARI}";
  // let combined_d25 = "HOLA JS-8 - {HARI}";
  return (
    <div>
        {/* <h3 className="month_name">January - 2023</h3> */}
        <table className="table">
            <thead>
                <tr><td colSpan="9" align="center" bgColor="#f0e86c"><th style={{color:"#000",letterSpacing:"0.5px",fontSize:"18px"}}>JANUARY - 2023</th></td></tr>
                <tr style={{backgroundColor:"green",color:"#fff"}}><td style={{backgroundColor:"#f0e86c"}}></td><td style={{backgroundColor:"red",color:"#fff"}}>Sun</td><td style={{width:"70px"}}>Mon</td><td style={{width:"70px"}}>Tue</td><td style={{width:"70px"}}>Wed</td><td style={{width:"70px"}}>Thu</td><td style={{width:"70px"}}>Fri</td><td style={{width:"70px"}}>Sat</td></tr>
            </thead>
            <tbody>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-1</td><td id="my-element_1">1</td><td id="my-element_2">2</td><td id="my-element_3">3</td><td id="my-element_4">4</td><td id="my-element_5">5</td><td id="my-element_6">6</td><td id="my-element_7">7</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-2</td><td id="my-element_8">8</td><td id="my-element_9">9</td><td id="my-element_10">10</td><td id="my-element_11">11</td><td id="my-element_12">12</td><td id="my-element_13">13</td><td id="my-element_14">14</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-3</td><td id="my-element_15">15</td><td id="my-element_16">16</td><td id="my-element_17">17</td><td id="my-element_18">18</td><td id="my-element_19">19</td><td id="my-element_20">20</td><td id="my-element_21">21</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-4</td><td id="my-element_22">22</td><td id="my-element_23">23</td><td id="my-element_24">24</td><td id="my-element_25">25</td><td id="my-element_26">26</td><td id="my-element_27">27</td><td id="my-element_28">28</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-5</td><td id="my-element_29">29</td><td id="my-element_30">30</td><td id="my-element_31">31</td><td id="my-element_32">-</td><td id="my-element_33">-</td><td id="my-element_34">-</td><td id="my-element_35">-</td></tr>
                {/* <tr style={{backgroundColor:"#213343",color:"#fff"}}><td id="my-element_5">6</td><td id="my-element_10">13</td><td id="my-element_15">20</td><td id="my-element_20">27</td><td id="my-element_20">-</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td id="my-element_5">7</td><td id="my-element_10">14</td><td id="my-element_15">21</td><td id="my-element_20">28</td><td id="my-element_20">-</td></tr> */}
                
            </tbody>
        </table>
        {/* <p id="my-element" data-tooltip-content="HTML,CSS,JS Basics">
           23-jun
        </p><br/> */}
        {/* <p id="tool" data-tooltip-content="HTML,CSS,JS Basics 3pm-6pm">
         1-jun
        </p> */}
        {/* WEEK-1 */}
        <ReactTooltip anchorId="my-element_1" content="TypeScript Course Premier(Part-1) at 6pm-7pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_2" content="BootStrap Beginner to Advance at 4pm-5pm - {MOUSAM}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_3" content="BootStrap Beginner to Advance at 4pm-5pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_4" content={combined_day4+" and "+combined_d4}  style={{backgroundColor:"green",width:"500px",textAlign:"left",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_5" content="BootStrap Beginner to Advance at 4pm-5pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_6" content="BootStrap Beginner to Advance at 4pm-5pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_7"  content="WEBDEV WORKSHOP on ZOOM at 3pm-6pm - {TEAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
       
        {/* WEEK-2 */}
        <ReactTooltip anchorId="my-element_8" content="TypeScript Course Premier(Part-2) at 6pm-7pm - {NABENDU}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_9" content="JS Advanced to Master  - {HARI}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_10" content="JS Advanced to Master  - {HARI}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_11" content={combined_day11+" and "+combined_d11} style={{backgroundColor:"green",width:"380px",textAlign:"left",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_12" content="JS Advanced to Master - {HARI}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_13" content="JS Advanced to Master - {HARI}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_14" content="12Hrs BOOTCAMP - HTML,CSS,JS and ReactJS at 9am-9pm- {TEAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
       
        {/* WEEK-3 */}
        <ReactTooltip anchorId="my-element_15" content="-" style={{backgroundColor:"green"}}/>
        <ReactTooltip anchorId="my-element_16" content="ReactJS Advanced to Master at 8pm-9pm - {NABENDU}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_17" content="ReactJS Advanced to Master at 8pm-9pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_18" content={combined_day18+" and "+combined_d18} style={{backgroundColor:"green",width:"550px",textAlign:"left",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_19" content="ReactJS Advanced to Master at 8pm-9pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_20" content="ReactJS Advanced to Master at 8pm-9pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_21" content={combined_day21+" and "+combined_d21} style={{backgroundColor:"green",fontSize:"20px",width:"550px",textAlign:"left"}}/>
      
       {/* WEEK-4 */}
        <ReactTooltip anchorId="my-element_22" content="Complete TypeScript at 9am-1pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_23" content="NodeJS Beginners to Advance at 8pm-9pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_24" content="NodeJS Beginners to Advance at 8pm-9pm- {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_25" content="HOLA JS-8 at 6pm-7pm - {HARI}" style={{backgroundColor:"green",width:"350px",textAlign:"left",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_26" content="NodeJS Beginners to Advance at 8pm-9pm- {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_27" content="NodeJS Beginners to Advance at 8pm-9pm- {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_28" content="12Hrs BOOTCAMP - HTML,CSS,JS with Projects at 9am-9pm - {TEAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
         
      {/* WEEK-5 */}
        <ReactTooltip anchorId="my-element_29" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_30" content="CSS Beginner to Master at 5pm-6pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_31" content="CSS Beginner to Master at 5pm-6pm - {MOUSAM}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        {/* ---- */}
        <ReactTooltip anchorId="my-element_32" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_33" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_34" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_35" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
   </div>
  )
}

export default Table;