import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Stats } from "@/components/stats";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Reveal3D } from "@/components/reveal-3d";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Reveal3D>
          <Projects />
        </Reveal3D>

        <Reveal3D>
          <Stats />
        </Reveal3D>

        <TechStack />

        <Reveal3D>
          <Experience />
        </Reveal3D>

        <Reveal3D>
          <Education />
        </Reveal3D>

        <Reveal3D>
          <About />
        </Reveal3D>

        <Reveal3D>
          <Contact />
        </Reveal3D>
      </main>
      <Footer />
    </>
  );
}
