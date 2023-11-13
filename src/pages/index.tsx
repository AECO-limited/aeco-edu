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
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


const partners = [
  {
    name: "Opuvia",
    logo: "/assets/opuvia.png",
    image: "https://media.licdn.com/dms/image/C4E22AQGJaLLipRm0XQ/feedshare-shrink_800/0/1664358048541?e=1700697600&v=beta&t=mKmPGNeCwE1aJrNNLmul2tvE_nCSVKg8KSCdFFYoSQE",
    tag: "We Power Human Capital Globally",
    body: "Opuvia is on a mission to close the gap between education and employment and curb the global problem of graduate under and unemployment. Opuvia believes that every person deserves an opportunity to succeed and thrive in their chosen career, and are committed to providing the tools and resources necessary to make that a reality",
    link: "https://opuvia.co",
  },
  {
    name: "ONCAMPUS",
    logo: "/assets/ONCAMPUS.png",
    image: "https://images-intl.prod.aws.idp-connect.com/commimg/myhotcourses/institution/CH/myhc_264812.jpg",
    tag: "ONCAMPUS",
    body: "ULaw's guiding principle that future lawyers and business leaders should learn in a realistic, professional and contemporary context, with plenty of practical interactive engagement sets them apart from other universities. With 16 campuses in the UK, international sites in Hong Kong and Berlin, and a dedicated Online Campus you have plenty of choices in where to study with us.",
    link: "https://law.ac.uk",
  },
  {
    name: "Texila American University",
    logo: "/assets/texila.png",
    image: "https://s1.stabroeknews.com/images/2018/06/texila.jpg",
    tag: "Pushing Forward Bounderies of Knowledge",
    body: "Texila American University has been developing great minds in medicine for more than a decade. With state-of-the-art libraries and laboratories, we offer our students the opportunity to explore extensive and world-class learning material",
    link: "https://tauedu.org/",
  },
  {
    name: "Norquest College",
    logo: "/assets/norquest.png",
    image: "https://www.norquest.ca/NorquestCollege/media/images/about/about-norquest-college/about-us.jpg",
    tag: "Dedicated to Training Talents of Tomorrow",
    body: "Norquest College offers a vast portfolio in the areas of music, film, business and technology, as well as management programmes. With the combination of expert instructors and state-of-the-art equipment, their students are truly prepared to leave their mark in their chosen field",
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
      <main className={inter.className}>
        <div>
          <TopNav>
            <div className="pb-12 overflow-x-hidden">

              <section className="relative">
                <div
                  className="bg-cover bg-center w-full h-[95vh] sm:h-[90vh] md:h-[85vh] overflow-hidden relative"
                  style={{ backgroundImage: `url("/assets/hero.png")` }}
                >
                  <div className="h-full w-[98%] sm:w-[90%] md:w-[75%] xl:w-[55%] from-[#000000c5] to-transparent bg-gradient-to-r w-100 bg-opacity-25 flex justify-center flex-col px-10 md:px-32 text-white space-y-8">
                    <h2 className="text-6xl font-bold">Your Journey Starts here</h2>
                    <p className=" font-normal text-lg ">
                      Kick start your higher education journey globally with AECO Education and unlock a world of opportunities through our International year Programme, Direct Placement in Home and Abroad Universities.
                    </p>
                    <button className="btn-secondary w-[200px]">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className=" md-height:absolute bottom-0 backdrop-blur-md bg-[#ffffffc4] ">
                  <PartnersLogo />
                </div>
              </section>

              <div className="my-16 mb-28 mx-4 md:mx-10">
                <Services />
              </div>
              <div className="py-10 bg-gray-50  items-center mjustify-center flex flex-col">
                <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-3 capitalize text-[var(--neutral-600)] font-bold text-4xl lg:text-5xl">
                    Partner Highlights
                  </p>
                  <p className="text-center text-[var(--neutral-500)] w-full md:w-[80%] m-auto text-[18px] mb-4">
                    We believe in the power of collaboration and building strong
                    alliances to achieve success together.
                  </p>
                </div>
                <div className="grid grid-cols-1 py-3  items-center justify-center md:grid-cols-2 xl:grid-cols-4 gap-6 my-8 px-6 lg:px-10 md:px-8 mt-4">
                  {partners.map((partner, index) => (
                    <PartnerCard key={index} partner={partner} />
                  ))}
                </div>
              </div>

              <div className="mt-12 py-10 items-center justify-center flex flex-col">
                <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-2 text-[var(--neutral-600)] font-bold text-4xl lg:text-5xl">
                    News
                  </p>
                  <p className="text-center text-[var(--neutral-500)] w-full md:w-[80%] m-auto text-[18px] mb-4">
                    Breaking News: Stay updated with the latest opportunities
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 px-6 lg:px-10 md:px-8 w-full">
                  <div className="md:grid row-span-1">
                    <FullNews news={news?.data[0]} />
                  </div>
                  <div className="grid row-span-1 md:grid-cols-2  gap-4">
                    <div className="md:grid row-span-1  grid-rows-2 gap-4">
                      {news?.data
                        .slice(1, 3)
                        .map((news: any, index: number) => (
                          <div className="col-span-1 mb-3" key={index}>
                            <SubNews news={news} />
                          </div>
                        ))}
                    </div>
                    <div className="md:grid row-span-1  grid-rows-2 gap-4">
                      {news?.data
                        .slice(3, 5)
                        .map((news: any, index: number) => (
                          <div className="col-span-1 mb-3" key={index}>
                            <SubNews news={news} />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20  py-10 bg-gray-50 items-center justify-center flex flex-col px-4 md:px-10">
                <div className="grid items-center justify-center px-10">
                  <p className="text-center mb-4 text-[var(--neutral-600)] font-bold text-4xl lg:text-5xl my-2">
                    Testimonials
                  </p>
                </div>
                <div className="mt-4  ">
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
<h1 className={`uppercase`}>aeco education</h1>
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
