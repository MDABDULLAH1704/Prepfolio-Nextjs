// src/utils/fetchCourseDataClient.js (or wherever you keep it)
import { API_BASE_URL } from "@/server/utils/apiBase";


export const fetchCourseData = async (id, requireAuth = false) => {
    try {
        const headers = { 'Content-Type': 'application/json' };

        if (requireAuth) {
            const token = (typeof window !== 'undefined') ? localStorage.getItem('token') : null;
            if (!token) return { course: null, error: 'Not logged in' };
            headers.Authorization = `Bearer ${token}`;
        }

        // const endpoint = requireAuth ? `/api/courses/${id}` : `/api/courses/preview/${id}`;
        const endpoint = requireAuth ? `${API_BASE_URL}/courses/${id}` : `${API_BASE_URL}/courses/preview/${id}`;

        const res = await fetch(endpoint, { headers });
        console.log('📦 Response status:', res.status);

        const data = await res.json();
        console.log('🧩 Data received:', data);

        if (!res.ok) {
            // surface server message (if present) for better client UX
            const message = data && data.message ? data.message : `Request failed with status ${res.status}`;
            return { course: null, error: message };
        }

        // success
        return { course: data.course || null, error: null };
    } catch (err) {
        console.error('❌ Error fetching course:', err);
        return { course: null, error: err.message || 'Network error' };
    }
};
