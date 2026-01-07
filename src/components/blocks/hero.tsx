import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Women-Only Classes",
    description: "Exclusive group workouts designed for women of all ages and fitness levels.",
    icon: CircleDot,
  },
  {
    title: "Safe & Supportive Community",
    description: "A welcoming space in Vikaspuri where women empower each other.",
    icon: Blend,
  },
  {
    title: "Certified Female Trainers",
    description: "Expert guidance from experienced, certified female fitness professionals.",
    icon: Diamond,
  },
  {
    title: "Personalized Fitness Plans",
    description: "Custom programs tailored to your unique goals and lifestyle.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-24 lg:pt-56 flex flex-col-reverse lg:flex-col">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 tracking-tight text-4xl lg:text-5xl  ">
            FemCORE Fitness – Empowering Women in Vikaspuri
          </h1>

          <p className="text-muted-foreground text-lg mt-5 font-inter">
            Vikaspuri’s premier female-only gym. Discover a safe, supportive, and inspiring space designed exclusively for women to achieve their fitness goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/signup">
                Join the FemCORE Community
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/about"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Learn More About Us
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-display">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-12 mx-6">
        <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto ">
          <Image
            src="https://images.unsplash.com/photo-1662549905044-e3f71c293989?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Women working out at FemCORE Fitness, Vikaspuri"
            fill
            className="rounded-2xl object-cover object-center shadow-lg "
            priority
          />
        </div>
      </div>
    </section>
  );
};
