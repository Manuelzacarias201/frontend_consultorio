import Header from '../../molecules/Header/Header';
import Nav from '../../molecules/Nav/Nav';
import '../SecretarioHome/SecretarioHome.css'
import Footer from "../../organisms/Footer/Footer.jsx";
const SecretarioHome =()=>{

    return(
        <>
        <Header
        logo="src/assets/images/MedicaNatura(Logo).png"
        />
        <Nav/>
        <div className="image-container">
                <img src="src/assets/images/img1.png" alt="Imagen 1" className="image-item" />
                <img src="src/assets/images/imagen2.png" alt="Imagen 2" className="image-item" />
                <img src="src/assets/images/img3.png" alt="Imagen 3" className="image-item" />
                <img src="src/assets/images/img4.png" alt="Imagen 3" className="image-item" />     
            </div>
        <div className='footer'>
        <Footer/>
        </div>
       
        
        
        </>
    )
}
export default SecretarioHome;