import Footer from "./Footer";
import Navbar from "./Navbar";

interface NavInterface {
    children: React.ReactNode
}

const AppLayout = (props: NavInterface) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default AppLayout;