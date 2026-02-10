
import emailjs from '@emailjs/browser';

// CONFIGURATION TODO: TO BE FILLED BY USER or VIA ENV VARS
// For now, we use placeholders. You need to create an account on emailjs.com
// 1. Create a service (e.g., 'gmail') -> SERVICE_ID
// 2. Create a template -> TEMPLATE_ID
// 3. Get your Public Key -> PUBLIC_KEY

const SERVICE_ID = 'service_placeholder';
const TEMPLATE_ID = 'template_placeholder';
const PUBLIC_KEY = 'public_key_placeholder';

export interface EmailData {
    name: string;
    phone: string;
    email: string;
    description: string;
}

export const sendProjectEmail = async (data: EmailData): Promise<boolean> => {
    try {
        // If keys are not set, we simulate success for demo purposes but log a warning
        if (SERVICE_ID === 'service_placeholder') {
            console.warn('EmailJS not configured. Simulating email sending.');
            console.log('Email Data:', data);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
            return true;
        }

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            message: data.description,
            to_name: 'Chappuis Sanitaire'
        };

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        if (response.status === 200) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
};
