import { NextSeo } from "next-seo";
// import Link from "next/link";
// import Image from "next/image";
import Layout from "../../components/layout";
// import Navbar from "../../components/navbar/navbar";
// import useMobileDevice from "../../hooks/useMobileDevice";
import { Container } from "../../styles/commonStyles";
import { HeroSection } from "../../styles/mudulebillingStyles";
import CTA from "../../components/cta/cta";
import Navbar from "../../components/navbar/navbar";

export default function NewIndex() {
  // const mobile = useMobileDevice();
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <p>dsd</p>
          </Container>
        </HeroSection>

        <CTA />
      </Layout>
    </>
  );
}
