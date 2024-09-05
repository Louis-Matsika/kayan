import Link from 'next/link'

async function KayanHeader() {
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