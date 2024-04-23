"use client";

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import WordMark from "./WordMark";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

export default function Navbar({ settings }: NavbarProps) {
  return (
    <nav className="p-4 md:p-6" aria-label="Main">
      <div className="flex items-center justify-between max-w-6xl py-2 mx-auto font-medium text-white">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button)
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );

            return (
              <li key={item.label}>
                <PrismicNextLink
                  className="inline-flex items-center min-h-11"
                  field={item.link}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
