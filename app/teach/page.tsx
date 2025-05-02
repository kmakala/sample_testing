"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

export default function TeachPage() {
  const router = useRouter();

  const handleStartTeaching = () => {
    router.push("/register?type=instructor");
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Become an Instructor</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Share your knowledge and expertise with students around the world
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Expert Teaching
              </CardTitle>
              <CardDescription>
                Create engaging courses using our intuitive platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our tools make it easy to structure your content, record videos, and create assignments.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Flexible Curriculum
              </CardTitle>
              <CardDescription>
                Design your course your way
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Choose your own topics, set your own pace, and create the content that best serves your students.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Global Reach
              </CardTitle>
              <CardDescription>
                Connect with students worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reach students from around the globe and build your teaching reputation internationally.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                Earn Revenue
              </CardTitle>
              <CardDescription>
                Get rewarded for your expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Earn money through course sales and build a sustainable teaching business.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8" onClick={handleStartTeaching}>
            Start Teaching Today
          </Button>
        </div>
      </div>
    </div>
  );
}