interface iAction {
    type: string | boolean,
    payload?: any
}

interface iInput {
    type?: string,
    buttonType?: "button" | "reset" | "submit" | undefined,
    style: string,
    placeholder?: string,
    action?: any
}