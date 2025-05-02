"use client";

import React from "react";
import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from 'lucide-react';

const VALID_CATEGORIES = [
  "web-development",
  "mobile-development",
  "data-science",
  "machine-learning",
  "photography-video",
  "personal-development",
  "academic",
  "languages",
  "business",
  "design",
  "programming",
  "cloud-computing",
  "marketing"
];

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Normalize the category from the URL
  const normalizedCategory = category
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  // Check if the normalized category exists in our valid categories
  if (!VALID_CATEGORIES.includes(normalizedCategory)) {
    notFound();
  }

  // Format the category name for display
  const formattedCategory = normalizedCategory
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <CardTitle>{formattedCategory} Courses</CardTitle>
          </div>
          <CardDescription>
            Explore our comprehensive collection of {formattedCategory.toLowerCase()} courses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Content for {formattedCategory} category will be displayed here. This could include
            a list of courses, instructors, and other relevant information.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}