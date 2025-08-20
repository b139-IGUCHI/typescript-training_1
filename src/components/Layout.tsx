import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <div>
            <header className="navbar">
                <nav>
                    <Link to="/" className="nav-link">🏠 Home</Link>
                    <Link to="/detail" className="nav-link">📖 Detail</Link>
                    <Link to="/profile" className="nav-link">👤 Profile</Link>
                    <Link to="/settings" className="nav-link">⚙️ Settings</Link>
                </nav>
            </header>
            <main className="content">{children}</main>
        </div>
    );
}

export default Layout;
