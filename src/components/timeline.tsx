'use client';

import React, { JSX } from 'react';
import Image from 'next/image';

import './_scss/timeline.scss';

export default function Timeline(): JSX.Element {
    return (
        <div className="timeline">
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2019-08">
                            <span className="tag">job</span> August 2019 - Now
                        </time><br/>
                        <strong>iO, Eindhoven</strong>
                    </span>
                </div>
                <p>PHP Programmer, Development and maintenance Magento, Custom modules for clients</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2022-09">
                            <span className="tag">study</span> September 2022 - November 2024
                        </time><br/>
                        <strong>Avans+, Amsterdam [HBO Software Engineering]</strong>
                    </span>
                </div>
                <p>Graduated with Bachelor&#39;s Degree</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2011-06">
                            <span className="tag">job</span> July 2010 - July 2019
                        </time><br/>
                        <strong>Medusa Media Usage Advice, Eindhoven</strong>
                    </span>
                </div>
                <p>PHP Programmer, Development and maintenance custom CMS, Custom applications for clients</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2010-05">
                            <span className="tag">job</span> May 2010 - June 2010
                        </time><br/>
                        <strong>BliXem Internet, Nijmegen</strong>
                    </span>
                </div>
                <p>PHP Programmer, Development and maintenance of WordPress</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2004-09">
                            <span className="tag">study</span> September 2004 - June 2007
                        </time><br/>
                        <strong>Fontys, Venlo [HBO Mechatronics]</strong>
                    </span>
                </div>
                <p>
                    Informatica, Elektronics, Mechanics<br/>
                    Propaedeutic year&apos;s certificate (for masters degree)
                </p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2004-01">
                            <span className="tag">intern</span> January 2004 - June 2004
                        </time><br/>
                        <strong>Aluminium Delfzijl BV, Delfzijl</strong>
                    </span>
                </div>
                <p>Process Operator</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2002-11">
                            <span className="tag">intern</span> November 2002 - January 2003
                        </time><br/>
                        <strong>Teijin Twaron BV, Delfzijl</strong>
                    </span>
                </div>
                <p>Research, Maintenance</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2002-09">
                            <span className="tag">intern</span> September 2002 - November 2002
                        </time><br/>
                        <strong>Sportcentrum Kardinge, Groningen</strong>
                    </span>
                </div>
                <p>Technical Service, Maintenance</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="2000-09">
                            <span className="tag">study</span> September 2000 - June 2004
                        </time><br/>
                        <strong>Noorderpoort College (Abel Tasman), Delfzijl [MBO Operational Technology]</strong>
                    </span>
                </div>
                <p>
                    Process Technology, Electronics, VAPRO B<br/>
                    Level 4 degree
                </p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="1995-09">
                            <span className="tag">study</span> September 1995 - June 2000
                        </time><br/>
                        <strong>Ommelander College, Appingedam [HAVO]</strong>
                    </span>
                </div>
                <p>
                    Nature & Technology<br/>
                    MAVO degree
                </p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="1982-11">November, 1982</time><br/>
                        <strong>Hello world</strong>
                    </span>
                </div>
                <p>Birth</p>
            </div>
            <div className="item">
                <div className="item-header">
                    <Image className="chevron" src="vector/chevron.svg" alt="Chevron" width="24" height="24"/>
                    <span className="dot"></span>
                    <span>
                        <time dateTime="1970-01">
                            January, 1970
                        </time><br/>
                        <strong>Unix Epoch</strong>
                    </span>
                </div>
                <p>This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).</p>
            </div>
        </div>
    )
}