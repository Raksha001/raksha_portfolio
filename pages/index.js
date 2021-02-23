import React, { useEffect, useState } from "react";
import Head from "next/head";
import classNames from "classnames";
import Particles from "../components/Particles";
import Tilt from "react-parallax-tilt";
import FluidAnimation from "react-fluid-animation";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeIn4 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2.5,
      ease: easing,
    },
  },
};

const LinkToSection = ({ title, href, children }) => (
  <a
    href={`${href}`}
    className="block sm:text-lg lg:text-xl max-w-prose leading-relaxed group"
  >
    <span className="group-hover:text-teal-300 text-accent uppercase font-mono">
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

const Skills = "space-y-6 sm:space-y-8";

const SkillCard = ({ tooltip, data }) => (
  <a data-tip={`${tooltip}`}>
    <div className="flex justify-center mt-1.5 py-10 border border-blueGray-800 hover:border-accent hover:bg-blueGray-700 bg-blueGray-800 rounded-lg relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-8 h-8 "
      >
        <path d={`${data}`} />
      </svg>
    </div>
  </a>
);

const SkillsGrid =
  "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 justify-center";

export default function Home() {
  const [isMobile, setIsMobile] = useState(undefined);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="bg-blueGray-900">
      <Head>
        <title className="font-semibold"> Raksha | Portfolio </title>
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
            "I am Raksha, a french freelance developer and designer. I am also
            an open-source contributor and a content creator"
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
        <div className={Skills}>
          <div className={SkillsGrid}>
            <ReactTooltip
              place="top"
              className="bg-teal-500 text-white font-semibold text-xs rounded-sm"
              delayHide={100}
              type="dark"
              effect="solid"
            />
            <SkillCard
              tooltip="HTML5"
              data="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531V9.75z"
            />
            <SkillCard
              tooltip="CSS3"
              data="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"
            />
            <SkillCard
              tooltip="JAVASCRIPT"
              data="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
            />
            <SkillCard
              tooltip="REACTJS"
              data="M12 9.861a2.14 2.14 0 100 4.28 2.14 2.14 0 000-4.28zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.531 23.531 0 001.363 3.578l.101.213-.101.213a23.31 23.31 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046.327-1.04.722-2.058 1.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.35 23.35 0 00-1.364-3.577l-.101-.213.101-.213a23.416 23.416 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14 0 1.742-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.782 24.782 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.55 23.55 0 00-2.422 2.967l-.135.193-.235.02c-1.276.1-2.542.305-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.846 24.846 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02c1.277-.1 2.543-.304 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.381 2.381 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.028 25.028 0 01-3.234.501 24.681 24.681 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.478 23.478 0 00-3.787-.61l-.234-.02-.135-.193a23.407 23.407 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.853 24.853 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.61 23.61 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a25.004 25.004 0 01-2.052-2.545 24.978 24.978 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.4 30.4 0 01-1.35-2.122c-.42-.726-.808-1.47-1.166-2.228l-.1-.213.1-.213c.358-.758.747-1.502 1.166-2.228.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.007 30.007 0 012.517 4.35l.101.213-.101.213a29.604 29.604 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.017 29.017 0 002.196-3.798 28.576 28.576 0 00-2.197-3.798 29.029 29.029 0 00-4.394 0 28.478 28.478 0 00-2.197 3.798 29.123 29.123 0 002.197 3.798z"
            />
            <SkillCard
              tooltip="NEXTJS"
              data="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.441.346 4.25 2.185 2.226 5.012a11.875 11.875 0 00-2.118 5.243c-.096.659-.108.854-.108 1.747 0 .894.012 1.089.108 1.748.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.533.525.364.04 1.936.04 2.3 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.218-.158-.018-.013-.898-1.193-1.954-2.62l-1.919-2.592-2.405-3.558a338.739 338.739 0 00-2.42-3.556c-.01-.002-.02 1.579-.024 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.213c-.075.038-.141.045-.495.045H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.006-4.705.073-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361 1.577 2.39 3.155 4.781 4.734 7.17l1.9 2.879.097-.063a12.317 12.317 0 002.465-2.163 11.944 11.944 0 002.825-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.209-9.695a12.597 12.597 0 00-2.498-.523A33.119 33.119 0 0011.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.236.277c.02.06.024 1.365.02 4.304l-.008 4.218-.743-1.14-.746-1.14v-3.066c0-1.982.009-3.097.023-3.15a.478.478 0 01.232-.296c.097-.05.132-.054.5-.054z"
            />
            <SkillCard
              tooltip="FLUTTER"
              data="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z"
            />
            <SkillCard
              tooltip="GIT"
              data="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 010 2.6 1.844 1.844 0 01-2.609 0 1.834 1.834 0 010-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 01-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 002.186 0l10.43-10.43a1.544 1.544 0 000-2.187"
            />
            <SkillCard
              tooltip="GITHUB"
              data="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
            <SkillCard
              tooltip="TAILWINDCSS"
              data="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            />
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
            <LinkCard title="Project Cortex" link="">
              ERP Suite which will be integrated with the ERP’s identity module
              by using MERN stack for club Pattarai.
            </LinkCard>
          </Tilt>
          <Tilt>
            <LinkCard
              title="Project Caliditas"
              link="https://github.com/pattarai/xstack-thermometer"
            >
              ERP Suite which will be integrated with the ERP’s identity module
              by using IoT and LAMP stack.
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
          <Tilt>
            <LinkCard
              title="Rotaract Website"
              link="https://github.com/veroni-d20/rotaract_website"
            >
              blah blah
            </LinkCard>
          </Tilt>
        </div>
      </div>

      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn4}>
          <div className={containerClasses} id="achievements">
            <SectionTitle accentText="04" title="Achievements" />
            <div className="text-body-container">
              <p>Not many as of now hehe</p>
            </div>
            <div className="h-8 lg:h-12" />
            <div className="flex flex-wrap md:-mx-6">
              <motion.div
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
              >
                <LinkCard title="Theervu - Pattarai Hackathon">
                  Culpa exercitation qui officia sit cillum duis ipsum labore
                  magna nisi Lorem occaecat et eu. Cillum anim ea nulla nostrud
                  adipisicing consectetur.
                </LinkCard>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeIn4}>
          <div className={containerClasses} id="school">
            <SectionTitle accentText="05" title="Education" />
            <div className="text-body-container">
              <p>
                I'm currently a student at Loyola Icam College of Engineering
                and Technology, where I'm part of this amazing club Pattarai.
              </p>
            </div>
            <div className="h-8 lg:h-12" />
            <div className="flex flex-wrap md:-mx-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkCard
                  title="Loyola Icam College of Engineering and Technology"
                  link="https://www.licet.ac.in/"
                >
                  To form responsible engineers, who would engineer a just
                  society!
                </LinkCard>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkCard title="Pattarai" link="https://www.pattarai.in/">
                  "PATTARAI" is LICET's flagship project club, equipping
                  students with contemporary technical skills needed to face the
                  industry. Pattarai encourages students to learn by working on
                  real-life projects!
                </LinkCard>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkCard
                  title="ST. Ursula'S Anglo-Indian Higher Secondary School, Chruch Park"
                  link="https://stursulaschurchpark.com/index.php"
                >
                  School Motto : For Faith and Morals School Colour : Green and
                  Gold
                </LinkCard>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>

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
        <div className="text-body-container py-3">
          <p>Drop into my Discord PM!</p>
        </div>
        <iframe
          className="w-full py-3 border-0"
          height="480px"
          src="https://titanembeds.com/embed/812595628143411250?css=24&scrollbartheme=rounded-dots-dark&noscroll=true&theme=MetroEdge"
        ></iframe>
      </div>

      {/* <div className="h-8 md:h-12 lg:h-16  " />
      <div className={lastContainerClasses}>
        <div className="font-mono text-blueGray-400 text-xs md:text-sm lg:text-base ">
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
      </div> */}
      <FluidAnimation style={{ height: "60%" }} />
    </div>
  );
}
