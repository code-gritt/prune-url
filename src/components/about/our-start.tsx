import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const OurStart = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
          {/* Badge */}
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white">Our Start</span>
            </div>
          </Container>

          {/* Heading */}
          <Container delay={0.1} className="flex grow">
            <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-center mt-4">
              How PruneUrl Was Born
            </h2>
          </Container>

          {/* Description */}
          <Container delay={0.3} className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground text-left md:text-center mt-4 max-w-2xl">
              <span className="text-balance">
                PruneUrl began as a response to a growing need for smarter,
                safer link sharing. With phishing and malicious redirects on the
                rise, we envisioned a platform that combines link shortening
                with built-in AI-powered threat detection and privacy-first
                tracking.
              </span>
              <br />
              <br />
              <span className="mt-4 text-balance">
                Built by a distributed team of developers and cybersecurity
                enthusiasts, our goal is to empower creators, marketers, and
                businesses to share links with full control, confidence, and
                clarity.
              </span>
            </p>
          </Container>

          {/* CTA Box */}
          <Container delay={0.5} className="w-full max-w-4xl mx-auto">
            <div className="mt-10 w-full">
              <div className="flex flex-col items-center justify-center text-center h-80 w-full bg-primary rounded-xl lg:rounded-2xl p-6">
                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black">
                  Start shortening smarter <br className="hidden lg:block" />
                  with built-in AI & analytics
                </h3>
                <Button size="md" variant="black" className="mt-6">
                  Try PruneUrl Free
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default OurStart;
