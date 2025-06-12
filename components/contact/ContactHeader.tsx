import Image from "next/image"
import { Users } from "lucide-react"

export const ContactHeader = () => {
    return (
        <div className="text-center mb-8 pt-8">
            <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Image src="/logo-mini.png" alt="Logo" width={60} height={60} className="object-contain" />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Directory</h1>
            <p className="text-gray-600">Add multiple contacts with ease</p>
        </div>
    )
}

export const ContactFormHeader = () => {
    return (
        <div className="flex items-center gap-2 text-amber-600">
            <Users className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Contact Information</h2>
        </div>
    )
}
