import { getAllCourses } from '@/server/controllers/courseController';

export async function GET() {
    return getAllCourses();
}
