import Sidebar from "@/components/admin/sidebar";

export const metadata = {
    title: "Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex bg-white dark:bg-neutral-950">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
