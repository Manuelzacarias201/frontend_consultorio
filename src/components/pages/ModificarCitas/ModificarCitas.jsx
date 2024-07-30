import Form from "../../organisms/Form/Form";
import Header from "../../molecules/Header/Header";
import Nav from "../../molecules/Nav/Nav";
import Input from "../../atoms/Input/Input";


const ModificarCitas =()=>{

    return(
        <>
         <Header
                logo="src/assets/images/MedicaNatura(Logo).png"
            />
            <Nav/>
            <Form
        imgSrc="src/assets/images/cita.png"
        buttonText="Modificar"
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
export default ModificarCitas;