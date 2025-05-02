import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, ArrowLeft } from "lucide-react";

export default function CategoryNotFound() {
  return (
    <div className="container mx-auto flex min-h-[600px] flex-col items-center justify-center gap-8 py-10 text-center">
      <div className="flex flex-col items-center gap-4">
        <BookOpen className="h-16 w-16 text-muted-foreground" />
        <h1 className="text-4xl font-bold tracking-tight">Category Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The category you're looking for doesn't exist or may have been moved.
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild variant="default">
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Browse All Courses
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
      </div>

      <div className="mt-8 text-muted-foreground">
        <p>Available categories:</p>
        <ul className="mt-2 list-none">
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Photography & Video</li>
          <li>Personal Development</li>
          <li>Academic</li>
          <li>Languages</li>
        </ul>
      </div>
    </div>
  );
}