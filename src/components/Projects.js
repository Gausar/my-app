import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/chat.png';
import projImg2 from '../assets/img/chatbot.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';



export const Projects = () => {

    const projects = [
        {
            title: "Chatbot NUM",
            description: "It was created to make the internal rules and regulations of the National University of Mongolia accessible to students and to resolve any problems that may arise.",
            imgUrl: projImg1,
        },
        {
            title: "Chatbot",
            description: "Machine Learning and Artificial Intellegence, Made out of curiosity, thanks to the free language model from Google Gemini.",
            imgUrl: projImg2,
        },
        {
            title: "Chatbot NUM",
            description: "Future projects may placed here.. Insha Allah",
            imgUrl: projImg1,
        },
        {
            title: "Chatbot NUM",
            description: "Future projects may placed here.. Insha Allah",
            imgUrl: projImg1,
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>The things I've done don't end there. I'm too lazy to include them here. </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tan one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Hiihiihi</Tab.Pane>
                        <Tab.Pane eventKey="third">ohohohho</Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}