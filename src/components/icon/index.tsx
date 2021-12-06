import * as React from "react";
import {FC} from "react";
import "./method/importAll";

interface IconProps {
    name: string;
}

const Icon: FC<IconProps> = (props) => {
    const {name} = props;
    return (
        <span>
            <svg>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    );
};

export default Icon;