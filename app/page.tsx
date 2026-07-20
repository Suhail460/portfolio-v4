import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Capabilities } from "@/components/sections/capabilities";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { DiscoveryDojoPreview } from "@/components/sections/discovery-dojo-preview";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="main-content" role="main">
      <Hero />
      <Experience />
      <Capabilities />
      <CaseStudiesPreview />
      <DiscoveryDojoPreview />
      <Contact />
    </main>
  );
}
