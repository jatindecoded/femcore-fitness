"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "₹1,499",
    yearlyPrice: "₹15,999",
    description: "Perfect for beginners",
    features: [
      "Access to gym floor",
      "Women-only group classes",
      "Locker & shower facilities",
      "Community events",
    ],
  },
  {
    name: "Standard",
    monthlyPrice: "₹2,499",
    yearlyPrice: "₹25,999",
    description: "Most popular",
    features: [
      "All Basic features",
      "Personalized fitness plan",
      "Unlimited group classes",
      "Guest pass (2/month)",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: "₹3,499",
    yearlyPrice: "₹34,999",
    description: "For the dedicated",
    features: [
      "All Standard features",
      "1-on-1 personal training (4/month)",
      "Nutrition counseling",
      "Priority support",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Membership Plans
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Choose the perfect plan for your fitness journey. All memberships are for women only and include access to our safe, modern facilities in Vikaspuri.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.name === "Startup"
                  ? "outline-primary origin-top outline-4"
                  : ""
                }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      <span className="text-muted-foreground">
                        {isAnnual ? "per year" : "per month"}
                      </span>
                    </div>
                  </div>
                </div>

                {plan.name !== "Free" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">Billed annually</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Startup" ? "default" : "outline"}
                >
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
