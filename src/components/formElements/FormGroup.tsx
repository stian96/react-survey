import React, { useState } from "react";

interface FormGroupProps {
    text: string
    onChange: (selectedFeatures: string[]) => void
}

const FormGroup = ({ text, onChange }: FormGroupProps) => {
    const [selectedFeatures, setSelectedFeatures] = useState<string []>([]);

    const checkboxList = [
        {id: 1, value: "It's yellow!"}, 
        {id: 2, value: "It squeaks!"}, 
        {id: 3, value: "It has a logo!"}, 
        {id: 4, value: "Its big!"}
    ];

    const handleCheckboxClick = (value: string) => {
        const updatedFeatures = selectedFeatures.includes(value) ? selectedFeatures.filter(item => item !== value) : [...selectedFeatures, value];
        setSelectedFeatures(updatedFeatures);
        onChange(updatedFeatures); 
    };

    return (
        <div className="form__group">
            <h3>{text}</h3>
            { checkboxList.map((item) => (
                <React.Fragment key={item.id}>
                    <input 
                        type="checkbox"
                        name={`checkbox-${item.id}`}
                        checked={selectedFeatures.includes(item.value)}
                        onChange={() => handleCheckboxClick(item.value)}
                    />
                    <label htmlFor={`checkbox-${item.id}`}>{item.value}</label>
                </React.Fragment>
            ))}
        </div>
    );
}

export default FormGroup;