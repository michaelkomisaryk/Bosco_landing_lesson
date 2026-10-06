import type { CollectionConfig } from 'payload';
import { Hero } from '../blocks/Hero';
import { Features } from '../blocks/Features';

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {singular: 'Page', plural: 'Pages',},
  admin: {useAsTitle: 'title',},
  access: {read: () => true,},
  fields: [
    {
      name: 'path',
      type: 'text',
      label: 'url page',
      required: true,
      defaultValue: '/',
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Blocks',
      blocks: [Hero, Features],
    },
  ],
};