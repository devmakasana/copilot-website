import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Layout from "../../../components/layout";
import Navbar from "../../../components/navbar/navbar";
import {
  getAllBlogs,
  getCategoryWithSlug,
} from "../../../lib/contentful-blogs";
import {
  BlogHeroHeading,
  BlogWrap,
  CategoryWrap,
  CategoryWrapper,
} from "../../../styles/blogStyles";
import {
  BlogSpan,
  CategoryCard,
  CategoryCardHeading,
  CategoryContentBlock,
  CategoryImg,
  Circle,
  Container,
  LinearBg,
  PanelBlock,
  PublishDate,
  ScHeroSection,
} from "../../../styles/commonStyles";
import { NextSeo } from "next-seo";

export default function BlogCategory({
  preview,
  title,
  allPostsOfSlug: allPosts,
  currentPage,
}) {
  return (
    <>
      <NextSeo title={`${title}`} />
      <Layout>
        <Navbar />
        <ScHeroSection>
          <LinearBg className="feature" />
          <Container>
            <BlogHeroHeading>{title}</BlogHeroHeading>
            <CategoryWrapper>
              <CategoryWrap className="category">
                {allPosts?.map((item, index) => {
                  const categoryItem = item?.categoryCollection?.items[0];

                  return (
                    <CategoryCard key={`${categoryItem?.name}_index_${index}`}>
                      <Link href={`/blogs/${item?.slug}`}>
                        <a>
                          <CategoryImg>
                            <Image
                              src={item?.banner?.url ?? ""}
                              width={324}
                              height={200}
                              alt="category-image"
                              layout="responsive"
                            ></Image>
                          </CategoryImg>
                          <CategoryContentBlock>
                            <PanelBlock>
                              <BlogSpan>
                                <Link href="/">
                                  <a>{title}</a>
                                </Link>
                              </BlogSpan>
                              {item?.reader && (
                                <>
                                  <Circle></Circle>
                                  <BlogSpan>{item?.reader} min read</BlogSpan>
                                </>
                              )}
                            </PanelBlock>
                            <CategoryCardHeading>
                              {item?.title}
                            </CategoryCardHeading>
                            <PublishDate>
                              {moment(item?.date).format("MMMM D, YYYY")}
                            </PublishDate>
                          </CategoryContentBlock>
                        </a>
                      </Link>
                    </CategoryCard>
                  );
                })}
              </CategoryWrap>
            </CategoryWrapper>
          </Container>
        </ScHeroSection>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const Posts = (await getAllBlogs(preview)) || [];

  const allPostsOfSlug = Posts?.filter((item) =>
    item?.categoryCollection?.items.some(
      (categoryItem) => categoryItem?.slug === params?.slug
    )
  );

  const title = allPostsOfSlug[0]?.categoryCollection?.items.find(
    (category) => category?.slug === params?.slug
  )?.name;

  const currentPage = 1;
  const perPage = 9;
  var nextPage = (currentPage + 1).toString();
  const allPosts = allPostsOfSlug?.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  );
  return {
    props: { preview, title, allPostsOfSlug, currentPage },
  };
}

export async function getStaticPaths() {
  const allPosts = await getCategoryWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/blogs/category/${slug}`) ?? [],
    fallback: true,
  };
}
