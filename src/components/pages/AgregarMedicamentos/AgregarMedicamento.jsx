import Header from "../../molecules/Header/Header";
import Nav from "../../molecules/Nav/Nav";
import Form from "../../organisms/Form/Form";
import Input from "../../atoms/Input/Input.jsx";

const AgregarMedicamento =()=>{

    return(
        <>
        <Header
                logo="src/assets/images/MedicaNatura(Logo).png"
            />
            <Nav/>
            <Form
            imgSrc="src/assets/images/prescripcion.png"
            buttonText="AGREGAR"

            >
                <Input
                type="text" placeholder="Nombre"/>
                <Input
                type="text" placeholder="Cantidad"/>
                <p>Fecha de caducidad:</p>
                <Input
                type="date" placeholder="Cadudidad"/>
                <Input
                type="text" placeholder="Uso"/>

            </Form>


        
        </>
    );
}
export default AgregarMedicamento;