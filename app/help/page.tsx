"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Book, MessageCircle, Mail } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Help Center</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions and get the support you need
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Documentation
              </CardTitle>
              <CardDescription>
                Browse our comprehensive guides and tutorials
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Community Support
              </CardTitle>
              <CardDescription>
                Connect with other users and share experiences
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  Getting started is easy! Simply create an account and explore our course catalog. You can enroll in any course that interests you and begin learning at your own pace.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment providers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, you can request a full refund within this period.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Still need help?
            </CardTitle>
            <CardDescription>
              Our support team is available 24/7 to assist you with any questions or concerns.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Contact us at{" "}
              <a href="mailto:support@example.com" className="text-primary hover:underline">
                support@example.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}