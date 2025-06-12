import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

interface AddContactButtonProps {
    onAdd: () => void
    disabled: boolean
    hasEmptyContacts: boolean
}

export const AddContactButton = ({ onAdd, disabled, hasEmptyContacts }: AddContactButtonProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Button
                type="button"
                variant="outline"
                onClick={onAdd}
                disabled={disabled}
                className={`border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-colors ${disabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                <Plus className="w-4 h-4 mr-2" />
                Add Another Contact
            </Button>
            {hasEmptyContacts && (
                <p className="text-sm text-amber-600 text-center">
                    Please fill in all existing contacts before adding a new one
                </p>
            )}
        </div>
    )
}