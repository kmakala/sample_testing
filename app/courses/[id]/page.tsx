import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, BookOpen, Clock, Globe, BarChart, Award, CheckCircle, Users, PlayCircle, Star } from 'lucide-react';
import { CourseEnrollCard } from '@/components/courses/course-enroll-card';
import { Instructor } from '@/components/courses/instructor';
import { CourseReviews } from '@/components/courses/course-reviews';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" }
  ];
}

export default function CoursePage({ params }: CoursePageProps) {
  const courseId = params.id;
  
  return (
    <div>
      {/* Course Header */}
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="mr-2">
              <Link href="/courses">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to courses
              </Link>
            </Button>
            <div className="flex gap-2">
              <Badge>Web Development</Badge>
              <Badge variant="outline">Bestseller</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">The Complete Web Development Bootcamp</h1>
              <p className="text-lg mb-4">
                Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, and more!
              </p>
              
              <div className="flex items-center flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 fill-amber-500 mr-1" />
                  <span className="font-medium mr-1">4.8</span>
                  <span className="text-muted-foreground">(152,632 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>650,420 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>63.5 hours</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>English</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-1 text-muted-foreground" />
                  <span>Last updated 2/2023</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dr. Angela Yu"
                  className="h-10 w-10 rounded-full object-cover mr-2"
                />
                <span>Created by <Link href="/instructors/angela-yu" className="text-primary hover:underline">Dr. Angela Yu</Link></span>
              </div>
            </div>
            
            <div className="lg:col-span-1 hidden lg:block">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <Image 
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Course Cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Preview Course
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                  <div className="prose max-w-none">
                    <p>Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in the history of Udemy!</p>
                    
                    <p className="mt-4">At 63+ hours, this Web Development course is without a doubt the most comprehensive web development course available online. Even if you have zero programming experience, this course will take you from beginner to mastery.</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs",
                      "Learn the latest technologies, including Javascript, React, Node and more",
                      "Build fully-fledged websites and web apps for your startup or business",
                      "Work as a freelance web developer",
                      "Master frontend development with React",
                      "Master backend development with Node",
                      "Learn professional developer best practices",
                      "Build responsive, accessible, and beautiful layouts"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No programming experience needed - I'll teach you everything you need to know</li>
                    <li>A computer with access to the internet</li>
                    <li>No paid software required - all software used in the course is free</li>
                    <li>I'll walk you through, step-by-step, how to get all the software installed and set up</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">This Course Includes</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { icon: <Clock className="h-5 w-5" />, text: "63.5 hours on-demand video" },
                      { icon: <Globe className="h-5 w-5" />, text: "English captions" },
                      { icon: <BookOpen className="h-5 w-5" />, text: "85 articles" },
                      { icon: <BarChart className="h-5 w-5" />, text: "120 coding exercises" },
                      { icon: <Award className="h-5 w-5" />, text: "Certificate of completion" },
                      { icon: <PlayCircle className="h-5 w-5" />, text: "Lifetime access" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 p-3 border rounded-md">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                  <div className="flex items-center justify-between mb-4">
                    <p>37 sections • 455 lectures • 63h 30m total length</p>
                    <Button variant="ghost" size="sm">Expand All Sections</Button>
                  </div>
                  
                  {/* Course Sections */}
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Introduction to Web Development", 
                        lectures: 8, 
                        duration: "1h 42m",
                        preview: true
                      },
                      { 
                        title: "HTML Foundations", 
                        lectures: 15, 
                        duration: "2h 36m",
                        preview: true
                      },
                      { 
                        title: "CSS Foundations", 
                        lectures: 18, 
                        duration: "3h 14m",
                        preview: false
                      },
                      { 
                        title: "JavaScript Basics", 
                        lectures: 22, 
                        duration: "4h 29m",
                        preview: false
                      },
                      { 
                        title: "JavaScript Intermediate", 
                        lectures: 24, 
                        duration: "5h 12m",
                        preview: false
                      },
                    ].map((section, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="p-4 bg-muted/50 flex items-center justify-between cursor-pointer">
                          <div>
                            <h3 className="font-medium">Section {index + 1}: {section.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {section.lectures} lectures • {section.duration}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">Expand</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="instructor">
                <Instructor />
              </TabsContent>
              
              <TabsContent value="reviews">
                <CourseReviews />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20">
              <CourseEnrollCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}