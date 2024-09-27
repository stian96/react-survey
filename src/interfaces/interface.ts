export interface InputGroupProps {
    labelText: string
    isTextArea: boolean
    inputType?: string
    inputName?: string
    inputValue?: string
    setExtraInformation?: (text: string) => void 
    setUserInformation?: (text: string) => void
}

export interface FormGroupProps {
    text: string
    onChange: (selectedFeatures: string[]) => void
}
