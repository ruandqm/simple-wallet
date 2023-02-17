import './style.scss'

export const Button = (props: iInput) => {
    return (
        <button
            className={`buttonContainer ${props.style}`}
            type={props.buttonType}
            onClick={props.action}>
            {props.placeholder}
        </button>
    )
}