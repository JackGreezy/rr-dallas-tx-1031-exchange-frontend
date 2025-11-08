import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-7 text-ink/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-heading">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-heading">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/50 bg-panel p-5 text-base italic text-ink/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 text-base text-ink/85">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-base text-ink/85">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

type RichTextProps = {
  value: unknown;
};

export function RichText({ value }: RichTextProps) {
  return <PortableText value={value as PortableTextBlock | PortableTextBlock[]} components={components} />;
}

