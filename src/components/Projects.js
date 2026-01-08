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
            link: "https://num-chatbot.vercel.app/",
        },
        {
            title: "Chatbot",
            description: "Machine Learning and Artificial Intellegence, Made out of curiosity, thanks to the free language model from Google Gemini.",
            imgUrl: projImg2,
            link: "https://chatbot-gausars-projects.vercel.app/",
        },
        {
            title: "No title",
            description: "Future projects may placed here..",
            imgUrl: projImg1,
            link: "",
        },
        {
            title: "No title",
            description: "Future projects may placed here..",
            imgUrl: projImg1,
            link: "",
        },
    ];
    return (
        <section className="project" id="Projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Please click on project, then you will be redirected to the project's website.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">2025</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">2026</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">2027</Nav.Link>
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
            <img className="background-image-projects-right" src={colorSharp2} alt="projects background" />
        </section>
    )
}