"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Star, ThumbsUp, ThumbsDown, Search } from 'lucide-react';

interface Review {
  id: string;
  user: {
    name: string;
    image: string;
    country: string;
  };
  rating: number;
  date: string;
  content: string;
  helpfulCount: number;
  unhelpfulCount: number;
  userReaction?: 'helpful' | 'unhelpful' | null;
}

const reviews: Review[] = [
  {
    id: "1",
    user: {
      name: "Michael S.",
      image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      country: "United States"
    },
    rating: 5,
    date: "June 2, 2023",
    content: "This course is absolutely incredible! Angela is such a great teacher and explains every concept so clearly. I had very little coding experience before this course, and now I feel confident building my own websites. The projects are challenging but fun, and I love how Angela walks through the entire process. Would highly recommend!",
    helpfulCount: 243,
    unhelpfulCount: 5
  },
  {
    id: "2",
    user: {
      name: "Sarah J.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      country: "Canada"
    },
    rating: 4,
    date: "May 15, 2023",
    content: "Great course with lots of content and practical examples. The only reason I'm giving it 4 stars instead of 5 is that some of the content is a bit outdated, particularly the React sections. But overall, it's still worth every penny. I learned so much and was able to build several projects for my portfolio.",
    helpfulCount: 189,
    unhelpfulCount: 12
  },
  {
    id: "3",
    user: {
      name: "David K.",
      image: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      country: "United Kingdom"
    },
    rating: 5,
    date: "April 30, 2023",
    content: "I've taken many coding courses, and this is by far the best. Angela's teaching style is engaging and easy to follow. The course covers everything from basic HTML to advanced JavaScript and React. I especially loved the capstone projects where we built real-world applications. It really helped reinforce what I learned.",
    helpfulCount: 156,
    unhelpfulCount: 3
  },
  {
    id: "4",
    user: {
      name: "Emily R.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      country: "Australia"
    },
    rating: 5,
    date: "April 12, 2023",
    content: "As someone with zero coding experience, I was worried this would be too difficult. But Angela breaks everything down so well that I never felt lost. The course is long, but it's comprehensive and teaches you everything you need to know. I now have the skills to build my own websites and even landed a junior developer job!",
    helpfulCount: 132,
    unhelpfulCount: 7
  }
];

export function CourseReviews() {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedReviews, setDisplayedReviews] = useState(reviews);
  const [userReactions, setUserReactions] = useState<Record<string, 'helpful' | 'unhelpful' | null>>({});
  
  const totalReviews = 152632;
  const averageRating = 4.8;
  const ratingCounts = {
    5: 132593, // 87%
    4: 15263,  // 10%
    3: 3053,   // 2%
    2: 1526,   // 1%
    1: 197     // <1%
  };
  
  const handleReaction = (reviewId: string, type: 'helpful' | 'unhelpful') => {
    setUserReactions(prev => {
      // If user already selected this reaction, toggle it off
      if (prev[reviewId] === type) {
        return { ...prev, [reviewId]: null };
      }
      // Otherwise set the new reaction
      return { ...prev, [reviewId]: type };
    });
  };
  
  const searchReviews = () => {
    if (!searchQuery.trim()) {
      setDisplayedReviews(reviews);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = reviews.filter(review => 
      review.content.toLowerCase().includes(query) ||
      review.user.name.toLowerCase().includes(query)
    );
    
    setDisplayedReviews(filtered);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-bold mb-1">{averageRating}</div>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-5 w-5 ${star <= averageRating ? 'text-amber-500 fill-amber-500' : 'text-muted'}`} 
                  />
                ))}
              </div>
              <div className="text-muted-foreground">Course Rating</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {totalReviews.toLocaleString()} reviews
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const percentage = Math.round((ratingCounts[rating as keyof typeof ratingCounts] / totalReviews) * 100);
                return (
                  <div key={rating} className="flex items-center">
                    <div className="flex items-center w-16">
                      <span className="mr-1">{rating}</span>
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                    </div>
                    <Progress className="h-2 flex-1 mx-2" value={percentage} />
                    <div className="w-12 text-right text-sm text-muted-foreground">
                      {percentage}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reviews..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchReviews()}
            />
          </div>
          <Button variant="outline" onClick={searchReviews}>
            Search
          </Button>
        </div>
        
        <div className="space-y-6">
          {displayedReviews.length > 0 ? (
            displayedReviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.user.image}
                      alt={review.user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium">{review.user.name}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`h-4 w-4 ${star <= review.rating ? 'text-amber-500 fill-amber-500' : 'text-muted'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.date} • {review.user.country}
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      {review.content}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={userReactions[review.id] === 'helpful' ? 'bg-muted' : ''}
                        onClick={() => handleReaction(review.id, 'helpful')}
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Helpful ({review.helpfulCount + (userReactions[review.id] === 'helpful' ? 1 : 0)})
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={userReactions[review.id] === 'unhelpful' ? 'bg-muted' : ''}
                        onClick={() => handleReaction(review.id, 'unhelpful')}
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        Unhelpful ({review.unhelpfulCount + (userReactions[review.id] === 'unhelpful' ? 1 : 0)})
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium mb-2">No reviews found</h3>
              <p className="text-muted-foreground mb-4">
                We couldn't find any reviews matching your search criteria.
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setDisplayedReviews(reviews);
              }}>
                Clear search
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">Load more reviews</Button>
        </div>
      </div>
    </div>
  );
}