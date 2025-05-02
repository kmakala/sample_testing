"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const routes = [
  { path: "/", label: "Home" },
  { path: "/courses", label: "All Courses" },
  { path: "/about", label: "About Us" },
  { path: "/login", label: "Login" },
  { path: "/register", label: "Register" },
  { path: "/teach", label: "Become an Instructor" },
  { path: "/help", label: "Help Center" }
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      <div className="grid gap-4">
        {routes.map((route) => (
          <Card key={route.path} className="hover:bg-accent/50 transition-colors">
            <Link href={route.path}>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{route.label}</h2>
                  <p className="text-muted-foreground text-sm">{route.path}</p>
                </div>
                <ChevronRight className="text-muted-foreground" />
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}