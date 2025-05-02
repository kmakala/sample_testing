"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  image: string;
  courseName: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Web Developer",
    company: "TechCorp Inc",
    content: "This platform completely transformed my career. After finishing the web development bootcamp, I landed my dream job within two months. The instructor's approach to explaining complex concepts made them easy to understand.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    courseName: "The Complete Web Development Bootcamp",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Analytics Pro",
    content: "I've tried many online courses, but this one stands out. The machine learning course helped me gain practical skills that I use daily in my job. The projects were challenging but incredibly rewarding.",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    courseName: "Machine Learning A-Z",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Global Brands",
    content: "The digital marketing courses here are exceptional. I was able to implement strategies I learned immediately, and our company saw a 40% increase in conversion rates. The instructors are industry experts who provide relevant, up-to-date content.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    courseName: "Digital Marketing Masterclass",
    rating: 4
  },
  {
    id: "4",
    name: "David Kim",
    role: "UX Designer",
    company: "Creative Solutions",
    content: "The UI/UX design course completely changed how I approach design problems. The instructor's feedback on my projects was invaluable, and the community of students provided great support and inspiration.",
    image: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    courseName: "UI/UX Design Masterclass",
    rating: 5
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            What Our Students Say
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Success stories from students who have transformed their careers through our platform
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col p-6 h-full">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-primary opacity-30" />
                      </div>
                      <p className="flex-1 text-foreground mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                              {testimonial.company && `, ${testimonial.company}`}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-muted-foreground mb-1">Course: {testimonial.courseName}</p>
                        <div className="flex items-center">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-muted'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static" />
            <CarouselNext className="static ml-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}