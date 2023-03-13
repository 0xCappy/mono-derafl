import { SVGAttributes } from "react";

type TablerIconProps = Omit<SVGAttributes<SVGElement>, 'color' | 'stroke'> & {
    color?: SVGAttributes<SVGElement>['stroke'];
    size?: SVGAttributes<SVGElement>['width'];
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
}

const IconPolygon = ({size}: TablerIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox={`0 0 ${size} ${size}`} xmlSpace="preserve">
            <g>
            <path xmlns="http://www.w3.org/2000/svg" d="M399.8,45.4L399.8,45.4C540.2,45.4,654,159.2,654,299.6l0,0c0,140.4-113.8,254.1-254.1,254.1l0,0  c-140.4,0-254.1-113.8-254.1-254.1l0,0C145.7,159.2,259.5,45.4,399.8,45.4z"/>
            </g>
        </svg>
    )
}

export default IconPolygon