"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  image: string;
  price: number;
  originalPrice?: number;
  bestseller?: boolean;
}

const featuredCourses: Course[] = [
  {
    id: "1",
    title: "The Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    category: "Web Development",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 152632,
    studentsCount: 650420,
    duration: "63h 30m",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 94.99,
    originalPrice: 199.99,
    bestseller: true
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko, Hadelin de Ponteves",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.5,
    reviewCount: 148902,
    studentsCount: 692631,
    duration: "44h 10m",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 89.99,
    originalPrice: 129.99
  },
  {
    id: "3",
    title: "The Complete Financial Analyst Course",
    instructor: "365 Careers",
    category: "Business",
    level: "All Levels",
    rating: 4.7,
    reviewCount: 67214,
    studentsCount: 345690,
    duration: "24h 45m",
    image: "https://images.pexels.com/photos/7567539/pexels-photo-7567539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 109.99,
    originalPrice: 179.99,
    bestseller: true
  },
  {
    id: "4",
    title: "UI/UX Design Masterclass with Figma",
    instructor: "Jane Smith",
    category: "Design",
    level: "Beginner",
    rating: 4.9,
    reviewCount: 32541,
    studentsCount: 128903,
    duration: "32h 15m",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 84.99,
    originalPrice: 149.99
  }
];

export function FeaturedCourses() {
  const [visibleCourses, setVisibleCourses] = useState(featuredCourses);
  
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Courses
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked courses by our experts to help you achieve your goals
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link href="/courses">View all courses</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`} className="group">
              <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {course.bestseller && (
                    <Badge className="absolute top-2 left-2 bg-yellow-500 hover:bg-yellow-600">
                      Bestseller
                    </Badge>
                  )}
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-1">
                    {course.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 pb-2">
                  <div className="flex items-center space-x-1 text-sm text-amber-500">
                    <Star className="fill-current h-4 w-4" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <BookOpen className="mr-1 h-3 w-3" />
                      {course.level}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="mr-1 h-3 w-3" />
                      {course.studentsCount.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}