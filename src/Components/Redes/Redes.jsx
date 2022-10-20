import instagram from "../../assets/img/instagram.png"
import email from "../../assets/img/email.png"
import linkedin from "../../assets/img/linkedin.png"
import github from "../../assets/img/github.png"
import "./Redes.css"

const Redes = () => {
    return (
        <div className='redes'>
                <a target="_blanck" href="https://www.linkedin.com/in/nahuel-alejandro-dellacecca-massola/">
                    <div>
                        <img className="img-redes" loading="lazy" src={linkedin} alt="Linkedin" />
                        <p>@Nahuel-dellacecca</p>
                    </div>
                </a>
                <a target="_blanck" href="https://mail.google.com/mail/">
                    <div>
                        <img className="img-redes" loading="lazy" src={email} alt="email" />
                        <p>nahuel.dmassola@gmail.com</p>
                    </div>
                </a>
                <a target="_blanck" href="https://github.com/NahuelMassola">
                    <div>
                        <img className="img-redes" loading="lazy" src={github} alt="github" />
                        <p>@Nahuel-massola</p>
                    </div> 
                </a>
                <a target="_blanck" href="https://www.instagram.com/chescu.dellacecca">
                    <div>
                        <img className="img-redes" loading="lazy" src={instagram} alt="instagram" />
                        <p>@Nahuel_Dellacecca</p>
                    </div>
                </a>
            </div>
    )
}

export default Redes;