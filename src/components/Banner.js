import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;
    
    const tick = useCallback(() => {
        const toRotate = ["ML/AI Engineer", "Data scientist", "Web Developer"];

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText === fullText ){
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [text, isDeleting, loopNum, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [tick, delta])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Hi, My name is Gausar.</span>
                        <h1>{`I am a future`}<br/><span className="wrap">{text}</span></h1>
                        <p>Welcome to my portfolio website! <br/> Always try to turn into a green leaf.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}