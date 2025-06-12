import type { Contact, ValidationError } from "../../types/contact"
import { ContactEditForm } from "./ContactEditForm"
import { ContactDisplayCard } from "./ContactDisplayCard"

interface ContactItemProps {
    contact: Contact
    index: number
    isEditing: boolean
    contactError?: ValidationError
    onUpdate: (id: string, field: keyof Contact, value: string) => void
    onRemove: (id: string) => void
    onStartEditing: (id: string) => void
    onStopEditing: () => void
    canDelete: boolean
}

export const ContactItem = ({
    contact,
    index,
    isEditing,
    contactError,
    onUpdate,
    onRemove,
    onStartEditing,
    onStopEditing,
    canDelete
}: ContactItemProps) => {
    return (
        <div className="group">
            {isEditing ? (
                <ContactEditForm
                    contact={contact}
                    contactError={contactError}
                    onUpdate={onUpdate}
                    onRemove={onRemove}
                    onStopEditing={onStopEditing}
                    canDelete={canDelete}
                />
            ) : (
                <ContactDisplayCard
                    contact={contact}
                    index={index}
                    contactError={contactError}
                    onStartEditing={onStartEditing}
                    onRemove={onRemove}
                    canDelete={canDelete}
                />
            )}
        </div>
    )
}
