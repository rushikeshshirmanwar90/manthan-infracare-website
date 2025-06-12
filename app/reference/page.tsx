"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Contact } from "@/types/contact"
import { ContactHeader, ContactFormHeader } from "@/components/contact/ContactHeader"
import { ContactItem } from "@/components/contact/ContactItem"
import { AddContactButton } from "@/components/contact/AddContactButton"
import { useContactValidation } from "@/hooks/useContactValidation"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { domain } from "@/domain"

const Page = () => {

    const searchParams = useSearchParams();
    const clientId = searchParams.get("clientId");
    const data: string = searchParams.get("data") || "";
    const jsonData = data ? JSON.parse(data) : {};
    console.log(jsonData);
    const referenceCustomer = jsonData || {};

    // Log the expected data structure
    console.log({
        "leads": [], // This will be populated from the form
        "referenceCustomer": referenceCustomer
    });
    console.log(clientId);

    const [contacts, setContacts] = useState<Contact[]>([{ id: "1", name: "", phone: "" }])
    const [editingId, setEditingId] = useState<string | null>("1")

    const {
        validationErrors,
        setValidationErrors,
        validateAllContacts,
        checkDuplicatePhones,
        clearFieldError,
        getContactError
    } = useContactValidation()

    const addContact = () => {
        const filledContacts = contacts.filter((contact) => contact.name.trim() || contact.phone.trim())
        const errors = validateAllContacts(filledContacts)

        if (errors.length > 0) {
            setValidationErrors(errors)
            return
        }

        setValidationErrors([])
        setEditingId(null)

        const newContact: Contact = {
            id: Date.now().toString(),
            name: "",
            phone: "",
        }
        setContacts([...contacts, newContact])

        setTimeout(() => {
            setEditingId(newContact.id)
        }, 0)
    }

    const removeContact = (id: string) => {
        if (contacts.length > 1) {
            setContacts(contacts.filter((contact) => contact.id !== id))
            setValidationErrors(validationErrors.filter((error) => error.id !== id))
        }
    }

    const updateContact = (id: string, field: keyof Contact, value: string) => {
        setContacts(contacts.map((contact) =>
            contact.id === id ? { ...contact, [field]: value } : contact
        ))

        clearFieldError(id, field)

        if (field === "phone") {
            setTimeout(() => {
                const duplicateErrors = checkDuplicatePhones(contacts)
                if (duplicateErrors.length > 0) {
                    setValidationErrors((prev) => {
                        const newErrors = [...prev]
                        duplicateErrors.forEach((dupError) => {
                            const existingIndex = newErrors.findIndex((e) => e.id === dupError.id)
                            if (existingIndex >= 0) {
                                newErrors[existingIndex] = { ...newErrors[existingIndex], ...dupError }
                            } else {
                                newErrors.push(dupError)
                            }
                        })
                        return newErrors
                    })
                }
            }, 300)
        }
    }

    // Handle key press to prevent form submission on Enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const errors = validateAllContacts(contacts)

        if (errors.length > 0) {
            setValidationErrors(errors)
            console.log("Validation failed. Errors:", errors)
            return
        }

        setValidationErrors([])

        // Format the leads data from contacts
        const leads = contacts
            .filter(contact => contact.name.trim() && contact.phone.trim())
            .map(contact => ({
                contactNumber: contact.phone.trim(),
                name: contact.name.trim()
            }));

        // Create the final data structure
        const finalData = {
            leads: leads,
            referenceCustomer: referenceCustomer
        };

        const res = await axios.post(`${domain}/api/reference-leads?clientId=${clientId}`, finalData);
        console.log(res.data);

        alert(`Successfully saved ${contacts.length} contacts! Check console for details.`)

        console.log("All contacts validated successfully:")
        console.log("Total contacts:", contacts.length)

    }

    const hasEmptyContacts = contacts.some(
        (contact) =>
            (!contact.name.trim() || !contact.phone.trim()) &&
            contact.name === "" &&
            contact.phone === "" &&
            editingId !== contact.id,
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4">
            <div className="mx-auto max-w-2xl">
                <ContactHeader />

                <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-6">
                        <ContactFormHeader />
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} onKeyPress={handleKeyPress} className="space-y-6">
                            <div className="space-y-4">
                                {contacts.map((contact, index) => (
                                    <ContactItem
                                        key={contact.id}
                                        contact={contact}
                                        index={index}
                                        isEditing={editingId === contact.id}
                                        contactError={getContactError(contact.id)}
                                        onUpdate={updateContact}
                                        onRemove={removeContact}
                                        onStartEditing={setEditingId}
                                        onStopEditing={() => setEditingId(null)}
                                        canDelete={contacts.length > 1}
                                    />
                                ))}
                            </div>

                            <AddContactButton
                                onAdd={addContact}
                                disabled={hasEmptyContacts}
                                hasEmptyContacts={hasEmptyContacts}
                            />

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    Save All Contacts ({contacts.length})
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Total contacts: {contacts.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Page