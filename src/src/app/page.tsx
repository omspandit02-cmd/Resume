import ContactUs from "@/components/contact-us";
import CreativeToolbox from "@/components/creative-toolbox";
import Marquee from "@/components/Marquee";
import ProcessSection from "@/components/process-section";
import ProfileSection from "@/components/profile-section";
import ProjectSection from "@/components/projects-section";
import { Details, Exp, Works } from "../../constant/details";

export default function Home() {
  return (
    <>
      <ProfileSection />
      <Marquee details={Details} />
      <ProjectSection />
      <CreativeToolbox />
      <Marquee details={Works} />
      <ProcessSection />
      <ContactUs />
      <Marquee details={Exp} />
    </>
  );
}
