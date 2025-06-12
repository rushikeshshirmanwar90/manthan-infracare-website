import { Button } from "@/components/ui/button"
import { Trash2, AlertCircle } from "lucide-react"
import type { Contact, ValidationError } from "../../types/contact"

interface ContactDisplayCardProps {
    contact: Contact
    index: number
    contactError?: ValidationError
    onStartEditing: (id: string) => void
    onRemove: (id: string) => void
    canDelete: boolean
}

export const ContactDisplayCard = ({
    contact,
    index,
    contactError,
    onStartEditing,
    onRemove,
    canDelete
}: ContactDisplayCardProps) => {
    return (
        <div className="relative group/card">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
            <div
                className={`relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${contactError ? "border-red-300" : "border-amber-200/50"
                    }`}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-lg">
                                    {contact.name ? contact.name.charAt(0).toUpperCase() : index + 1}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-amber-600 font-medium uppercase tracking-wide">
                                    Contact {index + 1}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => onStartEditing(contact.id)}
                                className="h-8 w-8 p-0 text-amber-600 hover:text-amber-700 hover:bg-amber-100 rounded-full"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </Button>
                            {canDelete && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => onRemove(contact.id)}
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-amber-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-900 font-semibold text-lg">
                                    {contact.name || "No name provided"}
                                </p>
                                {contactError?.nameError && (
                                    <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>{contactError.nameError}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-4 h-4 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700 font-medium">{contact.phone || "No phone provided"}</p>
                                {contactError?.phoneError && (
                                    <div className="flex items-center gap-1 text-red-600 text-sm mt-1">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>{contactError.phoneError}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}