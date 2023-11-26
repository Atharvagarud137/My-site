import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Rocket Share",
      description: "Developed and deployed a file hosting and sharing service using Firebase and words-aas, enabling users to upload and download files using a share code. Provided share code retrieval and deletion features and automatic file deletion after 21 days.",
      imgUrl: projImg1,
    },
    {
      title: "Face Mask Detection using MTCNN",
      description: "Created a face mask detection system using OpenCV, Keras, and TensorFlow. The system uses MTCNN to train the detection model, achieving 97% accuracy.",
      imgUrl: projImg2,
    },
    {
      title: "Fraud Detection in Credit Card Transaction",
      description: "Implemented an unsupervised autoencoder neural network in Keras to detect credit card transaction data anomalies.",
      imgUrl: projImg3,
    },
    {
      title: "Gold Price Prediction",
      description: "Designed a machine learning agent using Random Forest Regression to predict the price of gold based on historical data.",
      imgUrl: projImg4,
    },
    {
      title: "Time-Series Forecasting using XGBoost",
      description: "Developed a machine learning model to forecast energy consumption using XGBoost. The model achieved an accuracy of 95%, and can be used to optimize energy usage, plan for future demand, and make informed decisions about resource allocation.",
      imgUrl: projImg5,
    },
    {
      title: "Student Result Analysis",
      description: "Developed a machine learning model to analyze the effect of various factors on student results. The model could help students improve their performance or identify students at risk of failing.",
      imgUrl: projImg6,
    },
  ];

return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={4}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
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
                        projects.slice(0, 2).map((project, index) => {
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
                  <Tab.Pane eventKey="second">
                  <Row>
                      {
                        projects.slice(2, 4).map((project, index) => {
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
                  <Tab.Pane eventKey="third">
                  <Row>
                      {
                        projects.slice(4, 6).map((project, index) => {
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
