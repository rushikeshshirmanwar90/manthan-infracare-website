import { useState, useCallback } from "react"
import type { Contact, ValidationError } from "../types/contact"
import { validateName, validatePhone } from "@/utils/validation"

export const useContactValidation = () => {
    const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

    const validateContact = useCallback((contact: Contact): ValidationError | null => {
        const nameError = validateName(contact.name)
        const phoneError = validatePhone(contact.phone)

        if (nameError || phoneError) {
            return {
                id: contact.id,
                nameError,
                phoneError,
            }
        }
        return null
    }, [])

    const checkDuplicatePhones = useCallback((contacts: Contact[]): ValidationError[] => {
        const errors: ValidationError[] = []
        const phoneMap = new Map<string, string[]>()

        contacts.forEach((contact) => {
            if (contact.phone.trim()) {
                const cleanPhone = contact.phone.replace(/\D/g, "")
                if (cleanPhone) {
                    if (!phoneMap.has(cleanPhone)) {
                        phoneMap.set(cleanPhone, [])
                    }
                    phoneMap.get(cleanPhone)!.push(contact.id)
                }
            }
        })

        phoneMap.forEach((contactIds) => {
            if (contactIds.length > 1) {
                contactIds.forEach((contactId) => {
                    const existingError = errors.find((e) => e.id === contactId)
                    if (existingError) {
                        existingError.phoneError = "This phone number is already used by another contact"
                    } else {
                        errors.push({
                            id: contactId,
                            phoneError: "This phone number is already used by another contact",
                        })
                    }
                })
            }
        })

        return errors
    }, [])

    const validateAllContacts = useCallback((contacts: Contact[]): ValidationError[] => {
        const errors: ValidationError[] = []

        contacts.forEach((contact) => {
            const error = validateContact(contact)
            if (error) {
                errors.push(error)
            }
        })

        const duplicateErrors = checkDuplicatePhones(contacts)
        duplicateErrors.forEach((dupError) => {
            const existingError = errors.find((e) => e.id === dupError.id)
            if (existingError) {
                if (dupError.phoneError) {
                    existingError.phoneError = dupError.phoneError
                }
            } else {
                errors.push(dupError)
            }
        })

        return errors
    }, [validateContact, checkDuplicatePhones])

    const clearFieldError = useCallback((contactId: string, field: keyof Contact) => {
        setValidationErrors(prev =>
            prev
                .map((error) => {
                    if (error.id === contactId) {
                        const newError = { ...error }
                        if (field === "name") {
                            delete newError.nameError
                        } else if (field === "phone") {
                            delete newError.phoneError
                        }
                        if (!newError.nameError && !newError.phoneError) {
                            return null
                        }
                        return newError
                    }
                    return error
                })
                .filter(Boolean) as ValidationError[]
        )
    }, [])

    const getContactError = useCallback((contactId: string) => {
        return validationErrors.find((error) => error.id === contactId)
    }, [validationErrors])

    return {
        validationErrors,
        setValidationErrors,
        validateContact,
        validateAllContacts,
        checkDuplicatePhones,
        clearFieldError,
        getContactError
    }
}
