import React, { useEffect, useState } from "react";

interface InputGroupProps {
    labelText: string
    isTextArea: boolean
    inputType?: string
    inputName?: string
    inputValue?: string
}

const InputGroup = ({ labelText, isTextArea, inputType, inputName, inputValue="" }: InputGroupProps) => {
    const [textAreaInput, setTextAreaInput] = useState('');


    const handleTextAreaChange = (event) => {
        event.preventDefault();
        setTextAreaInput(event.target.value);
    }

    return (
        <label> {labelText}
        { isTextArea ? (
            <textarea
                name="review"
                cols={30}
                rows={10} 
                onChange={handleTextAreaChange}
            />
        ) : (
            <input
                type={inputType}
                name={inputName}
               // value={inputValue}
            />
        )}
        </label>
    );
}

export default InputGroup;