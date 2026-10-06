import {Block} from 'payload';

export const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'ID-section',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      fields: [
        {
          name: 'icon',
          type: 'text',
          label: 'Icon',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Text',
          required: true,
        }
      ]
    }
  ],
};
