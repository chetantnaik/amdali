import '../styles/global.css';
import Image from 'next/image';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer';

export default function MyApp({ Component, pageProps }) {
    return <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </div>
}