import Sidebar from "@/components/admin/sidebar";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            <Sidebar />
            {children}
        </div>
    );
}
