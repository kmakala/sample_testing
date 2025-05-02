"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function PressPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex items-center gap-2 mb-8">
        <Newspaper className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold">Press & Media</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Latest News</CardTitle>
            <CardDescription>Recent press releases and announcements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Platform Launch</h3>
                <p className="text-sm text-muted-foreground">January 15, 2025</p>
                <p className="mt-2">Announcing our innovative learning platform designed to transform online education.</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Media Kit</CardTitle>
            <CardDescription>Resources for media professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access our brand assets, company information, and media resources. For press inquiries, please contact our media relations team.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Get in touch with our media team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">For media inquiries:</p>
            <p className="text-primary">kumar@upskillzone.com</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}