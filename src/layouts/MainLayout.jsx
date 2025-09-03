import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6 bg-gray-50">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white text-center py-3">
                © 2025 Vocai - Học từ vựng thông minh
            </footer>
        </div>
    )
}
