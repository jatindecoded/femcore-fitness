import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "100%",
    label: "Women Members",
  },
  {
    value: "10+",
    label: "Certified Female Trainers",
  },
  {
    value: "Safe",
    label: "Supportive Community",
  },
  {
    value: "Modern",
    label: "Facilities in Vikaspuri",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Empowering Women, Building Community
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            FemCORE Fitness is Vikaspuri’s exclusive female-only gym, dedicated to helping women achieve their true strength in a safe, modern, and inspiring environment.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            At FemCORE, we believe every woman deserves a space where she feels empowered, supported, and celebrated. Our mission is to foster a vibrant community of women who uplift each other, guided by certified female trainers and surrounded by state-of-the-art facilities.
            <br />
            <br />
            Whether you’re just starting your fitness journey or striving for new goals, FemCORE is here for you—right in the heart of Vikaspuri, New Delhi. Join us and discover your true strength!
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
