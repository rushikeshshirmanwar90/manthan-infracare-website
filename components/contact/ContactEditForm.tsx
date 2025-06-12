import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2, AlertCircle } from "lucide-react"
import type { Contact, ValidationError } from "@/types/contact"

interface ContactEditFormProps {
    contact: Contact
    contactError?: ValidationError
    onUpdate: (id: string, field: keyof Contact, value: string) => void
    onRemove: (id: string) => void
    onStopEditing: () => void
    canDelete: boolean
}

export const ContactEditForm = ({
    contact,
    contactError,
    onUpdate,
    onRemove,
    onStopEditing,
    canDelete
}: ContactEditFormProps) => {
    // Prevent form submission on Enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    return (
        <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-amber-200/60 shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div>
            <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                    <div className="flex-1 space-y-2">
                        <Input
                            type="text"
                            placeholder="Enter name"
                            value={contact.name}
                            onChange={(e) => onUpdate(contact.id, "name", e.target.value)}
                            onKeyPress={handleKeyPress}
                            className={`pl-4 pr-4 py-3 text-lg border-0 bg-gray-50/80 rounded-xl focus:bg-white focus:ring-2 transition-all ${contactError?.nameError
                                ? "focus:ring-red-400/30 bg-red-50/80"
                                : "focus:ring-amber-400/30"
                                }`}
                        />
                        {contactError?.nameError && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-4 h-4" />
                                <span>{contactError.nameError}</span>
                            </div>
                        )}
                    </div>
                    <div className="w-px h-12 bg-amber-200"></div>
                    <div className="flex-1 space-y-2">
                        <Input
                            type="tel"
                            placeholder="Enter phone"
                            value={contact.phone}
                            onChange={(e) => onUpdate(contact.id, "phone", e.target.value)}
                            onKeyPress={handleKeyPress}
                            className={`pl-4 pr-4 py-3 text-lg border-0 bg-gray-50/80 rounded-xl focus:bg-white focus:ring-2 transition-all ${contactError?.phoneError
                                ? "focus:ring-red-400/30 bg-red-50/80"
                                : "focus:ring-amber-400/30"
                                }`}
                        />
                        {contactError?.phoneError && (
                            <div className="flex items-center gap-1 text-red-600 text-sm">
                                <AlertCircle className="w-4 h-4" />
                                <span>{contactError.phoneError}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    {canDelete && (
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => onRemove(contact.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                        </Button>
                    )}
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={onStopEditing}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}