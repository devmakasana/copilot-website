import { useState } from "react";
import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Productivity from "../components/productivity/productivity";
import Testimonial from "../components/testimonial/testimonial";
import Navbar from "../components/navbar/navbar";
import Slider from "../components/slider/slider";
import CTA from "../components/cta/cta";
import {
  Container,
  FcfeatureWrap,
  LogoListWrap,
  LogosItem,
  LogosList,
  LogosManilock,
  LogosText,
  PrimaryButton,
  SecondryButton,
} from "../styles/commonStyles";
import {
  FeatureBlock,
  FeatureTag,
  Scfeaturetitle,
  SectionHeading,
  FeatureItem,
  FeatureLinkBlock,
  FeatureCardTitle,
  FeatureImg,
  LearnMoreLink,
  FeatureWrapBlock,
  HeroSection,
  HeroHeading,
  Para,
  HeroBtnBlock,
  LightBox,
  LightBoxContainer,
  VideoContainer,
  CloseButton,
  Iframe,
  ReviewLogo,
  Reviewimage,
  ReviewRight,
  BusinessSection,
  BusinessText,
  Functionality,
  TopFunctionWrap,
  BottomFunction,
  TabRow,
  TabBox,
  TabName,
  LeftB,
  RightB,
  CenterBox,
  ContainWrap,
  LeftDetail,
  RightDetail,
  Extension,
} from "../styles/homepageStyles";
import { Heading2 } from "../styles/styles";
import BusunessSlider from "../components/business-slider/businessslider";

export default function NewIndex() {
  const [isLightBox, setIsLightBox] = useState(false);

  return (
    <>
      <NextSeo
        title="Cloud Base Sales CRM | Free CRM Software Solution - copilot"
        description="copilot offers cloud base sales CRM software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroHeading>It’s all about connection.</HeroHeading>
            <Para>
              Give your customers a one-stop shop experience with a client
              portal that streamlines messaging, payments, file-sharing, help
              centers, dashboard access, and more.
            </Para>
            <HeroBtnBlock>
              <PrimaryButton>
                <Link href="/">
                  <a>Start Trial</a>
                </Link>
              </PrimaryButton>
              <SecondryButton>
                <Link href="/request-demo">
                  <a>Book Demo</a>
                </Link>
              </SecondryButton>
            </HeroBtnBlock>

            <ReviewLogo>
              <>
                <Image
                  src="/images/g2.svg"
                  alt="hero-feature"
                  height={32}
                  width={33}
                />
              </>
              <ReviewRight>
                <Reviewimage>
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="hero-feature"
                    height={20}
                    width={20}
                  />
                </Reviewimage>
                <p>Based on 100+ reviews</p>
              </ReviewRight>
            </ReviewLogo>
          </Container>
        </HeroSection>
        <BusinessSection>
          <Container>
            <BusinessText>
              <h2>
                Thousands of businesses are streamlining the client experience
              </h2>
              <p>
                Whether you’re starting a new business, looking to improve
                operations, or want to accelerate growth, our goal to be a
                valuable partner at every stage of the business lifecycle.{" "}
              </p>
              <SecondryButton>
                <Link href="/request-demo">
                  <a>Why Copilot</a>
                </Link>
              </SecondryButton>
            </BusinessText>
          </Container>
          <BusunessSlider />
        </BusinessSection>
        <Functionality>
          <Container>
            <TopFunctionWrap>
              <h3>Powerful out-of-the box functionality, ready to go.</h3>
              <p>
                Provide clients a uniform experience with on-brand design,
                combined in-product notifications, and consistent email
                notifications. And with modularily built-in, start with just one
                module and add more when the time is right.
              </p>
            </TopFunctionWrap>
            <BottomFunction>
              <TabRow>
                <TabBox>
                  <LeftB></LeftB>
                  <CenterBox>
                    <Image
                      src="/images/msg.svg"
                      width={44}
                      height={44}
                      alt="msg-icon"
                    />
                    <TabName>Messaging</TabName>
                  </CenterBox>
                  <RightB></RightB>
                </TabBox>
                <TabBox>
                  <CenterBox>
                    <Image
                      src="/images/fileicon.svg"
                      width={44}
                      height={44}
                      alt="msg-icon"
                    />
                    <TabName>File</TabName>
                  </CenterBox>
                </TabBox>
                <TabBox>
                  <CenterBox>
                    <Image
                      src="/images/diskicon.svg"
                      width={44}
                      height={44}
                      alt="msg-icon"
                    />
                    <TabName>Helpdesk</TabName>
                  </CenterBox>
                </TabBox>
                <TabBox>
                  <CenterBox>
                    <Image
                      src="/images/formsicon.svg"
                      width={44}
                      height={44}
                      alt="msg-icon"
                    />
                    <TabName>Forms</TabName>
                  </CenterBox>
                </TabBox>
                <TabBox>
                  <CenterBox>
                    <Image
                      src="/images/billingicon.svg"
                      width={44}
                      height={44}
                      alt="msg-icon"
                    />
                    <TabName>Billing</TabName>
                  </CenterBox>
                </TabBox>
                <TabBox>
                  <CenterBox>
                    <Image
                      src="/images/contractsicon.svg"
                      width={44}
                      height={44}
                      alt="bill-icon"
                    />
                    <TabName>Contracts</TabName>
                  </CenterBox>
                </TabBox>
              </TabRow>
              <ContainWrap>
                <LeftDetail>
                  <h4>Messaging</h4>
                  <p>
                    Let clients securely and seamlessly message you from your
                    portal. And give your team the ability to centralize client
                    communication and stay organized.{" "}
                  </p>
                  <SecondryButton>
                    <Link href="/request-demo">
                      <a>Learn More</a>
                    </Link>
                  </SecondryButton>
                </LeftDetail>
                <RightDetail>
                  <Image
                    src="/images/msgscreen.png"
                    width={881}
                    height={550}
                    alt="msg-screen"
                  />
                </RightDetail>
              </ContainWrap>
            </BottomFunction>
          </Container>
        </Functionality>
        <Extension>
          <Container>
            <BusinessText>
              <h2>Go even further with Extensions</h2>
              <p>
                Streamline the client experience even more by embedding products
                you already use and surface them in the client experience —
                Calendly for scheduling, Airtable kanban boards, ClickUp forms,
                Google Data Studio dashboards, and thousands more.
              </p>
              <SecondryButton>
                <Link href="/request-demo">
                  <a>See all Extensions </a>
                </Link>
              </SecondryButton>
            </BusinessText>
          </Container>
        </Extension>
        <LogosManilock>
          <LogosText>Trusted By Innovative Companies Worldwide</LogosText>
          <LogoListWrap>
            <LogosList>
              <LogosItem>
                <Image
                  src="/images/heliostar-logo_1.svg"
                  width={175}
                  height={32}
                  alt="heliostar"
                ></Image>
              </LogosItem>
              <LogosItem>
                <Image
                  src="/images/bearbook-logos.svg"
                  width={162}
                  height={37}
                  alt="bearbook"
                ></Image>
              </LogosItem>
              <LogosItem>
                <Image
                  src="/images/MailCanvas-logos.svg"
                  width={172}
                  height={48}
                  alt="mailcanvas"
                ></Image>
              </LogosItem>
              <LogosItem>
                <Image
                  src="/images/Be-Designer-logos.svg"
                  width={138}
                  height={40}
                  alt="be-designer"
                ></Image>
              </LogosItem>
              <LogosItem>
                <Image
                  src="/images/eventgenius-logos.svg"
                  width={145}
                  height={32}
                  alt="eventgenius"
                ></Image>
              </LogosItem>
            </LogosList>
          </LogoListWrap>
        </LogosManilock>

        <FcfeatureWrap>
          <Container>
            <Scfeaturetitle>
              <FeatureTag>
                <span>Awesome Features</span>
              </FeatureTag>

              <SectionHeading>
                Simplify your Sales & Customer Success with copilots excellent
                features.
              </SectionHeading>
            </Scfeaturetitle>
            <FeatureWrapBlock>
              <FeatureBlock>
                <FeatureItem>
                  <Link href="/features/lead-management">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f11b91c11596caf67b_lead-1.png"
                            width={152}
                            alt="Lead Managment"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Lead Managment</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/sales-reporting">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f09f69f83e43c86519_analitics-1.png"
                            width={152}
                            alt="Sales Reporting"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Sales Reporting</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/call-sms">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f24a8636086d2a5e03_validation-1.png"
                            width={152}
                            alt="Call & SMS"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Call & SMS</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/email-sync">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3ef3600cbbc334ade6d_email-sync-1.png"
                            width={152}
                            alt="Email Sync"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Email Sync</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/customization">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3ef9a97c1718f992481_customize-1.png"
                            width={152}
                            alt="Easy Customization"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Easy Customization</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/deal-pipeline">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/deal-pipeline.png"
                            width={152}
                            alt="Deal Pipeline"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Deal Pipeline</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/activities-goals">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/goals.png"
                            width={152}
                            alt="Activities & Goals"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Activities & Goals</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
                <FeatureItem>
                  <Link href="/features/integration">
                    <a>
                      <FeatureLinkBlock>
                        <FeatureImg>
                          <Image
                            src="/images/61c1c3f07dafc021fbe25253_integration-1.png"
                            width={152}
                            alt="Integration"
                            height={118}
                          ></Image>
                        </FeatureImg>
                        <FeatureCardTitle>Integration</FeatureCardTitle>
                      </FeatureLinkBlock>
                      <LearnMoreLink>
                        <span>Learn More</span>
                        <Image
                          src="/images/right-icon_1.svg"
                          loading="lazy"
                          width="10"
                          height="10"
                          alt="Right Icon"
                        ></Image>
                      </LearnMoreLink>
                    </a>
                  </Link>
                </FeatureItem>
              </FeatureBlock>
            </FeatureWrapBlock>
          </Container>
        </FcfeatureWrap>
        <Slider />
        <CTA />
        <Productivity />
        <Testimonial />
      </Layout>
      <LightBox
        isLightBox={isLightBox}
        onClick={() => {
          setIsLightBox(false);
        }}
      >
        <LightBoxContainer>
          <CloseButton
            onClick={() => {
              setIsLightBox(false);
            }}
          >
            ✕
          </CloseButton>
          <VideoContainer>
            <Iframe
              width="960"
              height="540"
              src={
                isLightBox &&
                "https://www.youtube.com/embed/R5_1CeyF9L4?autoplay=1"
              }
              frameborder="0"
              allowfullscreen
            ></Iframe>
          </VideoContainer>
        </LightBoxContainer>
      </LightBox>
    </>
  );
}
