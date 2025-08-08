import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full z-10">
            <Container>
              <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto md:mx-0 rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                <Icons.stars className="size-5" />
                <span className="text-sm text-white">Behind PruneUrl</span>
              </div>
            </Container>

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight text-center lg:text-left mt-6 w-full">
                Meet the Team <br className="hidden lg:inline-block" /> Powering
                Smarter Links
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground text-center lg:text-left mt-4 max-w-2xl mx-auto lg:mx-0">
                Learn how our dedicated team built PruneUrl — a platform focused
                on secure, efficient, and intelligent link management for the
                modern web.
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="hidden lg:flex flex-col gap-2 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    AI-based link safety & spam detection
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Real-time analytics & click tracking
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.3}>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Button size="md">Start Shortening Now</Button>
              </div>
            </Container>
          </div>

          <Container className="w-full z-30">
            <div className="">
              <Image
                src="/images/about/hero.svg"
                alt="About PruneUrl"
                priority
                width={2932}
                height={1664}
                loading="eager"
                className="w-full h-full"
              />
            </div>
          </Container>
        </div>

        <Container delay={0.4}>
          <div className="grid grid-cols-3 lg:place-items-stretch mt-16 lg:mt-24">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                secure links scanned
              </span>
              <h3 className="text-3xl font-semibold">22K+</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                monthly redirects
              </span>
              <h3 className="text-3xl font-semibold">50M+</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                QR codes generated
              </span>
              <h3 className="text-3xl font-semibold">45K+</h3>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutHero;
