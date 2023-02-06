import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Table = () => {
  var day04 = "Redux Crash Course at 9am-10am - {NABENDU}";
  var day4 = "WORKSHOP On Zoom at 3pm-6pm - {TEAM}";
  return (
    <div>
        {/* <h3 className="month_name">January - 2023</h3> */}
        <table className="table">
            <thead>
                <tr><td colSpan="9" align="center" bgColor="#f0e86c"><th style={{color:"#000",letterSpacing:"0.5px",fontSize:"18px"}}>FEBRUARY - 2023</th></td></tr>
                <tr style={{backgroundColor:"green",color:"#fff"}}><td style={{backgroundColor:"#f0e86c"}}></td><td style={{backgroundColor:"red",color:"#fff"}}>Sun</td><td style={{width:"70px"}}>Mon</td><td style={{width:"70px"}}>Tue</td><td style={{width:"70px"}}>Wed</td><td style={{width:"70px"}}>Thu</td><td style={{width:"70px"}}>Fri</td><td style={{width:"70px"}}>Sat</td></tr>
            </thead>
            <tbody>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-1</td><td id="my-element_29">29</td><td id="my-element_30">30</td><td id="my-element_31">31</td><td id="my-element_1">1</td><td id="my-element_2">2</td><td id="my-element_3">3</td><td id="my-element_4">4</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-2</td><td id="my-element_5">5</td><td id="my-element_6">6</td><td id="my-element_7">7</td><td id="my-element_8">8</td><td id="my-element_9">9</td><td id="my-element_10">10</td><td id="my-element_11">11</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-3</td><td id="my-element_12">12</td><td id="my-element_13">13</td><td id="my-element_14">14</td><td id="my-element_15">15</td><td id="my-element_16">16</td><td id="my-element_17">17</td><td id="my-element_18">18</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-4</td><td id="my-element_19">19</td><td id="my-element_20">20</td><td id="my-element_21">21</td><td id="my-element_22">22</td><td id="my-element_23">23</td><td id="my-element_24">24</td><td id="my-element_25">25</td></tr>
                <tr style={{backgroundColor:"#213343",color:"#fff"}}><td className="weeks">WEEK-5</td><td id="my-element_26">26</td><td id="my-element_27">27</td><td id="my-element_28">28</td><td id="my-element_30">-</td><td id="my-element_31">-</td><td id="my-element_32">-</td><td id="my-element_33">-</td></tr>
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
        <ReactTooltip anchorId="my-element_29" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_30" content="CSS Beginner at 7:30pm-8:30pm - {MOUSAM}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_31" content="CSS Beginner at 7:30pm-8:30pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_1" content="HOLA JS at 7pm-8pm - {HARI}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_2" content="CSS Beginner at 7:30pm-8:30pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_3" content="CSS Beginner at 7:30pm-8:30pm - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_4"  content={day04+" "+day4} place="left" style={{backgroundColor:"green",fontSize:"20px",width:"300px"}}/>
       
        {/* WEEK-2 */}
        <ReactTooltip anchorId="my-element_5" content="TypeScript tutorial-2 at 9am-10am - {NABENDU}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_6" content="Bootstrap Beginner to Advance at 5pm-6pm  - {MOUSAM}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_7" content="Bootstrap Beginner to Advance at 5pm-6pm  - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_8" content="HOLA JS at 7pm-8pm - {HARI}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_9" content="Bootstrap Beginner to Advance at 5pm-6pm  - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_10" content="Bootstrap Beginner to Advance at 5pm-6pm  - {MOUSAM}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_11" content="4Hrs BOOTCAMP - HTML,CSS,JS with Projects at 3pm-7pm - {TEAM}" place="left" style={{backgroundColor:"green",fontSize:"20px",width:"300px"}}/>
       
        {/* WEEK-3 */}
        <ReactTooltip anchorId="my-element_12" content="TypeScript tutorial-3 at 9am-10am - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_13" content="Angular JS at 8:30pm-9:30pm - {NABENDU}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_14" content="Angular JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_15" content="Angular JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_16" content="Angular JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_17" content="Angular JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_18" content="4Hrs WORKSHOP - HTML,CSS,JS and React at 3pm-7pm - {TEAM}" place="left" style={{backgroundColor:"green",fontSize:"20px",width:"300px"}}/>
      
       {/* WEEK-4 */}
        <ReactTooltip anchorId="my-element_19" content="PostgreSQL with PERN at 9am-10am - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_20" content="Next JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_21" content="Next JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_22" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_23" content="Next JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_24" content="Next JS at 8:30pm-9:30pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_25" content="12Hrs BOOTCAMP - HTML,CSS,JS and ENGLISH at 9am-9pm - {TEAM}" place="left" style={{backgroundColor:"green",fontSize:"20px",width:"300px"}}/>
         
      {/* WEEK-5 */}
        <ReactTooltip anchorId="my-element_26" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_27" content="JavaScript Beginner to Advance at 7pm-8pm - {HARI}" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_28" content="JavaScript Beginner to Advance at 7pm-8pm - {HARI}"  style={{backgroundColor:"green",fontSize:"20px"}}/>
        {/* ---- */}
        <ReactTooltip anchorId="my-element_32" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_33" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_34" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
        <ReactTooltip anchorId="my-element_35" content="-" style={{backgroundColor:"green",fontSize:"20px"}}/>
   </div>
  )
}

export default Table;