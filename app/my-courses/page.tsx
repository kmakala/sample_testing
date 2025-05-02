"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, BookOpen, Award, Star } from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  image: string;
  lastAccessed: string;
  duration: string;
  completed: boolean;
  certificate?: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "The Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    lastAccessed: "2 days ago",
    duration: "63h 30m",
    completed: false
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    progress: 100,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    lastAccessed: "1 week ago",
    duration: "44h 10m",
    completed: true,
    certificate: "ML-CERT-2024"
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass with Figma",
    instructor: "Jane Smith",
    progress: 32,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    lastAccessed: "3 days ago",
    duration: "32h 15m",
    completed: false
  }
];

export default function MyCoursesPage() {
  const [activeTab, setActiveTab] = useState("in-progress");
  
  const inProgressCourses = courses.filter(course => !course.completed);
  const completedCourses = courses.filter(course => course.completed);
  
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Learning</h1>
          <p className="text-muted-foreground">
            Track your progress and continue learning
          </p>
        </div>
        <Button className="mt-4 md:mt-0" asChild>
          <Link href="/courses">Browse More Courses</Link>
        </Button>
      </div>
      
      <Tabs defaultValue="in-progress" className="space-y-8">
        <TabsList>
          <TabsTrigger 
            value="in-progress"
            onClick={() => setActiveTab("in-progress")}
          >
            In Progress ({inProgressCourses.length})
          </TabsTrigger>
          <TabsTrigger 
            value="completed"
            onClick={() => setActiveTab("completed")}
          >
            Completed ({completedCourses.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="in-progress" className="space-y-6">
          {inProgressCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 aspect-video md:aspect-auto">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href={`/courses/${course.id}`} className="hover:text-primary">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground">{course.instructor}</p>
                    </div>
                    <Button className="mt-4 md:mt-0" asChild>
                      <Link href={`/courses/${course.id}/learn`}>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Continue Learning
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{course.progress}% complete</span>
                        <span className="text-muted-foreground">
                          Last accessed {course.lastAccessed}
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4" />
                        {Math.round(course.progress / 100 * 12)} of 12 sections
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          {completedCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 aspect-video md:aspect-auto">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-500">
                    Completed
                  </Badge>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        <Link href={`/courses/${course.id}`} className="hover:text-primary">
                          {course.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground">{course.instructor}</p>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button variant="outline" asChild>
                        <Link href={`/courses/${course.id}/learn`}>
                          <BookOpen className="mr-2 h-4 w-4" />
                          Review Course
                        </Link>
                      </Button>
                      {course.certificate && (
                        <Button asChild>
                          <Link href={`/certificates/${course.certificate}`}>
                            <Award className="mr-2 h-4 w-4" />
                            View Certificate
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2 h-4 w-4" />
                      Course completed on March 15, 2024
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}