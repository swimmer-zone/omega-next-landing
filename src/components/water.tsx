import { JSX } from 'react';
import './_scss/water.scss';

export default function Water(): JSX.Element {
    return (<>
		<svg viewBox="0 0 1920 220" id="waves" preserveAspectRatio="none">
			<path fill="#6c6eec44" stroke="#6c6eec" strokeWidth="2px" d="M0.734,156.972C0.734,156.972 344.859,277.038 765.505,167.982C1161.84,65.229 1459.39,-0 1918.53,10C2377.67,216.422 1923.36,220.826 1923.36,220.826L0.426,220.092L0.734,156.972Z"/>
			<path fill="#6c6eec22" stroke="#6c6eec88" strokeWidth="2px" d="M-546.376,208.257C-546.376,208.257 -233.748,225.118 200.046,199.45C696.193,170.092 1069.35,25.505 1576.19,116.514C2050.42,201.666 1376.25,272.11 1376.25,272.11L-546.684,271.376L-546.376,208.257Z"/>
		</svg>
		<div id="bubbles">
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
			<div className="bubble"></div>
		</div>
	</>);
};
