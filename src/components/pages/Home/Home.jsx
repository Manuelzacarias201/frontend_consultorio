import Img from "../../atoms/Img/Img.jsx";
import Header from "../../molecules/Header/Header";
import Footer from "../../organisms/Footer/Footer.jsx";
import '../Home/Home.css'


const Home = () => {
    return (
        <>
            <Header
                logo="src/assets/images/MedicaNatura(Logo).png"
                contact="src/assets/images/avatar.png"
            />
            <div className="imgFondo">
                <Img
                    src="src/assets/images/medicaNatura(fondo).jpg"
                    alt="Foto del local"
                />
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>
    );
}

export default Home;
