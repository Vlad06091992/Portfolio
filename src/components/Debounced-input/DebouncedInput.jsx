import {useEffect, useState} from "react";

export const DebounceInput = (props) => {
    const [inputValue, setInputValue] = useState(props.value || '');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(props.value)
    }, [props.value]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
         props.onChange(inputValue)
        }, 700);
        return () => clearTimeout(timeoutId);
    }, [inputValue, props]);
    return <input className={props.className} type="text" placeholder={props.placeholder} value={inputValue} onChange={handleInputChange} />;
};