import {
    StyledCheckbox,
    StyledBox,
    StyledCheck,
    StyledLabel,
} from "./Checkbox.styles";
import { useState } from "react";

interface CheckboxProps {
    label?: string;
    uid: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, uid }) => {
    const [checked, setChecked] = useState(false);

    return (
        <StyledCheckbox>
            <div style={{ position: "relative" }}>
                <StyledBox
                    onClick={() => setChecked(!checked)}
                    $isChecked={checked}
                    id={uid}
                />
                {checked && <StyledCheck />}
            </div>
            {label && <StyledLabel htmlFor={uid}>{label}</StyledLabel>}
        </StyledCheckbox>
    );
};

export default Checkbox;
