import { Link } from "@remix-run/react";

export const Navigation = () => {
    return (
        <nav className="flex w-full justify-between p-2 px-10">
            <h1 className="mb-4 text-5xl text-white">GODZ</h1>
            <ul className="text-white">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
