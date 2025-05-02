import Footer from "../common/Footer";
import Header from "../common/Header";
import { SideBar } from "./Home";

export default function Allrecipes() {
    return (
        <>
            <Header />
            <SideBar pathname='/allrecipes/' />
            <Footer />
        </>
    );
}