//components
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import {Image} from "@nextui-org/image";
import { Spacer } from "@nextui-org/spacer";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex justify-start lg:ml-[-200px] md:ml-[-10px] sm:ml-[-5px]">
          <Image
            width={300}
            alt="hero Image"
            src="/assets/Profile.png"
          />
        </div>
        <Spacer x={20} />
        <div className="inline-block max-w-xl text-center md:text-left">
          <span className={title()}>Diego Valenzuela González</span>
          <br />
          <span className={subtitle()}>
            Developer Front-End and VideoGames
          </span>
          <div className="flex gap-3 mt-4">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.links.docs}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
