'use client';

import './_scss/hexagons.scss';

export default function Hexagons() {
    const result = [];

    for (let index = 0; index < 17; index++) {
        result.push(<div key={index}></div>);
    }

    return <div className="hexagon-gallery">{result}</div>;
}
