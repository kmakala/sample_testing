import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Cookie Policy</CardTitle>
          <CardDescription>Learn about how we use cookies on our website</CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <h2 className="text-2xl font-semibold mt-6 mb-4">What are cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently and provide a better user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">How we use cookies</h2>
          <p className="mb-4">
            We use cookies to understand how you use our website and to improve our services. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remembering your preferences and settings</li>
            <li>Keeping you signed in to your account</li>
            <li>Understanding how you use our website</li>
            <li>Improving our website based on this information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Types of cookies we use</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
            <li><strong>Functional cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Managing cookies</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}