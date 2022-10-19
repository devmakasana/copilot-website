// TODO: add pagination @kanji
// TODO: add date format on each item
// TODO: bring category on list item

import Layout from "/components/layout";
import { NextSeo } from "next-seo";
import { getAllBlogs } from "../../lib/contentful-blogs";
import Navbar from "../../components/navbar/navbar";
import {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  SchedulingApps,
  MenuWrap,
} from "../../styles/extensionsStyles";
import { Container, PrimaryButton } from "../../styles/commonStyles";
import CTA from "../../components/cta/cta";
import Link from "next/link";
import Image from "next/image";

export default function Extensions({ allPosts }) {
  return (
    <>
      <NextSeo
        title="copilot blogs to keep you up with the  Sales Tactics!"
        description="Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs."
      />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <h2>Embed products you already use</h2>
            <p>
              Give clients everything they need in one place. With Extensions,
              add custom sidebar items in the client experience by embedding
              products you already use — Calendly for scheduling, Airtable
              charts, ClickUp forms, Google Data Studio dashboards, and
              thousands more.
            </p>
            <PrimaryButton>
              <Link href="/">
                <a>Start Trial</a>
              </Link>
            </PrimaryButton>
          </Container>
        </HeroSection>
        <FeatureSection>
          <Container>
            <FeatureWrap>
              <FeatureLeft>
                <MenuWrap>
                  <Input placeholder="Find a product..." />
                  <Catagory>
                    <h4>Categories</h4>
                    <Catagoryitem className="active">
                      <Link href={"#Brief-Section"}>
                        <a>All</a>
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>
                        <a>Project management</a>
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>
                        <a>Data visualization</a>
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Brief-Section"}>
                        <a>Scheduling</a>
                      </Link>
                    </Catagoryitem>
                    <Catagoryitem>
                      <Link href={"#Integrations-Section"}>
                        <a>Integrations</a>
                      </Link>
                    </Catagoryitem>
                  </Catagory>
                </MenuWrap>
              </FeatureLeft>

              <FeatureRight>
                <Featured id="Brief-Section">
                  <h4>Featured</h4>
                  <FeatureMenu>
                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo1.svg"
                          alt="main-logo"
                          height={60}
                          width={236}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Calendly</h4>
                        <p>
                          Let clients schedule meetings with you by surfacing a
                          Calendly scheduling page.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Scheduling</p>
                      </CardEnd>
                    </FeatureCard>

                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo1.svg"
                          alt="main-logo"
                          height={60}
                          width={236}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Jotform</h4>
                        <p>
                          Lets clients to submit forms by surfacing a form
                          created in Jotform.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Scheduling</p>
                      </CardEnd>
                    </FeatureCard>

                    <FeatureCard>
                      <FeatureImg>
                        <Image
                          src="/images/featurelogo3.svg"
                          alt="main-logo"
                          height={60}
                          width={236}
                        />
                      </FeatureImg>
                      <CardText>
                        <h4>Airtable</h4>
                        <p>
                          Let clients to access grid, kanban, timeline,
                          calendar, form and other views.
                        </p>
                      </CardText>
                      <CardEnd>
                        <p>Project management</p>
                      </CardEnd>
                    </FeatureCard>
                  </FeatureMenu>
                </Featured>
                <ExtensionsSection>
                  <h4>Extensions</h4>
                  <p>
                    Integrations are non cilent facing apps that work with
                    Copilot’s infrastructure
                  </p>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </ExtensionsSection>

                <SchedulingApps>
                  <h4>Featured</h4>

                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>

                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>

                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </SchedulingApps>
                <ExtensionsSection id="Integrations-Section">
                  <h4>Integrations</h4>
                  <p>
                    Integrations are non cilent facing apps that work with
                    Copilot’s infrastructure
                  </p>
                  <ExtensionCard>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Calendly</h4>
                      </CardInfo>
                      <p>
                        Calendly is your scheduling automation platform for
                        eliminating the hassle of back...
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon2.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Jotform</h4>
                      </CardInfo>
                      <p>
                        Improve your workflow with powerful online forms
                        designed to meet your every need.
                      </p>
                    </CardSub>
                    <CardSub>
                      <CardInfo>
                        <Image
                          src="/images/Favicon3.svg"
                          alt="red-icon"
                          width={35}
                          height={35}
                          layout={"fixed"}
                        />
                        <h4>Airtable</h4>
                      </CardInfo>
                      <p>
                        Airtable is a low-code platform for building
                        collaborative apps. Customize your workflow, collab...
                      </p>
                    </CardSub>
                  </ExtensionCard>
                </ExtensionsSection>
              </FeatureRight>
            </FeatureWrap>
          </Container>
        </FeatureSection>
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) ?? [];

  return {
    props: { preview, Posts },
  };
}
