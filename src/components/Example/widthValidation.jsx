import { useState } from "react";

function widthValidation(WrappedComponent) {

    return function EnhancedComponent(props) {

        const [errors, setErrors] = useState({});

        const validate = (fields) => {
            let newErrores = {};
            for (let field in fields) {
                if (!fields[field]) {
                    newErrores[field] = "Este campo es requerido";
                }
            }
            setErrors(newErrores)
            return Object.keys(newErrores).length === 0;
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            const isValid = validate(props.fields)
            if (isValid) {
                props.onSubmit();
            }
        }

        return (
            <WrappedComponent
                {...props}
                errors={errors}
                handleSubmit={handleSubmit}
            />
        )
    }
}

export default widthValidation;