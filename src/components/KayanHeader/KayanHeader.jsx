import Link from 'next/link'

function KayanHeader() {
    return(
        <header>
				<Link href="/" className="header-logo-wrapper">
					<img
						src="site-content/omologo-white.png"
						alt="OMO logo"
						className="header-logo omo-logo"
					/>
				</Link>
		</header>
    );
}

export default KayanHeader;