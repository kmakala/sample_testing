"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Welcome back | Snap up this special deal and build the skills you need for the future you want.",
  "New Year Sale | Get up to 85% off on selected courses. Limited time offer!",
  "Learn from experts | Join thousands of students already learning on UpSkillZone.",
  "Master new skills | Transform your career with our industry-leading courses."
];

export function Banner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#cbeef3] overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full text-center"
          >
            <p className="text-sm font-medium text-gray-900">
              {messages[currentMessageIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}