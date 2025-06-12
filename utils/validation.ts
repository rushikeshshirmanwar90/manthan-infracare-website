export const validateName = (name: string): string | undefined => {
  if (!name.trim()) {
    return "Name is required";
  }
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters";
  }
  if (name.trim().length > 50) {
    return "Name must be less than 50 characters";
  }
  if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
    return "Name can only contain letters and spaces";
  }
  return undefined;
};

export const validatePhone = (phone: string): string | undefined => {
  if (!phone.trim()) {
    return "Phone number is required";
  }
  const cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.length < 10) {
    return "Phone number must be at least 10 digits";
  }
  if (cleanPhone.length > 15) {
    return "Phone number must be less than 15 digits";
  }
  if (!/^[\d\s\-+()]+$/.test(phone.trim())) {
    return "Phone number contains invalid characters";
  }
  return undefined;
};
