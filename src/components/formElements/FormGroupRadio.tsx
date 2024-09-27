import React, { useState } from "react";

interface FormGroupRadioProps {
    text: string
    groupName: string
    uniqueId: string
    setRating: (value: number) => void
}

const FormGroupRadio = ({ text, groupName, uniqueId, setRating }: FormGroupRadioProps) => {
    const [radioId, setRadioId] = useState('');

    const radioInfo = [
        { id: 'color-one', value: 1 },
        { id: 'color-two', value: 2 },
        { id: 'color-three', value: 3 },
        { id: 'color-four', value: 4 }
    ];

    const handleChange = (value: number, radioId: string) => {
        setRadioId(radioId);
        setRating(value);
    };

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
                            onChange={() => handleChange(item.value, `${item.id}-${uniqueId}`)}
                        />
                        <label htmlFor={`${item.id}-${uniqueId}`}>{item.value}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FormGroupRadio;