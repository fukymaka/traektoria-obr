import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <div id="company"></div>
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Траектория образования" overTitle="О компании">
            <p>
            ООО «Траектория образования» - развивающаяся компания, выполняющая работы в области разработки программного обеспечения, систем учёта и тестирования, а также оказании услуг по независимому консалтингу ИТ.{' '}
              
            </p>
          </BasicSection>
          <div id="services"></div>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Основные виды оказываемых услуг:" overTitle="Услуги" reversed>
            
            <ul>
              <li>Разработка компьютерного программного обеспечения</li>
              <li>Деятельность консультативная и работы в области компьютерных технологий</li>
              <li>Деятельность, связанная с использованием вычислительной техники и информационных технологий</li>
              <li>Деятельность по созданию и использованию баз данных и информационных ресурсов</li>
              <li>Научные исследования и разработки в области естественных и технических наук прочие</li>
              <li>Деятельность по предоставлению прочих вспомогательных услуг для бизнеса, не включенная в другие группировки</li>
            </ul>
            
           
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <div id="solutions"></div>
          <FeaturesGallery />
          {/* <Features /> */}
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
