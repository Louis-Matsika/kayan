import Link from 'next/link'

async function KayanFooter() {
    return(
        <header>
				<Link href="/" className="header-logo-wrapper">
					<img
						src="site-content/omologo-white.png"
						alt="OMO logo"
						className="header-logo omo-logo"
					/>
                    this is footer
				</Link>
		</header>
    );
}

export default KayanFooter;