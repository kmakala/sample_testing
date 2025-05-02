"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, Users, Zap } from "lucide-react";

export default function AffiliatePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Affiliate Program
          </h1>
          <p className="text-lg text-muted-foreground">
            Join our affiliate program and earn rewards by sharing our platform with others
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Earn Rewards</CardTitle>
              <CardDescription>
                Get up to 30% commission on every successful referral
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Easy Sharing</CardTitle>
              <CardDescription>
                Share your unique referral link with your network
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Quick Payouts</CardTitle>
              <CardDescription>
                Receive monthly payments directly to your account
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4">1</span>
                <div>
                  <h3 className="font-medium">Sign Up</h3>
                  <p className="text-muted-foreground">Create your affiliate account and get your unique referral link</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4">2</span>
                <div>
                  <h3 className="font-medium">Share</h3>
                  <p className="text-muted-foreground">Share your link with your audience through your preferred channels</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4">3</span>
                <div>
                  <h3 className="font-medium">Earn</h3>
                  <p className="text-muted-foreground">Earn commissions when people sign up using your referral link</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Join Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}