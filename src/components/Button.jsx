function Button({className,type="button",onClick,text}){
    return (
        <button
        className={className}
        type={type}
        >

            {text}
        </button>

    );
}
export default Button;