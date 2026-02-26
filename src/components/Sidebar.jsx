import { Home, Users, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-20 md:w-64 border-r border-gray-200 bg-cream p-4 flex flex-col z-50">
            {/* Logo */}
            <div className="mb-8 px-2">
                <h1 className="text-2xl font-serif font-bold text-midnight hidden md:block">Paspartu</h1>
                <h1 className="text-2xl font-serif font-bold text-midnight md:hidden">P</h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 mb-8">
                <NavItem to="/" icon={<Home />} label="Home" />
                <NavItem to="/sphere" icon={<Users />} label="Sphere" />
            </nav>

            {/* Minimalist Trending Section */}
            <div className="mt-4 px-2 hidden md:block">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Trending</h3>
                <div className="flex flex-col gap-3">
                    <TrendingItem topic="#StoicMindset" />
                    <TrendingItem topic="#DigitalArt" />
                    <TrendingItem topic="#FutureTech" />
                    <TrendingItem topic="#ClassicalMusic" />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ to, icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${isActive ? "bg-gold text-cream" : "hover:bg-gray-100 text-charcoal"
                }`}
        >
            {icon}
            <span className="text-lg hidden md:block font-medium">{label}</span>
        </Link>
    );
};

const TrendingItem = ({ topic }) => (
    <div className="cursor-pointer hover:text-gold transition-colors text-sm text-charcoal font-medium">
        {topic}
    </div>
);

export default Sidebar;
