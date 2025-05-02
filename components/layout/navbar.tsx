"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, ArrowUpRight, LogIn, GraduationCap } from 'lucide-react';
import { ModeToggle } from '@/components/layout/mode-toggle';

const categories = [
  {
    title: "Web Development",
    description: "Learn modern web development with HTML, CSS, JavaScript, React, and more.",
    href: "/categories/web-development",
  },
  {
    title: "Data Science",
    description: "Master data analysis, visualization, machine learning and AI.",
    href: "/categories/data-science",
  },
  {
    title: "Business",
    description: "Develop business skills in leadership, marketing, finance, and entrepreneurship.",
    href: "/categories/business",
  },
  {
    title: "Design",
    description: "Learn UI/UX design, graphic design, and product design principles.",
    href: "/categories/design",
  },
  {
    title: "Programming",
    description: "Master programming fundamentals and advanced concepts.",
    href: "/categories/programming",
  },
  {
    title: "Cloud Computing",
    description: "Learn cloud platforms, DevOps, and infrastructure management.",
    href: "/categories/cloud-computing",
  },
  {
    title: "Marketing",
    description: "Master digital marketing, SEO, social media, and analytics.",
    href: "/categories/marketing",
  },
  {
    title: "Mobile Development",
    description: "Build mobile apps for iOS and Android platforms.",
    href: "/categories/mobile-development",
  }
];

export function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <ArrowUpRight className="h-8 w-8 text-primary" />
            <span className="hidden font-bold sm:inline-block text-xl">UpSkillZone</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <NavigationMenuItem key={category.title}>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {['Courses', 'About'].map((item) => (
                  <NavigationMenuItem key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className={navigationMenuTriggerStyle()}
                    >
                      {item}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-[200px] lg:w-[300px] pl-8"
              />
            </div>
          </form>
          
          <ModeToggle />
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">User Name</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-courses">My Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setIsLoggedIn(false)}
                  className="text-red-500 focus:text-red-500"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/teach">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Teach
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Log in
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="flex items-center py-2">
                  <ArrowUpRight className="mr-2 h-5 w-5" />
                  <span className="font-bold">UpSkillZone</span>
                </Link>
                <Link href="/courses" className="py-2 nav-link">
                  Courses
                </Link>
                <Link href="/categories" className="py-2 nav-link">
                  Categories
                </Link>
                <Link href="/about" className="py-2 nav-link">
                  About
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  {!isLoggedIn ? (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/teach">Become an Instructor</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/login">Log in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register">Sign up</Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/dashboard" className="py-2">
                        Dashboard
                      </Link>
                      <Link href="/my-courses" className="py-2">
                        My Courses
                      </Link>
                      <Link href="/settings" className="py-2">
                        Settings
                      </Link>
                      <Button 
                        variant="destructive" 
                        onClick={() => setIsLoggedIn(false)}
                        className="mt-4"
                      >
                        Log out
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}