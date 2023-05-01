import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";



const Table = () => {
  // var day026 = "React Native Beginner to Advance at 5pm-6pm - {NABENDU}";
  // var day26 = "Career doubt session - 8:30pm to 9:30pm - {NABENDU}";
  return (
    <div>
      {/* <h3 className="month_name">January - 2023</h3> */}
      <table className="table">
        <thead>
          <tr>
            <td colSpan="9" align="center" bgColor="#f0e86c">
              <th
                style={{
                  color: "#000",
                  letterSpacing: "0.5px",
                  fontSize: "18px",
                }}
              >
                MAY - 2023
              </th>
            </td>
          </tr>
          <tr style={{ backgroundColor: "green", color: "#fff" }}>
            <td style={{ backgroundColor: "#f0e86c" }}></td>
            <td style={{ backgroundColor: "red", color: "#fff" }}>Sun</td>
            <td style={{ width: "70px" }}>Mon</td>
            <td style={{ width: "70px" }}>Tue</td>
            <td style={{ width: "70px" }}>Wed</td>
            <td style={{ width: "70px" }}>Thu</td>
            <td style={{ width: "70px" }}>Fri</td>
            <td style={{ width: "70px" }}>Sat</td>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "#213343", color: "#fff" }}>
            <td className="weeks">WEEK-1</td>
            <td id="mar_26">30</td>
            <td id="my-element_1">1</td>
            <td id="my-element_2">2</td>
            <td id="my-element_3">3</td>
            <td id="my-element_4">4</td>
            <td id="my-element_5">5</td>
            <td id="my-element_6">6</td>
          </tr>
          <tr style={{ backgroundColor: "#213343", color: "#fff" }}>
            <td className="weeks">WEEK-2</td>
            <td id="my-element_7">7</td>
            <td id="my-element_8">8</td>
            <td id="my-element_9">9</td>
            <td id="my-element_10">10</td>
            <td id="my-element_11">11</td>
            <td id="my-element_12">12</td>
            <td id="my-element_13">13</td>
          </tr>
          <tr style={{ backgroundColor: "#213343", color: "#fff" }}>
            <td className="weeks">WEEK-3</td>
            <td id="my-element_14">14</td>
            <td id="my-element_15">15</td>
            <td id="my-element_16">16</td>
            <td id="my-element_17">17</td>
            <td id="my-element_18">18</td>
            <td id="my-element_19">19</td>
            <td id="my-element_20">20</td>
          </tr>
          <tr style={{ backgroundColor: "#213343", color: "#fff" }}>
            <td className="weeks">WEEK-4</td>
            <td id="my-element_21">21</td>
            <td id="my-element_22">22</td>
            <td id="my-element_23">23</td>
            <td id="my-element_24">24</td>
            <td id="my-element_25">25</td>
            <td id="my-element_26">26</td>
            <td id="my-element_27">27</td>
          </tr>
          <tr style={{ backgroundColor: "#213343", color: "#fff" }}>
            <td className="weeks">WEEK-5</td>
            <td id="my-element_28">28</td>
            <td id="my-element_29">29</td>
            <td id="my-element_30">30</td>
            <td id="my-element_31">31</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {/* <p id="my-element" data-tooltip-content="HTML,CSS,JS Basics">
           23-jun
        </p><br/> */}
      {/* <p id="tool" data-tooltip-content="HTML,CSS,JS Basics 3pm-6pm">
         1-jun
        </p> */}
      {/* WEEK-1 */}
      <ReactTooltip
        anchorId="mar_26"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_1"
        content="JS Beginners to Advanced from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_2"
        content="JS Beginner to Advance from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_3"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_4"
        content="JS Beginner to Advance from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_5"
        content="JS Beginner to Advance from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_6"
        content="4Hrs WORKSHOP - HTML, CSS Complete from 3 pm to 7 pm - {NABENDU & MOUSAM}"
        place="left"
        style={{ backgroundColor: "green", fontSize: "20px", width: "300px" }}
      />

      {/* WEEK-2 */}
      <ReactTooltip
        anchorId="my-element_7"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_8"
        content="CSS Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_9"
        content="CSS Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_10"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_11"
        content="CSS Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_12"
        content="CSS Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_13"
        content="4Hrs WORKSHOP - HTML, JAVASCRIPT Complete from 3 pm to 7 pm - {NABENDU & HARI}"
        place="left"
        style={{ backgroundColor: "green", fontSize: "20px", width: "300px" }}
      />

      {/* WEEK-3 */}
      <ReactTooltip
        anchorId="my-element_14"
        content="-"
        place="top"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_15"
        content="BOOTSTRAP Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_16"
        content="BOOTSTRAP Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_17"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_18"
        content="BOOTSTRAP Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_19"
        content="BOOTSTRAP Beginners to Advanced from 4 pm to 5 pm - {MOUSAM}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_20"
        content="12Hrs BOOTCAMP - HTML,CSS,JS with projects from 9 am to 9 pm - {TEAM}"
        place="left"
        style={{ backgroundColor: "green", fontSize: "20px", width: "300px" }}
      />

      {/* WEEK-4 */}
      <ReactTooltip
        anchorId="my-element_21"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_22"
        content="PostgreSQL Beginners to Advanced from 8 pm to 9 pm - {NABENDU}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_23"
        content="PostgreSQL Beginners to Advanced from 8 pm to 9 pm - {NABENDU}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_24"
        content="Google Drive Clone from 8 pm to 9 pm - {NABENDU}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_25"
        content="PostgreSQL Beginners to Advanced from 8 pm to 9 pm - {NABENDU}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_26"
        content="PostgreSQL Beginners to Advanced from 8 pm to 9 pm - {NABENDU}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_27"
        content="4Hrs WORKSHOP - HTML, CSS, JAVASCRIPT Projects from 3 pm to 7 pm - {TEAM}"
        place="left"
        style={{ backgroundColor: "green", fontSize: "20px", width: "300px" }}
      />

      {/* WEEK-5 */}
      <ReactTooltip
        anchorId="my-element_28"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="my-element_29"
        content="ReactJS Beginners to Advanced from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_30"
        content="ReactJS Beginners to Advanced from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px", width:"300px" }}
      />
      <ReactTooltip
        anchorId="my-element_31"
        content="-"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      <ReactTooltip
        anchorId="june_1"
        content="ReactJS Beginners to Advanced from 8:30 pm to 9:30 pm - {HARI}"
        style={{ backgroundColor: "green", fontSize: "20px" }}
      />
      {/* <ReactTooltip anchorId="my-element_28" content="React Native Beginners to Advanced at 5pm-6pm - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px"}}/> */}
      {/* ---- */}
      {/* <ReactTooltip anchorId="my-element_29" content="4Hrs WORKSHOP - HTML, CSS, JavaScript and ReactJS - 3pm to 7pm - {TEAM}" place="left" style={{backgroundColor:"green",fontSize:"20px", width:"300px"}}/>
        <ReactTooltip anchorId="my-element_30" content="Google Drive in Clone ReactJS - 9am to 10am - {NABENDU}" style={{backgroundColor:"green",fontSize:"20px", width:"300px"}}/> */}
    </div>
  );
};

export default Table;
