import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import Image from "next/image";
import StarBackground from "./StarBackground";

import clsx from "clsx";
import React from "react";
import {
  FaCloudflare,
  FaDigitalOcean,
  FaFigma,
  FaFly,
  FaGithub,
  FaNpm,
} from "react-icons/fa6";
import StylizedLogoMark from "./StylizedLogoMark";
import background from "./background.jpg";

/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  const icons = {
    digitalocean: <FaDigitalOcean />,
    cloudflare: <FaCloudflare />,
    npm: <FaNpm />,
    github: <FaGithub />,
    figma: <FaFigma />,
    fly: <FaFly />,
  };

  return (
    <Bounded
      className="relative overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Image
        src={background}
        alt=""
        fill
        className="object-cover"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="max-w-2xl mx-auto text-5xl font-medium text-center text-balance md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h2>

        <div className="max-w-md mx-auto mt-6 text-center text-balance text-slate-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="flex flex-col items-center mt-20 md:flex-row">
          {slice.items.map((item, index) => (
            <React.Fragment key={index}>
              {index === Math.floor(slice.items.length / 2) && (
                <>
                  <StylizedLogoMark />
                  <div className="rotate-180 signal-line bg-gradient-to-t" />
                </>
              )}
              <div className="flex items-center justify-center p-3 text-3xl text-blue-100 border rounded-full pulsing-icon aspect-square shrink-0 border-blue-50/30 bg-blue-50/25 opacity-40 md:text-4xl lg:text-5xl">
                {item.icon && icons[item.icon]}
              </div>
              {index !== slice.items.length - 1 && (
                <div
                  className={clsx(
                    "signal-line",
                    index >= Math.floor(slice.items.length / 2)
                      ? "rotate-180"
                      : "rotate-0",
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Integrations;
