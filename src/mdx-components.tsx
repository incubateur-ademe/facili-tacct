import { type MDXComponents } from 'mdx/types';
import { Fragment } from 'react';

import { MdxLink } from '@/components/mdx/Link';
import { getLabelFromChildren } from '@/lib/utils/react';
import { slugify } from '@/lib/utils/string';

import { CTA } from './CTA';
import { AnchorLink } from './dsfr/client';

export const anchorHeadingMDXComponents: MDXComponents = {
  h1: (props) => (
    <AnchorLink
      as="h1"
      anchor={slugify(getLabelFromChildren(props.children))}
      {...props}
    />
  ),
  h2: (props) => (
    <AnchorLink
      as="h2"
      anchor={slugify(getLabelFromChildren(props.children))}
      style={{ margin: '3rem 0 1.5rem' }}
      {...props}
    />
  ),
  h3: (props) => (
    <AnchorLink
      as="h3"
      anchor={slugify(getLabelFromChildren(props.children))}
      style={{ margin: '1rem 0 0.5rem' }}
      {...props}
    />
  )
};

/**
 * Avoid unauthorized HTML tags inside p tags. (e.g. no p inside p, no div inside p, etc.)
 */
export const paragraphContentMDXComponents: MDXComponents = {
  p: Fragment
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MdxLink,
    CTA: CTA
  };
}
