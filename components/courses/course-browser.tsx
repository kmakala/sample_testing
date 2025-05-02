"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader, 
  CardTitle, 
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Star, Clock, Users, BookOpen, ChevronDown, Search, Filter } from 'lucide-react';

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
  tags: string[];
}

// Sample course data
const allCourses: Course[] = [
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
    bestseller: true,
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
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
    originalPrice: 129.99,
    tags: ["Python", "R", "Machine Learning", "Data Analysis"]
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
    bestseller: true,
    tags: ["Finance", "Excel", "Financial Analysis", "Business"]
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
    originalPrice: 149.99,
    tags: ["UI", "UX", "Figma", "Design", "Prototyping"]
  },
  {
    id: "5",
    title: "Complete Python Bootcamp: From Zero to Hero",
    instructor: "Jose Portilla",
    category: "Programming",
    level: "All Levels",
    rating: 4.6,
    reviewCount: 425680,
    studentsCount: 1350890,
    duration: "22h 15m",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 99.99,
    originalPrice: 189.99,
    bestseller: true,
    tags: ["Python", "Programming", "Data Science", "Machine Learning"]
  },
  {
    id: "6",
    title: "AWS Certified Solutions Architect",
    instructor: "Ryan Kroonenburg",
    category: "Cloud Computing",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 62485,
    studentsCount: 254896,
    duration: "35h 20m",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 129.99,
    originalPrice: 199.99,
    tags: ["AWS", "Cloud", "DevOps", "Certification"]
  },
  {
    id: "7",
    title: "Digital Marketing Masterclass",
    instructor: "Phil Ebiner",
    category: "Marketing",
    level: "Beginner",
    rating: 4.5,
    reviewCount: 38965,
    studentsCount: 182460,
    duration: "28h 45m",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 79.99,
    originalPrice: 149.99,
    tags: ["Marketing", "SEO", "Social Media", "Analytics"]
  },
  {
    id: "8",
    title: "iOS App Development with Swift",
    instructor: "Angela Yu",
    category: "Mobile Development",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 45723,
    studentsCount: 184562,
    duration: "55h 30m",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 114.99,
    originalPrice: 199.99,
    tags: ["iOS", "Swift", "Mobile", "App Development"]
  },
];

const categories = [
  "Web Development",
  "Data Science",
  "Business",
  "Design",
  "Programming",
  "Cloud Computing",
  "Marketing",
  "Mobile Development",
];

const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];

export function CourseBrowser() {
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState('popularity');
  
  // Apply filters and sort
  const applyFilters = () => {
    let results = allCourses;
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.instructor.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Category filter
    if (selectedCategories.length > 0) {
      results = results.filter(course => selectedCategories.includes(course.category));
    }
    
    // Level filter
    if (selectedLevels.length > 0) {
      results = results.filter(course => selectedLevels.includes(course.level));
    }
    
    // Price range filter
    results = results.filter(course => 
      course.price >= priceRange[0] && course.price <= priceRange[1]
    );
    
    // Rating filter
    if (minRating > 0) {
      results = results.filter(course => course.rating >= minRating);
    }
    
    // Sort
    switch (sortOption) {
      case 'popularity':
        results = [...results].sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case 'rating':
        results = [...results].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For a real app, we'd sort by date
        results = [...results];
        break;
      case 'price-low':
        results = [...results].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results = [...results].sort((a, b) => b.price - a.price);
        break;
    }
    
    setFilteredCourses(results);
  };
  
  // Apply filters on any filter change
  React.useEffect(() => {
    applyFilters();
  }, [searchQuery, selectedCategories, selectedLevels, priceRange, minRating, sortOption]);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-card rounded-lg shadow-sm border p-6 sticky top-20">
          <div className="font-semibold text-lg mb-4 flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </div>
          
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, category]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      }
                    }}
                  />
                  <Label 
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm font-normal cursor-pointer"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Levels */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Levels</h3>
            <div className="space-y-2">
              {levels.map((level) => (
                <div key={level} className="flex items-center">
                  <Checkbox 
                    id={`level-${level}`}
                    checked={selectedLevels.includes(level)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedLevels([...selectedLevels, level]);
                      } else {
                        setSelectedLevels(selectedLevels.filter(l => l !== level));
                      }
                    }}
                  />
                  <Label 
                    htmlFor={`level-${level}`}
                    className="ml-2 text-sm font-normal cursor-pointer"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              defaultValue={[0, 200]}
              min={0}
              max={200}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>
          
          {/* Rating */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Minimum Rating</h3>
            <div className="flex items-center space-x-1 mb-2">
              {[4, 3, 2, 1].map((rating) => (
                <Button 
                  key={rating}
                  variant={minRating === rating ? "default" : "outline"}
                  size="sm"
                  onClick={() => setMinRating(rating)}
                  className="px-3"
                >
                  {rating}+ <Star className="ml-1 h-3 w-3 fill-current" />
                </Button>
              ))}
              <Button 
                variant={minRating === 0 ? "default" : "outline"}
                size="sm"
                onClick={() => setMinRating(0)}
                className="px-3"
              >
                Any
              </Button>
            </div>
          </div>
          
          {/* Reset Filters */}
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategories([]);
              setSelectedLevels([]);
              setPriceRange([0, 200]);
              setMinRating(0);
              setSortOption('popularity');
            }}
          >
            Reset Filters
          </Button>
        </div>
      </div>
      
      {/* Course List */}
      <div className="lg:col-span-3">
        {/* Sort and Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredCourses.length}</span> results
          </p>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem
                checked={sortOption === 'popularity'}
                onCheckedChange={() => setSortOption('popularity')}
              >
                Most Popular
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortOption === 'rating'}
                onCheckedChange={() => setSortOption('rating')}
              >
                Highest Rated
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortOption === 'newest'}
                onCheckedChange={() => setSortOption('newest')}
              >
                Newest
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortOption === 'price-low'}
                onCheckedChange={() => setSortOption('price-low')}
              >
                Price: Low to High
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={sortOption === 'price-high'}
                onCheckedChange={() => setSortOption('price-high')}
              >
                Price: High to Low
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
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
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategories([]);
                setSelectedLevels([]);
                setPriceRange([0, 200]);
                setMinRating(0);
              }}
            >
              Reset all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}