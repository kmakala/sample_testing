"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { MessageCircle, X } from "lucide-react";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    {
      id: 1,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sarah",
    },
    {
      id: 2,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Mike",
    },
    {
      id: 3,
      avatar: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "John",
    },
  ]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-50"
          >
            <Card className="w-[350px] shadow-lg">
              <div className="bg-primary p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary-foreground">Welcome 👋</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground hover:text-primary-foreground/80"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-primary-foreground/90 mt-1">
                  How can we help you today?
                </p>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex -space-x-2 mb-4">
                  {messages.map((message) => (
                    <Avatar
                      key={message.id}
                      className="border-2 border-background w-8 h-8"
                    >
                      <img src={message.avatar} alt={message.name} />
                    </Avatar>
                  ))}
                </div>
                <Button className="w-full justify-start text-left" variant="outline">
                  I want to train my team
                </Button>
                <Button className="w-full justify-start text-left" variant="outline">
                  I want to browse the course catalog
                </Button>
                <Button className="w-full justify-start text-left" variant="outline">
                  I need customer support help
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your bot conversation may be recorded for quality purposes.{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    View Privacy Policy
                  </a>
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}