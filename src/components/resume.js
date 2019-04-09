import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4uhGqQrsvQ8E4MmuO7aWiB0YklpZSeO9gpguRz6QvajXfFRwpw"
                alt="avatar"
                className="avatar-img-2"
              />
            </div>
            <h2
              style={{
                paddingTop: "2em",
                fontSize: "30px",
                fontFamily: "Anton"
              }}
            >
              Saud Maruli S
            </h2>
            <h4
              style={{
                color: "grey",
                fontSize: "20px",
                fontFamily: "Anton"
              }}
            >
              Programmer
            </h4>
            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <p>
              Officially I have never worked in any company as a programmer.
              About 3 years of experience I worked as a part-time computer
              programmer and took simple jobs both alone and with the team.
            </p>
            <p>
              And I was able to work with various front ends. Valuable team
              members who have experience diagnosing problems and developing
              solutions. A leader who is gifted with unique ideas and a history
              of successful contributions in his field. And I really hope to
              join and improve my ability in your company
            </p>
            <hr style={{ borderTop: "3px solid #833fb2" }} />{" "}
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
            <hr style={{ borderTop: "3px solid #833fb2" }} />{" "}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{ fontSize: "30px", fontFamily: "Anton" }}>Education</h2>
            <Education
              startYear={2009}
              endYear={2016}
              schoolName="University Mpu Tantular"
              schoolDescription="Bachelor of Computer Science / teknik informatika"
            />

            <hr style={{ borderTop: "3px solid #833fb2" }} />

            <h2 style={{ fontSize: "30px", fontFamily: "Anton" }}>
              Experience
            </h2>
            <Experience
              startYear={2007}
              endYear={2015}
              jobName="Non Programmer Job"
              jobDescription="Retail Worker - As Store Manager"
            />

            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Programming Part Time Jobs"
              jobDescription="Creating a Web and simple design"
            />

            <hr style={{ borderTop: "3px solid #833fb2" }} />
            <h2 style={{ fontSize: "30px", fontFamily: "Anton" }}>Skills</h2>
            <Skills skill="Javascript" progress={25} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="R A I L S" progress={50} />
            <Skills skill="R E A C T" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
