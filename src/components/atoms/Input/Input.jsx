import '../Input/Input.css'
const Input = (props)=>{
    return (
        <>
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        className="input"
        />
        
        
        </>
    );
}
export default Input;