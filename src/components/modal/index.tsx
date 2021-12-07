import * as React from "react";
import {FC} from "react";
import "./index.scss";
import classes from "../../utils/classes";

interface DialogProps {
    visible: boolean;
}

const componentName = "modal";

const Modal: FC<DialogProps> =
    ({
         visible
     }) => {
        return (
            visible
                ? <div className={classes(componentName)}/>
                : null
        );
    };

export default Modal;