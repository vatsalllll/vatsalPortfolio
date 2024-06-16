import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/imageEditor.jpeg";
import projImg2 from "../assets/img/Yulu.jpeg";
import projImg3 from "../assets/img/e-commerce.jpeg";
import projImg4 from "../assets/img/quizApp.jpeg";
import projImg5 from "../assets/img/travel.jpeg";
import projImg6 from "../assets/img/ticTacToe.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Image Editor",
      description: "using java basics",
      imgUrl: projImg1,
    },
    {
      title: "Yulu Project",
      description: "graphical interpretation",
      imgUrl: projImg2,
    },
    {
      title: "E-Commerce Website",
      description: "using HTML, CSS , JS",
      imgUrl: projImg3,
    },
    {
      title: "Quiz App",
      description: "Using React JS",
      imgUrl: projImg4,
    },
    {
      title: "Travel Agency Booking System",
      description: "using spring boot",
      imgUrl: projImg5,
    },
    {
      title: "Tic-Tac-Toe",
      description: "using java",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed a robust e-commerce backend system using Spring Boot and MySQL, and analyzed bike rental data to predict patterns using Poisson distribution models. Additionally, I have built several full-stack web applications utilizing React and Node.js.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
