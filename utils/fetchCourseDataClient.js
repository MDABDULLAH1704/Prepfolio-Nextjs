const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchCourseData = async (id, requireAuth = false) => {
    try {
        const headers = { "Content-Type": "application/json" };
        const token = localStorage.getItem("token");

        let endpoint = `${baseURL}/api/courses/preview/${id}`;
        if (requireAuth) {
            if (!token) throw new Error("Not logged in");
            headers.Authorization = `Bearer ${token}`;
            endpoint = `${baseURL}/api/courses/${id}`;
        }

        console.log("📡 Fetching course from:", endpoint);

        const res = await fetch(endpoint, { headers });
        console.log("📦 Response status:", res.status);

        const data = await res.json();
        console.log("🧩 Data received:", data);

        if (!res.ok || !data.success) throw new Error(data.message || "Course not found");

        return { course: data.course, error: null };
    } catch (err) {
        console.error("❌ Error fetching course:", err);
        return { course: null, error: err.message };
    }
};
