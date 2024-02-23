import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bkg-image.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your AUTO Motivated Service
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Experience top-notch auto repairs with skilled technicians, quality service, and competitive prices. Drive in today for excellence in automotive care!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <section name="contact" id="contact">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="container mx-auto">
            <PageTitle section="Contact Us" heading=
            "Ready to get back on the road with confidence?">
              Complete this form and we will get back to you in 24 hours.
            </PageTitle>
            <form action="https://formspree.io/f/xpzvrzlp"
  method="POST" className="mx-auto w-full mt-12 lg:w-5/12">
              <div className="mb-8 flex gap-8">
                <Input variant="outlined" size="lg" label="Full Name" name="Name"/>
                <Input variant="outlined" size="lg" label="Phone Number" name="Phone Number"/>
              </div>
              <Textarea variant="outlined" size="lg" label="Message" rows={8} name="Message"/>
              <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
                Send Message
              </Button>
            </form>
                    </div>
          </div>
          </section>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Reviews" heading="Here is what people say about us">
          Discover why our customers rave about our service! Read our glowing reviews and experience the excellence for yourself. Your satisfaction is our priority.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ name, position }) => (
              <TeamCard
                key={name}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}

export default Home;
