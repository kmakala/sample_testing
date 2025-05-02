"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Heart, Share2, Award, PlayCircle, Clock, FileText, Calendar, Trophy, DollarSign } from 'lucide-react';

export function CourseEnrollCard() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  return (
    <Card className="shadow-lg lg:border">
      <CardContent className="p-0">
        <div className="lg:hidden relative aspect-video">
          <Image 
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Course Cover"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
              <PlayCircle className="mr-2 h-5 w-5" />
              Preview
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">$94.99</div>
              <div className="text-muted-foreground line-through">$199.99</div>
            </div>
            <div className="text-sm text-red-500 font-medium mb-1">52% off! Sale ends in 2 days</div>
            <div className="text-sm text-muted-foreground">30-Day Money-Back Guarantee</div>
          </div>
          
          <div className="space-y-4 mb-6">
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to cart
            </Button>
            
            <Button variant="outline" className="w-full" size="lg" asChild>
              <Link href="/checkout">Buy now</Link>
            </Button>
          </div>
          
          <div className="flex justify-between mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={isWishlisted ? "text-red-500" : ""}
            >
              <Heart className={`mr-1 h-5 w-5 ${isWishlisted ? "fill-red-500" : ""}`} />
              Wishlist
            </Button>
            
            <Button variant="ghost" size="sm">
              <Share2 className="mr-1 h-5 w-5" />
              Share
            </Button>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">This course includes:</h3>
            <ul className="space-y-2">
              {[
                { icon: <Clock className="h-4 w-4" />, text: "63.5 hours on-demand video" },
                { icon: <FileText className="h-4 w-4" />, text: "85 articles" },
                { icon: <FileText className="h-4 w-4" />, text: "120 downloadable resources" },
                { icon: <Calendar className="h-4 w-4" />, text: "Full lifetime access" },
                { icon: <Trophy className="h-4 w-4" />, text: "Certificate of completion" },
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm">
                  <span className="text-muted-foreground mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-medium mb-2">Training 5 or more people?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get your team access to 25,000+ top courses anytime, anywhere.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/business">
                <DollarSign className="mr-2 h-4 w-4" />
                Get EduVista for Business
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}