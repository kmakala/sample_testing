"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

const careers = [
  {
    title: "Senior Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "We're looking for an experienced Full Stack Developer to join our growing team. You'll be working on our core platform, building new features and improving existing ones."
  },
  {
    title: "UX/UI Designer",
    location: "Hybrid",
    type: "Full-time",
    salary: "$90k - $120k",
    description: "Join our design team to create beautiful, intuitive interfaces for our educational platform. You'll work closely with product managers and developers to bring designs to life."
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Help us build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure our platform's reliability and scalability."
  }
];

export default function CareersPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Join Our Team</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We're looking for talented individuals to help us shape the future of education
          </p>
        </div>

        <div className="grid gap-6">
          {careers.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{job.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {job.type}
                  </span>
                </CardTitle>
                <CardDescription>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Don't see a position that matches your skills? Email us at{" "}
            <a href="mailto:kumar@upskillzone.com" className="text-primary hover:underline">
              kumar@upskillzone.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}