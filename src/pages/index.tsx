import Head from "next/head";
import { Card } from "../components/Card";
import FlashlightOverlay from "../components/Flashlight";
import { Github, Linkedin, Twitter } from "../components/icons/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marek Chovan</title>
        <meta name="description" content="Marek Chovan - portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlashlightOverlay />
      <div className="flex justify-center gap-20">
        <div className="flex w-[45%] justify-end">
          <div className="flex h-full flex-col justify-between pt-24">
            <div className="max-w-[400px]">
              <h1 className="text-7xl font-[600] drop-shadow-lg">
                Marek Chovan
              </h1>
              <h2 className="mb-8 mt-4 text-xl text-slate-400">
                Front-end Developer (mostly)
              </h2>
              <p className="text-slate-400">
                30 year old guy from Poprad, Slovakia currently living in Brno,
                Czech Republic.
              </p>
            </div>
            <div className="flex gap-6 pb-10">
              <Link
                target="_blank"
                href="https://github.com/MrMarexo?tab=repositories"
              >
                <Github />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/marek-chovan-717604167"
              >
                <Linkedin />
              </Link>
              <Link target="_blank" href="https://twitter.com/mr_marexo">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-screen w-[55%] overflow-auto pt-24">
          <p className="max-w-[700px] px-4 text-slate-300">
            I started my dev journey in 2020 when I worked as a Windows
            administrator for{" "}
            <Link
              className="hover:text-my_green font-bold text-my_white transition-colors"
              href="https://www.dieboldnixdorf.com"
            >
              Diebold Nixdorf
            </Link>
            . I was bored at home because it was the first wave of the pandemic
            so I bought a{" "}
            <Link
              className="hover:text-my_green font-bold text-my_white transition-colors"
              href="https://www.udemy.com/share/101Wjs3@dY6lGTE9re2TZBA78YILMSv3IGkr1wLeduYUZKympe6TulSfcs46aCw8JRNchXVG/"
            >
              Udemy course
            </Link>{" "}
            to make 2D games in Unity. I loved the creative aspect of it and I
            quickly started developing my first game. I overscoped terribly and
            never finished it, but it wasn&apos;t for nothing. I fell in love
            with programming.
            <br />
            <br />
            After finishing a number of small games (mostly for me and my
            friends) I started learning HTML, CSS and JS. My goal was to
            officially get into the world of programming and land a web-dev job
            as quickly as possible. I moved to{" "}
            <Link
              className="hover:text-my_green font-bold text-my_white transition-colors"
              href="https://www.startupblink.com/startup-ecosystem/brno-cz"
            >
              Brno
            </Link>
            , a city known for its huge startup ecosystem and friendly
            atmosphere.
            <br />
            <br />I started learning React as it was the most popular JavaScript
            framework and nobody was looking for devs with only vanilla JS.
            After a month of searching I got what I wanted. A junior position in{" "}
            <Link
              className="hover:text-my_green font-bold text-my_white transition-colors"
              href="https://www.ulovdomov.cz"
            >
              UlovDomov
            </Link>
            , a real estate platform focusing on rentals. I had to learn
            TypeScript to get through the interview process and I&apos;ve loved
            it ever since.
            <br />
            <br />
            Since then I&apos;ve learned a lot of new skills, worked on various
            projects, imported hundreds of npm packages and never looked back.
            When I&apos;m not at the computer, I&apos;m probably playing my
            guitar, trying to figure out how to become the new Ed Sheeran{" "}
            <Link
              className="hover:text-my_green font-bold text-my_white transition-colors"
              href="https://www.startupblink.com/startup-ecosystem/brno-cz"
            >
              without being able to sing
            </Link>
            . I also try to stay fit and work out regularly.
          </p>
          <h2 className="mb-8 pl-4 pt-[100px] text-xl uppercase">Experience</h2>
          <div className="mb-10 flex max-w-[700px] flex-col gap-8">
            <Card
              timePeriod="2020 - Present"
              title="UlovDomov.cz"
              position="Front-end developer"
              link="https://www.ulovdomov.cz"
              badges={[
                "Next.js",
                "Typescript",
                "Chakra UI",
                "Mongo",
                "GraphQl",
                "Maplibre",
              ]}
            >
              I came to UlovDomov as a complete beginner and I&apos;ve grown
              there so much. Learned Next.js and its various functionalities,
              rebuilt the search page with a new map. Dived into the world of
              Backend with Express and GraphQl, and REST too.
            </Card>
            <Card
              timePeriod="2021 - 2022"
              title="Eventsframe"
              position="Front-end developer"
              badges={["Next.js", "Typescript", "Chakra UI", "Javascript"]}
              link="https://www.eventsframe.com"
            >
              I worked in this startup with my friend while also working for
              UlovDomov. Figured out how to manage my time more effectively,
              learned various helpful practices and fixed a huge amount of bugs.
              I also found out I hate gigantic repositaries written in vanilla
              JS.
            </Card>
          </div>
          <h2 className="mb-8 pl-4 pt-[40px] text-xl uppercase">Projects</h2>
          <div className="mb-10 flex max-w-[700px] flex-col gap-8">
            <Card
              image="/img/fitleague.png"
              title="FitLeague"
              badges={["Next.js", "Typescript", "Tailwind", "TRPC", "Prisma"]}
              link="https://fitleague.net"
            >
              Created as a fun project for challenging myself and my friends
              into various physical activities. I used it to learn about and
              test out some of the new technologies that has become increasingly
              popular.
            </Card>
          </div>
          <div className="mb-10 flex max-w-[700px] flex-col gap-8">
            <Card
              image="/img/near8y.png"
              title="Near8y"
              badges={[
                "Next.js",
                "Typescript",
                "Tailwind",
                "Mapbox",
                "OpenRouteService",
              ]}
              link="https://near8y.vercel.app"
            >
              Mini project built to test out the efficiency of some free map and
              directions apis, namely Nominatim and OpenRouteService.
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
