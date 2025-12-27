import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateNewPage = () => {
    return (
        <div className="w-full p-3 flex flex-col gap-4">
            <div className="flex flex-row justify-evenly">
                <Input placeholder="Page Title" className="max-w-xs" />
                <Input placeholder="Page Slug" className="max-w-xs" />
                <Button>Create Page</Button>
            </div>
        </div>
    );
};

export default CreateNewPage;