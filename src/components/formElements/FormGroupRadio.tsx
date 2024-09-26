import React, { useState } from "react";

interface FormGroupRadioProps {
    text: string
    groupName: string
    uniqueId: string
}

const FormGroupRadio = ({ text, groupName, uniqueId }: FormGroupRadioProps) => {
    const [radioId, setRadioId] = useState('');

    const radioInfo = [
        { id: 'color-one', value: 1 },
        { id: 'color-two', value: 2 },
        { id: 'color-three', value: 3 },
        { id: 'color-four', value: 4 }
    ];

    return (
        <div className="form__group radio">
            <h3>{text}</h3>
            <ul>
                { radioInfo.map((item) => (
                    <li key={item.value}>
                        <input 
                            id={`${item.id}-${uniqueId}`} 
                            type="radio" 
                            name={groupName} 
                            checked={`${item.id}-${uniqueId}` === radioId}
                            onChange={() => setRadioId(`${item.id}-${uniqueId}`)}
                        />
                        <label htmlFor={`${item.id}-${uniqueId}`}>{item.value}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormGroupRadio;