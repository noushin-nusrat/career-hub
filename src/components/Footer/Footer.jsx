import { MdShoppingBag } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="p-10 bg-black text-white">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                <a className="btn btn-ghost text-2xl"><MdShoppingBag></MdShoppingBag>Career Hub</a>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <aside>
                    <p>Copyright © 2024 - Desegned by <a href="https://www.programming-hero.com/" className="font-bold" target="_blank">Programming Hero</a> <br/> Developed by <a href="https://github.com/noushin-nusrat" className="font-bold" target="_blank">Noushin Nusrat</a></p>
                </aside>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;