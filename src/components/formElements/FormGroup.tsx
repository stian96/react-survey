import React, { useState } from "react";
import { FormGroupProps } from "../../interfaces/interface";
import { checkboxList } from "../../data/data";

const FormGroup = ({ text, feature, onChange }: FormGroupProps) => {
    // const [selectedFeatures, setSelectedFeatures] = useState<string []>([]);

    const handleCheckboxClick = (value: string) => {
        const updatedFeatures = feature.includes(value) ? feature.filter(item => item !== value) : [...feature, value];
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
                        checked={feature.includes(item.value)}
                        onChange={() => handleCheckboxClick(item.value)}
                    />
                    <label htmlFor={`checkbox-${item.id}`}>{item.value}</label>
                </React.Fragment>
            ))}
        </div>
    );
}

export default FormGroup;