"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">123 Education Street, Learning City, 12345</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">kumar@upskillzone.com</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message"
                required
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}