
import emailjs from '@emailjs/browser';

/**
 * EmailJS Configuration
 * 
 * Set these 3 values in your .env file:
 *   EMAILJS_SERVICE_ID=service_xxxxx
 *   EMAILJS_TEMPLATE_ID=template_xxxxx
 *   EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
 * 
 * Setup guide:
 * 1. Create account at https://emailjs.com (free tier = 200 emails/month)
 * 2. Connect your email service (Gmail, Outlook, etc.) → copy SERVICE_ID
 * 3. Create an email template with variables:
 *    {{from_name}}, {{from_email}}, {{phone}}, {{message}}, {{to_name}}
 *    → copy TEMPLATE_ID
 * 4. Go to Account → copy your Public Key
 */

const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || '';

export interface EmailData {
    name: string;
    phone: string;
    email: string;
    description: string;
}

export const isEmailConfigured = (): boolean => {
    return !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
};

export const sendProjectEmail = async (data: EmailData): Promise<boolean> => {
    try {
        // If keys are not set, simulate success for demo but warn
        if (!isEmailConfigured()) {
            console.warn(
                '⚠️ EmailJS non configuré. Ajoutez EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID et EMAILJS_PUBLIC_KEY dans .env\n' +
                'Email simulé avec les données:', data
            );
            await new Promise(resolve => setTimeout(resolve, 1000));
            return true;
        }

        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            reply_to: data.email,
            phone: data.phone,
            message: data.description,
            to_name: 'Chappuis Sanitaire'
        };

        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        return response.status === 200;
    } catch (error) {
        console.error('❌ Échec envoi email:', error);
        return false;
    }
};

