/**
 * Generates a pre-filled WhatsApp click-to-chat link.
 * @param phone Phone number in international format (e.g., '923004599911')
 * @param text The message to pre-fill in the chat input
 */
export function getWhatsAppLink(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

export const OFFICIAL_PHONE = "923004599911";
export const SECONDARY_PHONE = "923172615265";
