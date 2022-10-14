import { useState } from "react";
import Layout from "/components/layout";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import CTA from "../components/cta/cta";
import {
  Container,
  PrimaryButton,
  SecondryButton,
} from "../styles/commonStyles";
import {
  HeroSection,
  HeroHeading,
  Para,
  HeroBtnBlock,
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
  AutomateSection,
  AutomateText,
  BottomList,
  CardWrapper,
  CardItem,
  CardTextView,
  IconView,
  IconWithoutView,
  LineIcon,
  HelpSection,
  HelpMain,
  HelpLeft,
  HelpLeftSub,
  HelpLink,
  HelpWrap,
  HelpMargin,
} from "../styles/homepageStyles";
import BusunessSlider from "../components/business-slider/businessslider";
import ExtensionSlider from "../components/extensionslider/extensionslider";

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
            <HeroHeading>
              It’s all about connection<span>.</span>
            </HeroHeading>
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
                  <Link href={"#"}>
                    <a className="activetab">Messaging</a>
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>
                    <a>File</a>
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>
                    <a>Helpdesk</a>
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>
                    <a>Forms</a>
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>
                    <a>Billing</a>
                  </Link>
                </TabBox>
                <TabBox>
                  <Link href={"#"}>
                    <a>Contracts</a>
                  </Link>
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
          <ExtensionSlider />
        </Extension>
        <AutomateSection>
          <Container>
            <AutomateText>
              <h2>Automate your firm</h2>
              <p>
                Automations let you configure workflows within your portal and
                with external tools. Assign an onboarding form to new clients,
                greet new clients with a welcome message, set up a default
                folder structures for your client files, and more. Use
                automations with Zapier or go fully custom with our
                <span> API.</span>
              </p>
            </AutomateText>
            <BottomList>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#60;= 50</span>
                  </CardTextView>
                  <IconView>
                    <Image
                      src="/images/true-icon.svg"
                      width={20}
                      height={20}
                      alt="link-icon"
                    />
                  </IconView>
                  <LineIcon>
                    <Image
                      src="/images/left-line.svg"
                      width={65}
                      height={130}
                      alt="link-icon"
                    />
                  </LineIcon>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#60;= 50</span>
                  </CardTextView>
                  <IconView>
                    <Image
                      src="/images/process-icon.svg"
                      width={20}
                      height={20}
                      alt="process-icon"
                    />
                  </IconView>
                  <LineIcon className="hr-icon">
                    <Image
                      src="/images/hr-line.svg"
                      width={65}
                      height={130}
                      alt="hr-icon"
                    />
                  </LineIcon>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/linkicon.svg"
                    width={35}
                    height={35}
                    alt="link-icon"
                  />
                  <CardTextView>
                    <h5>Condition</h5>
                    <span>Company size &#62; 50</span>
                  </CardTextView>
                  <LineIcon>
                    <Image
                      src="/images/lg2-icon.svg"
                      width={65}
                      height={130}
                      alt="hr-icon"
                    />
                  </LineIcon>
                </CardItem>
              </CardWrapper>
              <CardWrapper>
                <CardItem>
                  <Image
                    src="/images/action-icon.svg"
                    width={35}
                    height={35}
                    alt="action-icon"
                  />
                  <CardTextView>
                    <h5>Action</h5>
                    <span>Assign small business onboarding form</span>
                  </CardTextView>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/msg-icon2.svg"
                    width={35}
                    height={35}
                    alt="msg-icon"
                  />
                  <CardTextView>
                    <h5>Action</h5>
                    <span>Send message with scheduling link</span>
                  </CardTextView>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
                <CardItem>
                  <Image
                    src="/images/salesforce-icon.svg"
                    width={35}
                    height={35}
                    alt="sales-icon"
                  />
                  <CardTextView>
                    <h5>Action</h5>
                    <span>Create lead in Salesforce</span>
                  </CardTextView>
                  <IconWithoutView></IconWithoutView>
                </CardItem>
              </CardWrapper>
            </BottomList>
          </Container>
        </AutomateSection>
        <HelpSection>
          <Container>
            <HelpMain>
              <HelpLeft>
                <h3>The help you need, when you need it</h3>
                <HelpWrap>
                  <HelpLeftSub>
                    <h4>Our Community</h4>
                    <p>
                      Meet our team and a community of businesses that run on
                      Copilot. Requires a Slack account.
                    </p>
                    <HelpLink>
                      <a>Join Community</a>
                      <Image
                        src="/images/rightarrow.svg"
                        width={8}
                        height={14}
                        alt="right-arrow"
                      ></Image>
                    </HelpLink>
                  </HelpLeftSub>
                  <HelpLeftSub>
                    <h4>Our Community</h4>
                    <p>
                      Meet our team and a community of businesses that run on
                      Copilot. Requires a Slack account.
                    </p>
                    <HelpLink>
                      <a>Join Community</a>
                      <Image
                        src="/images/rightarrow.svg"
                        width={8}
                        height={14}
                        alt="right-arrow"
                      ></Image>
                    </HelpLink>
                  </HelpLeftSub>
                </HelpWrap>
                <HelpMargin>
                  <HelpWrap>
                    <HelpLeftSub>
                      <h4>Our Community</h4>
                      <p>
                        Meet our team and a community of businesses that run on
                        Copilot. Requires a Slack account.
                      </p>
                      <HelpLink>
                        <a>Join Community</a>
                        <Image
                          src="/images/rightarrow.svg"
                          width={8}
                          height={14}
                          alt="right-arrow"
                        ></Image>
                      </HelpLink>
                    </HelpLeftSub>
                    <HelpLeftSub>
                      <h4>Our Community</h4>
                      <p>
                        Meet our team and a community of businesses that run on
                        Copilot. Requires a Slack account.
                      </p>
                      <HelpLink>
                        <a>Join Community</a>
                        <Image
                          src="/images/rightarrow.svg"
                          width={8}
                          height={14}
                          alt="right-arrow"
                        ></Image>
                      </HelpLink>
                    </HelpLeftSub>
                  </HelpWrap>
                </HelpMargin>
              </HelpLeft>

              <Image
                src="/images/helpimage.png"
                width={447}
                height={661}
                alt="right-arrow"
                objectFit="cover"
              />
            </HelpMain>
          </Container>
        </HelpSection>

        <CTA />
      </Layout>
    </>
  );
}
