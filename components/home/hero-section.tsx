"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      <div className="container relative z-10 px-4 py-24 mx-auto text-center lg:py-32">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Transform Your Future with Online Learning
          </h1>
          <p className="mx-auto text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Join millions of learners worldwide and explore thousands of courses taught by expert instructors. 
            Start your journey to success today.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="What do you want to learn?"
                className="pl-10 pr-20 py-6 text-lg shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                className="absolute right-1 top-1 bottom-1 px-6"
                onClick={() => console.log('Search for:', searchQuery)}
              >
                Search
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {['Web Development', 'Data Science', 'Business', 'Design', 'Marketing'].map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="bg-background/50 backdrop-blur-sm hover:bg-background/80"
                asChild
              >
                <Link href={`/categories/${category.toLowerCase().replace(' ', '-')}`}>
                  {category}
                </Link>
              </Button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg shadow-lg hover:shadow-primary/25"
              asChild
            >
              <Link href="/courses">
                Browse All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80"
              asChild
            >
              <Link href="/teach">Become an Instructor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}