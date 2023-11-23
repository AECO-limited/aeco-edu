"use client";
import {
  PartnerCard,
  PartnersLogo,
  TopNav,
  Services,
  FullNews,
  SubNews,
  Testimonials,
} from "@/components";
import { useGetAllNews } from "@/hooks/newsHooks";
import Head from "next/head";

const partners = [
  {
    name: "Opuvia",
    logo: "/assets/opuvia.png",
    image: "",
    tag: "We Power Human Capital Globally",
    body: "Opuvia is on a mission to close the gap between education and employment and curb the global problem of graduate under and unemployment. Opuvia believes that every person deserves an opportunity to succeed and thrive in their chosen career, and are committed to providing the tools and resources necessary to make that a reality",
    link: "https://opuvia.co",
  },
  {
    name: "The University of Law",
    logo: "/assets/ulaw_logo.png",
    image: "",
    tag: "Ulaw - A Place for Everyone",
    body: "ULaw's guiding principle that future lawyers and business leaders should learn in a realistic, professional and contemporary context, with plenty of practical interactive engagement sets them apart from other universities. With 16 campuses in the UK, international sites in Hong Kong and Berlin, and a dedicated Online Campus you have plenty of choices in where to study with us.",
    link: "https://law.ac.uk",
  },
  {
    name: "Texila American University",
    logo: "/assets/texila.png",
    image: "",
    tag: "Pushing Forward Bounderies of Knowledge",
    body: "Texila American University has been developing great minds in medicine for more than a decade. With state-of-the-art libraries and laboratories, we offer our students the opportunity to explore extensive and world-class learning material",
    link: "https://tauedu.org/",
  },
  {
    name: "Trebas Institute",
    logo: "/assets/trebas.png",
    image: "",
    tag: "Dedicated to Training Talents of Tomorrow",
    body: "Trebas Institute Quebec and Ontario Inc. offers a vast portfolio in the areas of music, film, business and technology, as well as management programmes. With the combination of expert instructors and state-of-the-art equipment, their students are truly prepared to leave their mark in their chosen field",
    link: "https://www.trebas.com/",
  },
];
export default function Home() {
  const { data: news } = useGetAllNews(
    () => { },
    () => { }
  );

  console.log({ news });
  return (
    <>
      <Head>
        <title>AECO EDUCATION</title>
        <meta name="description" content="Travel abroad to work, study..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <main>
        <div>
          <TopNav>
            <div className="pb-12 overflow-x-hidden">
              <div
                className="bg-cover bg-center w-full h-[80vh] overflow-hidden"
                style={{ backgroundImage: `url("/assets/hero.png")` }}
              >
                <div className="w-[90vw] md:w-[75vw] lg:w-[60vw] m-auto h-full  grid items-center justify-center">
                  <div className="grid w-full bg-[#000508c1] p-8  px-[15%] col-span-2 gap-1">
                    <div className="text-center pb-6 text-[var(--neutral-10)] font-inter font-bold text-2xl lg:text-5xl lg:leading-10">
                      Your Journey Starts Here!
                    </div>
                    <div className="text-center text-[var(--tetiary-500)] font-inter font-light text-[16px] leeading-[24px]">
                      Replace text to Kick start your higher education journey globally with us, and unlock a world of opportunities through our university pathways, language education, and direct placement in home and abroad universities.

                    </div>
                  </div>
                  {/* <div className="col-span-1">
                    <div
                      ref={containerRef}
                      id="script-container"
                      className="mr-10"
                    >
                      <Iframe
                        url="https://ams4you.net/panel/webinq.php?ag=13059&wfid=1100&url='+location.href.replace('&', '[P]')+'&ptit='+document.title+'"
                        width="400px"
                        height="320px"
                        id=""
                        className=""
                        display="block"
                        position="relative"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="my-16">
                <PartnersLogo />
              </div>
              <div className="my-16 mb-28 mx-4 md:mx-10">
                <Services />
              </div>
              <div className="mt-2  items-center mjustify-center flex flex-col">
                <div className="grid items-center justify-center px-10">
                  <div className="text-center mb-3 uppercase text-[var(--neutral-600)] font-inter font-bold text-5xl lg:text-6xl">
                    Partner Highlights
                  </div>
                  <div className="text-center text-[var(--neutral-500)] w-full md:w-[80%] m-auto font-inter text-[18px] mb-4">
                    We believe in the power of collaboration and building strong
                    alliances to achieve success together.
                  </div>
                </div>
                <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 px-6 lg:px-10 md:px-8 mt-4">
                  {partners.map((partner, index) => (
                    <PartnerCard key={index} partner={partner} />
                  ))}
                </div>
              </div>
              <div className="mt-12 items-center justify-center flex flex-col">
                <div className="grid items-center justify-center px-10">
                  <div className="text-center mb-2 text-[var(--neutral-600)] font-inter font-bold text-5xl lg:text-6xl">
                    NEWS
                  </div>
                  <div className="text-center text-[var(--neutral-500)] w-full md:w-[80%] m-auto font-inter text-[18px] mb-4">
                    Breaking News: Stay updated with the latest opportunities
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 px-6 lg:px-10 md:px-8 w-full">
                  <div className="grid row-span-1">
                    <FullNews news={news?.data[0]} />
                  </div>
                  <div className="grid row-span-1 grid-cols-2 gap-4">
                    <div className="grid row-span-1  grid-rows-2 gap-4">
                      {news?.data
                        .slice(1, 3)
                        .map((news: any, index: number) => (
                          <div className="col-span-1 " key={index}>
                            <SubNews news={news} />
                          </div>
                        ))}
                    </div>
                    <div className="grid row-span-1  grid-rows-2 gap-4">
                      {news?.data
                        .slice(3, 5)
                        .map((news: any, index: number) => (
                          <div className="col-span-1 " key={index}>
                            <SubNews news={news} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 items-center justify-center flex flex-col mx-4 md:mx-10">
                <div className="grid items-center justify-center px-10">
                  <div className="text-center uppercase mb-4 text-[var(--neutral-600)] font-inter font-bold text-5xl lg:text-6xl my-2">
                    Testimonials
                  </div>
                </div>
                <div className="mt-4">
                  <Testimonials />
                </div>
              </div>
            </div>
          </TopNav>
        </div>
      </main>
    </>
  );
}

/******REFERENCE */
{
  /* <div className="w-screen h-screen">
<h1 className={`font-inter uppercase`}>aeco education</h1>
<h1 className={`font-clash font-bold uppercase`}>aeco education</h1>
<h1 className={`font-clash font-semibold uppercase`}>aeco education</h1>
<h1 className="uppercase">aeco education</h1>
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-tetiary">Tetiary</button>
<button className="btn-link">Link</button>
<Image src="//assets/logo.png" alt="logo" width={200} height={200} />
<Image src="//assets/logotext.png" alt="logo" width={200} height={200} />
</div> */
}
