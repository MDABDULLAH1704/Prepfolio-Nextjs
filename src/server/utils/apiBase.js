/**
 * 🌍 Returns correct API base URL based on environment
 */
export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    (process.env.NODE_ENV === 'production'
        ? 'https://yourproject.vercel.app/api' // replace with your Vercel domain
        : 'http://localhost:3000/api');
