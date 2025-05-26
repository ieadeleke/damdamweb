import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutInterface {
    blurry?: boolean
    children: React.ReactNode
    hideMail?: boolean
}

const AppLayout = (props: LayoutInterface) => {
    return (
        <div>
            <Navbar blurry={props.blurry} />
            {props.children}
            <Footer hideMail={props.hideMail} />
        </div>
    )
}

export default AppLayout;