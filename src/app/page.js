import React from "react";
import LandingHeroSection from "@components/landing-page/LandingHeroSection";
import LandingResearchSection from "@components/landing-page/LandingResearchSection";
import LandingSolutionSection from "@components/landing-page/LandingSolutionSection";
import LandingLearnSection from "@components/landing-page/LandingLearnSection";
import LandingCommunitySection from "@components/landing-page/LandingCommunitySection";
import LandingBusinessSection from "@components/landing-page/LandingBusinessSection";

export const metadata= {
  title: "trafy - Privacy first Resilient AI at scale",
  description:
    "Build for Easy Agent Development",
  openGraph: {
    url: "https://trafy.ai",
    type: "website",
    title: "trafy - Privacy first Resilient AI at scale",
    description:
    "Build for Easy Agent Development",
    // images: [
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
    //     width: 1200,
    //     height: 630,
    //     alt: "trafy"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "trafy - Privacy first Resilient AI at scale",
    description:
    "Build for Easy Agent Development",
    // creator: "@dminhvu02",
    // site: "@dminhvu02",
    // images: [
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/testing-f9c8c.appspot.com/o/opengraph-image%20(1).png?alt=media&token=0683e583-ffc7-417f-9701-a04ed58305e7",
    //     width: 1200,
    //     height: 630,
    //     alt: "trafy"
    //   }
    // ]
  },
  alternates: {
    canonical: "https://trafy.ai",
  }
};


export default function Home() {
  return (
  <>
  <LandingHeroSection/>
  <LandingResearchSection/>
  <LandingSolutionSection/>
  <LandingBusinessSection/>
  <LandingLearnSection/>
  <LandingCommunitySection/>
  </>
  );
}
