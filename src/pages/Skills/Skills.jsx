import { useContext } from "react";
import { SkillContext } from "../../Components/Context/SkillContext";
import "./skills.css"
import { Row , Container  } from "react-bootstrap";

const Skills = () => {
    const { skill } = useContext( SkillContext);

    return (
            <Container className="iconosContainer">
                <Row className="iconos">
                    {skill.map(option =>
                        <> 
                        <div key={option.id} className="col-md-3 text-center">
                            <img className="img-skill" src={option.img} alt=""></img>
                            <p className="text-white"><strong>{option.text}</strong></p>
                        </div>
                        </>
                    )}
                </Row>
            </Container>        
)}

export default Skills;      