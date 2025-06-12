import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
    title: "Reference Your leads",
    description: "Created by rushikesh shrimanwar",
};

export default function ReferenceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen pt-[3rem]">
            <Toaster />
            {children}
        </div>
    );
}