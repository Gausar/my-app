import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MyPieChart } from './PieChart';

export const Skills = () => {
    const responsive = {
        superLargeDesktop : {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop : {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet : {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0 },
            items: 1
        }
    };
    const skill_ml = [
        { value: 10, label: 'skilled', color: '#d63384' },
        { value: 90, label: "Unskilled", color: 'black'},
    ]
    const skill_web = [
        { value: 30, label: 'skilled', color: '#d63384' },
        { value: 70, label: "Unskilled", color: 'black'},
    ]
    const skill_lang = [
        { value: 50, label: 'skilled', color: '#d63384' },
        { value: 50, label: "Unskilled", color: 'black'},
    ]
    const skill_data = [
        { value: 40, label: 'skilled', color: '#d63384' },
        { value: 60, label: "Unskilled", color: 'black'},
    ]
    const settings = {
        margin: { right: 5},
        width: 180,
        height: 180,
        hideLegend: true,
    }
   
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I am improving my skills...</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <MyPieChart data={skill_ml} settings={settings} value={10} label="skilled" title="ML/AI" />
                                    <MyPieChart data={skill_web} settings={settings} value={30} label="skilled" title="Web develop" />
                                    <MyPieChart data={skill_data} settings={settings} value={40} label="skilled" title="Data Analysis" />
                                    <MyPieChart data={skill_lang} settings={settings} value={50} label="skilled" title="Language skills" />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}