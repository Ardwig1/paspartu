import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-cream text-charcoal font-sans selection:bg-midnight selection:text-cream">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-20 md:ml-64 min-h-screen relative">

                {/* Top Right Profile (Absolute Positioned) */}
                <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="font-serif font-bold text-midnight text-lg">@username</span>
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-cream font-bold">
                        U
                    </div>
                </div>

                <div className="max-w-3xl mx-auto w-full pt-16 md:pt-4 px-4">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
