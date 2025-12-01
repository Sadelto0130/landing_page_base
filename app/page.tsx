"use client";
import { Hero } from "@/components/Hero";
import { LandingDemo } from "@/components/LandingDemo";
import { PriceSection } from "@/components/PriceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <LandingDemo />
      <PriceSection />
      <ContactSection />
    </>
  );
}
