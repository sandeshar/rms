export default function AdminHome() {
    return (
        <div className="dark:text-neutral-300">
            <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
            <p className="text-neutral-600 ">Welcome to the admin area. Use the sidebar to navigate between sections.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded bg-neutral-50 dark:bg-neutral-900">Widget 1</div>
                <div className="p-4 border rounded bg-neutral-50 dark:bg-neutral-900">Widget 2</div>
            </div>
        </div>
    );
}
