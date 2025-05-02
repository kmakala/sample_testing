"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              We take your privacy seriously and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account information (name, email, password)</li>
              <li>Profile information (avatar, bio)</li>
              <li>Course progress and completion data</li>
              <li>Payment information (processed securely through our payment providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To provide and improve our educational services</li>
              <li>To personalize your learning experience</li>
              <li>To communicate important updates and announcements</li>
              <li>To process payments and maintain billing records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information 
              from unauthorized access, disclosure, alteration, and destruction. Your data is encrypted 
              in transit and at rest.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal information. You can also 
              request a copy of your data or opt out of certain data collection practices. Contact our 
              support team for assistance with these requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our Privacy Policy or how we handle your data, please 
              contact our privacy team at kumar@upskillzone.com.
            </p>
          </section>

          <section className="text-sm text-gray-500 pt-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}