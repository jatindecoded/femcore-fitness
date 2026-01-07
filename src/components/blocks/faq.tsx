import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Membership",
    questions: [
      {
        question: "Is FemCORE Fitness only for women?",
        answer:
          "Yes! FemCORE is a female-only gym, designed exclusively for women of all ages and fitness levels.",
      },
      {
        question: "How do I join FemCORE?",
        answer:
          "You can sign up online or visit us at our Vikaspuri location. Our team will help you choose the best membership plan for your goals.",
      },
      {
        question: "Can I try a class before joining?",
        answer:
          "Absolutely! We offer free trial classes for new members. Contact us to book your spot.",
      },
    ],
  },
  {
    title: "Facilities & Programs",
    questions: [
      {
        question: "Are trainers at FemCORE female?",
        answer:
          "Yes, all our trainers are certified female professionals dedicated to helping you achieve your fitness goals.",
      },
      {
        question: "What kind of classes do you offer?",
        answer:
          "We offer a variety of group classes including yoga, strength training, Zumba, HIIT, and more—all designed for women.",
      },
      {
        question: "Is the gym safe and private?",
        answer:
          "FemCORE is committed to providing a safe, secure, and private environment for all our members.",
      },
    ],
  },
  {
    title: "Other questions",
    questions: [
      {
        question: "Where is FemCORE located?",
        answer:
          "We are located at A-123, Vikaspuri, New Delhi, 110018.",
      },
      {
        question: "How can I contact FemCORE?",
        answer:
          "You can email us at info@femcore.in or call us at +91-9876543210.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
