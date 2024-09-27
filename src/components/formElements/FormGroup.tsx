import React, { useState } from "react";
import { FormGroupProps } from "../../interfaces/interface";
import { checkboxList } from "../../data/data";

const FormGroup = ({ text, onChange }: FormGroupProps) => {
    const [selectedFeatures, setSelectedFeatures] = useState<string []>([]);

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