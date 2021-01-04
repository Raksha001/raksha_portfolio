import React, { useEffect, useState } from "react";
import Head from "next/head";
import classNames from "classnames";
import Particles from "../components/Particles";
import Tilt from "react-parallax-tilt";

const LinkToSection = ({ title, href, children }) => (
  <a
    href={`#${href}`}
    className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group"
  >
    <span className="group-hover:text-rose-500 text-accent uppercase font-mono">
      {title}
    </span>
    <br />
    <p className="group-hover:text-blueGray-300 text-blueGray-400">
      {children}
    </p>
  </a>
);

const containerClasses =
  "py-12 lg:py-16 xl:py-24 2xl:py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto";
const lastContainerClasses =
  "pt-12 lg:pt-16 xl:pt-24 2xl:pt-32 pb-6 md:pb-12 lg:pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl w-full mx-auto";

const SectionTitle = ({ accentText, title }) => (
  <>
    <span className="text-xl xl:text-2xl text-accent font-mono">
      {accentText}
    </span>
    <div className="lg:h-4" />
    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-white font-semibold lg:-ml-1 xl:-ml-1">
      {title}
      <span className="text-accent">.</span>
    </h1>
    <div className="h-6 md:h-8 lg:h-12 xl:h-16" />
  </>
);

const LinkCard = ({ title, link, children }) => (
  <div className="sm:max-w-sm w-full mr-6 mb-6 lg:mr-12 lg:mb-12">
    <a
      href={link}
      target="_blank"
      className="block border border-blueGray-800 hover:border-accent hover:bg-blueGray-800 group p-6"
    >
      <h2 className="text-accent font-mono text-xl mb-4 group-hover:text-teal-200">
        {title}
      </h2>
      <p className="text-blueGray-400 group-hover:text-blueGray-200">
        {children}
      </p>
    </a>
  </div>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="bg-blueGray-900">
      <Head>
        <title className="font-semibold">Raksha - Portfolio</title>
        <link
          rel="icon"
          width="283"
          height="64"
          viewBox="0 0 283 64"
          fill="none"
          href="/raksha.png"
        />
      </Head>

      <div className="min-h-screen flex flex-col justify-center relative">
        {isMobile !== undefined ? (
          <Particles
            canvasClassName="block bg-blueGray-900"
            className={classNames("absolute inset-0")}
            isMobile={isMobile}
          />
        ) : null}
        <div className={classNames(containerClasses, "z-10")}>
          <SectionTitle accentText="Hello World! I'm" title="Raksha" />
          <div className="h-4 sm:h-0" />
          <div className="text-body-container">
            <LinkToSection title="About Me" href="about">
              I love programming, especially competitive programming and web
              development. I also play a lot of board games and social deduction
              games like Secret Hitler!
            </LinkToSection>
            <LinkToSection title="Skillsets" href="skillsets">
              My true skills are eating and sleeping.
            </LinkToSection>
            <LinkToSection title="Projects" href="projects">
              I'm currently working on Project Caliditas.
            </LinkToSection>
            <LinkToSection title="Achievements" href="achievements">
              I'm a 24/7 awesome eating and sleeping etudiant.
            </LinkToSection>
            <LinkToSection title="School" href="school">
              I'm currently a student at Loyola Icam College of Engineering and
              Technology, where I'm part of this amazing club Pattarai.
            </LinkToSection>
          </div>
          <div className="h-6 md:h-8 xl:h-16" />
          <div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
            <a
              className="link"
              href="mailto:raksha.23it@licet.ac.in"
              target="_blank"
            >
              Email
            </a>{" "}
            ·{" "}
            <a
              className="link"
              href="https://github.com/Raksha001"
              target="_blank"
            >
              Github
            </a>{" "}
            ·{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/raksha001/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className={containerClasses} id="about">
        <SectionTitle accentText="01" title="About Me" />
        <div className="text-body-container">
          <p>
            Lorem ullamco minim duis dolor excepteur cillum veniam ad laborum
            laborum in enim. Et consectetur esse anim aliquip labore qui eu
            proident ex irure excepteur enim. Esse commodo eiusmod aute officia
            tempor ea ad ullamco deserunt.
          </p>
          <p>
            Velit excepteur voluptate veniam aute esse irure ea. Consectetur
            incididunt nulla non cupidatat eiusmod eiusmod ullamco deserunt
            deserunt aute culpa voluptate. Cupidatat consectetur proident quis
            eiusmod elit nulla non voluptate.
          </p>
          <p>
            Lorem ad minim laborum voluptate ex pariatur veniam est dolore
            veniam labore pariatur. Commodo id officia quis ex adipisicing
            proident. Aute nisi cupidatat reprehenderit occaecat laboris do
            minim cupidatat.
          </p>
        </div>
      </div>

      <div className={containerClasses} id="skillsets">
        <SectionTitle accentText="02" title="Skillsets" />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 justify-center">
          <div className="flex justify-center py-10 border border-rose-800 hover:border-rose-500 hover:bg-blueGray-800 rounded-lg relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              name="html5"
              className="w-12 h-12"
            >
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531V9.75z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={containerClasses} id="projects">
        <SectionTitle accentText="03" title="Projects" />
        <div className="text-body-container">
          <p>
            I'm always working on something new. Below are a few of my favorite
            projects!
          </p>
        </div>
        <div className="h-8 lg:h-12" />
        <div className="flex flex-wrap md:-mx-6">
          <Tilt>
            <LinkCard
              title="Project Caliditas"
              link="https://github.com/pattarai/xstack-thermometer"
            >
              ERP Suite which will be integrated with the ERP’s identity module
              by using IoT and lamp stack.
            </LinkCard>
          </Tilt>
          <Tilt>
            <LinkCard
              title="Personal Website"
              link="https://github.com/Raksha001/raksha_portfolio"
            >
              The personal Website v1 of Raksha. Built with love by Learning a
              new framework.
            </LinkCard>
          </Tilt>
        </div>
      </div>

      <div className={containerClasses} id="achievements">
        <SectionTitle accentText="04" title="Achievements" />
        <div className="text-body-container">
          <p>Not many as of now hehe</p>
        </div>
        <div className="h-8 lg:h-12" />
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard title="Theervu - Pattarai Hackathon" link="">
            Culpa exercitation qui officia sit cillum duis ipsum labore magna
            nisi Lorem occaecat et eu. Cillum anim ea nulla nostrud adipisicing
            consectetur.
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="school">
        <SectionTitle accentText="05" title="School" />
        <div className="text-body-container">
          <p>
            I'm currently a student at Loyola Icam College of Engineering and
            Technology, where I'm part of this amazing club Pattarai.
          </p>
        </div>
        <div className="h-8 lg:h-12" />
        <div className="flex flex-wrap md:-mx-6">
          <LinkCard
            title="Loyola Icam College of Engineering and Technology"
            link="https://www.licet.ac.in/"
          >
            To form responsible engineers, who would engineer a just society!
          </LinkCard>
          <LinkCard title="Pattarai" link="https://www.pattarai.in/">
            "PATTARAI" is LICET's flagship project club, equipping students with
            contemporary technical skills needed to face the industry. Pattarai
            encourages students to learn by working on real-life projects!
          </LinkCard>
        </div>
      </div>

      <div className={containerClasses} id="contact">
        <SectionTitle accentText="06" title="Contact Me" />
        <div className="font-mono text-blueGray-400 sm:text-lg md:text-xl">
          <a
            className="link"
            href="mailto:raksha.23it@licet.ac.in"
            target="_blank"
          >
            Email
          </a>{" "}
          ·{" "}
          <a
            className="link"
            href="https://github.com/Raksha001"
            target="_blank"
          >
            Github
          </a>{" "}
          ·{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/raksha001/"
            target="_blank"
          >
            Linkedin
          </a>{" "}
          ·{" "}
          <a
            className="link"
            href="https://www.instagram.com/_.r_a_k_s_h_a._/"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="h-8 md:h-12 lg:h-16" />

      <div className={lastContainerClasses}>
        <div className="font-mono text-blueGray-400 text-xs md:text-sm lg:text-base">
          This site is built with{" "}
          <a className="link" href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          and{" "}
          <a className="link" href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </a>
          . View the source code on{" "}
          <a
            className="link"
            href="https://github.com/Raksha001/raksha_portfolio"
            target="_blank"
          >
            Github
          </a>
          .
        </div>
      </div>
    </div>
  );
}
