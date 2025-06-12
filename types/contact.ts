export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export interface ValidationError {
  id: string;
  nameError?: string;
  phoneError?: string;
}
