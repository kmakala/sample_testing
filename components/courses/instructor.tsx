import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, Users, PlayCircle } from 'lucide-react';

export function Instructor() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">About the Instructor</h2>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dr. Angela Yu"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold">Dr. Angela Yu</h3>
            <p className="text-muted-foreground mb-2">Developer and Lead Instructor</p>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500 mr-1" />
                <span className="font-medium mr-1">4.7</span>
                <span className="text-muted-foreground">Instructor Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>2.3M+ Students</span>
              </div>
              <div className="flex items-center">
                <PlayCircle className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>15 Courses</span>
              </div>
            </div>
            
            <div className="prose max-w-none mb-4">
              <p>I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer.</p>
              
              <p>My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundreds of websites, apps and games. But most importantly, I realized that my greatest passion is teaching.</p>
            </div>
            
            <Button variant="outline" asChild>
              <Link href="/instructors/angela-yu">View Profile</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Other Courses by Dr. Angela Yu</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "iOS App Development Bootcamp",
              students: "850,421",
              rating: "4.8",
              image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              title: "Complete Python Developer",
              students: "542,312",
              rating: "4.7",
              image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              title: "Complete Flutter Development",
              students: "325,632",
              rating: "4.8",
              image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          ].map((course, index) => (
            <Link key={index} href="#" className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center text-sm text-amber-500 mt-1">
                    <Star className="h-3 w-3 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}