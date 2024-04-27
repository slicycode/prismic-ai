import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />
        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-5xl font-medium text-balance md:text-7xl">
            <PrismicRichText field={slice.primary.heading} />
          </h1>
        )}

        {isFilled.richText(slice.primary.body) && (
          <div className="max-w-md mx-auto mt-6 text-balance text-slate-300">
            <PrismicRichText field={slice.primary.body} />
          </div>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink className="mt-8" field={slice.primary.button_link}>
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (
          <div className="mt-16 glass-container w-fit">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage
              className="rounded-lg"
              field={slice.primary.image}
            />
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default Hero;
