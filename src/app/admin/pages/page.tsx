import { DataTableDemo } from "@/components/table";
import { Button } from "@/components/ui/button";
import connectDb from "@/db/connect";
import PageSchema from "@/db/PageSchema";
import Link from "next/link";

const AdminPages = async () => {
    await connectDb();
    const pages = await PageSchema.find({}, { slug: 1, title: 1 }).lean().limit(20);
    return (
        <div className="w-full p-3">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">Pages</h1>
                <Link href="/admin/pages/new"><Button>Create New Page</Button></Link>
            </div>
            <div>
                {pages.length > 0 ? pages.map((page) => (
                    <DataTableDemo />
                )) : <p>No pages found.</p>}
            </div>
        </div>
    );
};

export default AdminPages;