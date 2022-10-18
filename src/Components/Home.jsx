import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Home