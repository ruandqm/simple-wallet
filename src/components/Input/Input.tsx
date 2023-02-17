import './style.scss'

export const Input = (props: iInput) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`inputContainer ${props.style}`}
            onChange={props.action} />
    )
}