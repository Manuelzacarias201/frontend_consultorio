import Img from "../../atoms/Img/Img.jsx";
import '../Form/Form.css';
import Button from "../../atoms/Button/Button.jsx";


const Form = ({ imgSrc, imgAlt,  buttonText, handleClick, children}) => {
    
    
    return (
        <div className="loginPage">
            <div className="contentForm">
                <div className="form">
                    <div className="user">
                        <Img src={imgSrc} alt={imgAlt} />
                    </div>
                    {children}
                    <Button className="login" text={buttonText} onClick={handleClick} />
                </div>
                <div className="imgLogo">
                    <Img src="src/assets/images/MedicaNatura(Logo).png" alt="Logo de la empresa" className="imagenLogo" />
                </div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Form;
