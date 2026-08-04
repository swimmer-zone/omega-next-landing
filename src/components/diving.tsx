import React, { JSX } from 'react';
import Image from 'next/image';
import './_scss/diving.scss';
import diving from '../../public/images/diving.png';

export default function Diving(): JSX.Element {
    return (<>
        <div className="diving">
            <Image width={250} height={200} src={diving.src} alt="" />
        </div>
    </>);
};