import Link from 'next/link'
import Newsletter from '../Newsletter/Newsletter';

async function KayanFooter() {
    return(
        <footer>
				<Newsletter />
		</footer>
    );
}

export default KayanFooter;