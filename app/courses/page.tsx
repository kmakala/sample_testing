import Link from 'next/link';
import { CourseBrowser } from '@/components/courses/course-browser';

export const metadata = {
  title: 'Courses | EduVista',
  description: 'Browse all available courses on EduVista',
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Courses</h1>
        <p className="text-muted-foreground">Browse our extensive library of high-quality courses</p>
      </div>
      
      <CourseBrowser />
    </div>
  );
}