import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid >
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4uhGqQrsvQ8E4MmuO7aWiB0YklpZSeO9gpguRz6QvajXfFRwpw"
                alt="avatar"
                className="avatar-img-2"
              />
            </div>
            <h2 className="resume"
              style={{
                paddingTop: "2em",
                fontSize: "45px",
              }}
            >
              Saud Maruli S
            </h2>
            <h4
              style={{
                color: "grey",
                fontSize: "20px",
                fontFamily: "Rock Salt"
              }}
            >
              About Me
            </h4>
            <hr style={{ borderTop: "3px solid #FBAB5A" }} />
            <p>
              I am 32 years old, I have worked hard from 2008 to 2017 
              in the retail world such as mini markets, super markets, 
              factory outlets, and retail gadgets, 
              starting from salespeople to store managers and spv areas.
            </p>
            <p>
              In 2015 I continued my studies which were postponed 
              and graduated in 2017 with a degree Informatics Engineering,
              And now I have passion in technology, 
              from creating web & mobile apps to creating game art.
            </p>
            <p>
              To support my ability to take courses and bootcamp both online and offline.
            </p>
            <p>
              I have never worked at any company formally as a programmer or developer, 
              I hope to be able to join to become a part of your company team either in an 
              internship or as an employee.
            </p>
            
            <hr style={{ borderTop: "3px solid #FBAB5A" }} />{" "}
            <hp>Address : </hp>
            <p>
              Komplek Cibinong Endah - JL.Raflesia Rt 04/08 - Perumahan Taman
              Sukahati Permai Blok-J.10 Cibinong-Bogor 16913
            </p>
            <p>Phone: 0813 - 80090865</p>
            <p>Phone: 0858 - 10169910</p>
            <p>Email: sauthrully@gmail.com</p>
            <p>
              Blog: <a href="https://codinghood.herokuapp.com/">codinghood</a>
            </p>
            <hr style={{ borderTop: "3px solid #FBAB5A" }} />{" "}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ fontSize: "30px", fontFamily: "Rock Salt" }}>Education</h2>
            <Education
              startYear={2009}
              endYear={2016}
              schoolName="University Mpu Tantular"
              schoolDescription="Bachelor of informatics engineering"
            />

            <hr style={{ borderTop: "3px solid #FBAB5A" }} />

            <h2 style={{ fontSize: "30px", fontFamily: "Rock Salt" }}>
              Experience
            </h2>
            <Experience
              startYear={2007}
              endYear={2017}
              jobName="Non Programmer Job"
              jobDescription="Retail Worker"
            />

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Programming Part Time Jobs"
              jobDescription="Creating a Simple Web and Mobile App"
            />

            <hr style={{ borderTop: "3px solid #FBAB5A" }} />
            <h2 style={{ fontSize: "30px", fontFamily: "Rock Salt" }}>Skills</h2>
            <Skills skill="Javascript" progress={25} />
            <Skills skill="HTML/CSS" progress={75} />
            <Skills skill="R A I L S" progress={50} />
            <Skills skill="R E A C T" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
