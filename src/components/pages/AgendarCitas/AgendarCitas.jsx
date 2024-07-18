import Form from "../../organisms/Form/Form.jsx";
import Header from "../../molecules/Header/Header.jsx";
import Nav from "../../molecules/Nav/Nav.jsx";
import Input from "../../atoms/Input/Input.jsx";

const AgendarCitas =()=>{
    return(
        <>
        <Header
        logo="src/assets/images/MedicaNatura(Logo).png"
        />
        <Nav/>
        <Form
        imgSrc="src/assets/images/cita.png"
        buttonText="AGENDAR CITA"
        >
            <Input
            type="text"
            placeholder="Nombre del paciente"
            />
            <Input
            type="date"
            />
            <Input
            type="time"/>

        </Form>


        
        
        
        
        
        </>



    );
}
export default AgendarCitas;