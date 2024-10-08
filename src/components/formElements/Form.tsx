import React, { useEffect, useState } from "react";
import FormGroup from "./FormGroup";
import InputGroup from "./InputGroup";
import FormGroupRadio from "./FormGroupRadio";

const Form = ({ onSubmit }) => {
    const [bestFeatures, setBestFeatures] = useState<string[]>([]);
    const [worstFeatures, setWorstFeatures] = useState<string[]>([]);
    const [consistencyRating, setConsistencyRating] = useState<number>(0);
    const [colorRating, setColorRating] = useState<number>(0);
    const [logoRating, setLogoRating] = useState<number>(0);
    const [textAreaInput, setTextAreaInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [radioIds, setRadioIds] = useState<string[]>([]);

    const formGroup = [
        { id: 1, text: "What would you say that are the best features of your rubber duck?", feature: bestFeatures, setState: setBestFeatures },
        { id: 2, text: "What would you say that are the worst bits of your rubber duck?", feature: worstFeatures, setState: setWorstFeatures },
    ]

    const inputGroupInfo = [
        { id: 1, label: "Put your name here (if you feel like it):", type: 'text', name: 'username', state: usernameInput,  setState: setUsernameInput },
        { id: 2, label: "Leave us your email pretty please??", type: "email", name: "email", state: emailInput, setState: setEmailInput }
    ];

    const radioSections = [
        { id: 1, title: "How do you rate your rubber duck consistency?", uniqueid: "first", setRating: setConsistencyRating },
        { id: 2, title: "How do you rate your rubber duck color?", uniqueid: "second", setRating: setColorRating },
        { id: 3, title: "How do you rate your rubber duck logo?", uniqueid: "third", setRating: setLogoRating}
    ];

    const submit = (event) => {
        event.preventDefault();
        const answers = {
            bestFeatures: bestFeatures,
            worstFeatures: worstFeatures,
            consistencyRating: consistencyRating,
            colorRating: colorRating,
            logoRating: logoRating,
            username: usernameInput,
            email: emailInput,
            additionalInfo: textAreaInput
        };
        onSubmit(answers);
        reset();
    }

    const reset = () => {
        setBestFeatures([]);
        setWorstFeatures([]);
        setColorRating(0);
        setConsistencyRating(0);
        setLogoRating(0);
        setTextAreaInput('');
        setUsernameInput('');
        setEmailInput('');
        setRadioIds([]);
    }

    return (
        <form className="form">
            <h2>Tell us what you think about your rubber duck!</h2>
            { formGroup.map((item) => (
                <FormGroup 
                    key={item.id}
                    text={item.text}
                    feature={item.feature}
                    onChange={item.setState}
                />
            ))}
            { radioSections.map((radioItem) => (
                <FormGroupRadio 
                    key={radioItem.id} 
                    text={radioItem.title} 
                    groupName={`group-${radioItem.id}`}
                    uniqueId={radioItem.uniqueid}
                    radioIds={radioIds}
                    setRadioIds={setRadioIds}
                    setRating={radioItem.setRating}
                />
            ))}
            <InputGroup 
                labelText="What else have you got to say about your rubber duck?"
                isTextArea={true}
                inputValue={textAreaInput}
                setExtraInformation={setTextAreaInput}
            />
            { inputGroupInfo.map((group) => (
                <InputGroup 
                    key={group.id}
                    labelText={group.label}
                    isTextArea={false}
                    inputType={group.type}
                    inputName={group.name}
                    inputValue={group.state}
                    setUserInformation={group.setState}
                />
            ))}
            <input 
                className="form__submit" 
                type="submit" 
                value="Submit Survey!" 
                onClick={submit}
            />
        </form>
    );
}

export default Form;