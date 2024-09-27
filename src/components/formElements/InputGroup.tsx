import React from "react";
import { InputGroupProps } from "../../interfaces/interface";

const InputGroup = ({ 
    labelText, 
    isTextArea, 
    inputType, 
    inputName, 
    inputValue="",
    setExtraInformation,
    setUserInformation
}: InputGroupProps) => {

    const handleTextAreaChange = (event: { preventDefault: () => void; target: { value: string; }; }) => {
        event.preventDefault();
        if (setExtraInformation) 
            setExtraInformation(event.target.value);
    }

    const handleUserInfo = (event: { preventDefault: () => void; target: { value: string; }; }) => {
        event.preventDefault();
        if (setUserInformation)
            setUserInformation(event.target.value);
    }


    return (
        <label> {labelText}
        { isTextArea ? (
            <textarea
                name="review"
                cols={30}
                rows={10} 
                value={inputValue}
                onChange={handleTextAreaChange}
            />
        ) : (
            <input
                type={inputType}
                name={inputName}
                value={inputValue}
                onChange={handleUserInfo}
            />
        )}
        </label>
    );
}

export default InputGroup;