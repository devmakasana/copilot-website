// TODO: switch is not working

import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Productivity from "../../components/productivity/productivity";
import { NextSeo } from "next-seo";
import DesktopPricing from "../../components/desktoppricing/desktoppricing";
import { LinearBg, PricingMainBlock } from "../../styles/commonStyles";
import useMobileDevice from "../../hooks/useMobileDevice";
import MobilePricing from "../../components/mobilepricing/mobilepricing";

export default function NewIndex() {
  const mobile = useMobileDevice();
  return (
    <>
      <NextSeo
        title="Create your portal, pick a plan later"
        description="Try Copilot free for 14 days, no credit card required"
      />
      <Layout>
        <Navbar />
        <PricingMainBlock>
          <LinearBg className="pricing" />
          {mobile ? <MobilePricing /> : <DesktopPricing />}
        </PricingMainBlock>
        <Productivity />
      </Layout>
    </>
  );
}
