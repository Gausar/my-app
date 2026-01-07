import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PieChart } from '@mui/x-charts/PieChart';

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
    const centerTextPlugin = {
        id: 'centerText',
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx } = chart;
          ctx.save();
          
          // Calculate center coordinates
          const xCoord = chart.getDatasetMeta(0).data[0].x;
          const yCoord = chart.getDatasetMeta(0).data[0].y;
      
          ctx.font = '20px sans-serif';
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('ML/AI', xCoord, yCoord);
          ctx.restore();
        },
      };
    return(
        <section className="skill" id="skills">
            {/* <img className="background-image-skills-right" src={colorSharp2} alt="skills background" /> */}
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>I am improving my skills...</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <PieChart series={[{ innerRadius: 60, outerRadius: 80, data: skill_ml, arcLabel: 'value', cornerRadius: 80, paddingAngle: 3}]}
                                    {...settings} plugins={[centerTextPlugin]} />
                                    <h6 className="mt-2">ML/AI</h6>
                                </div>
                                <div className="item">
                                    <PieChart series={[{ innerRadius: 60, outerRadius: 80, data: skill_web, arcLabel: 'value', cornerRadius: 80, paddingAngle: 3}]}
                                    {...settings} />
                                    <h6 className="mt-2">Web develop</h6>
                                </div>
                                <div className="item">
                                    <PieChart series={[{ innerRadius: 60, outerRadius: 80, data: skill_data, arcLabel: 'value', cornerRadius: 80, paddingAngle: 3}]}
                                    {...settings} />
                                    <h6 className="mt-2">Data Analysis</h6>
                                </div>
                                <div className="item">
                                    <PieChart series={[{ innerRadius: 60, outerRadius: 80, data: skill_lang, arcLabel: 'value', cornerRadius: 80, paddingAngle: 3}]}
                                    {...settings} />
                                    <h6 className="mt-2">Language skills</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} alt="skills background" /> */}
        </section>
    )
}