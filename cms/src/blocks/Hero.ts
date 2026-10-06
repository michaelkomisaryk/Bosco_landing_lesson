import {Block} from 'payload';

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'ID-section',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'leyba'
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Primary',
              value: 'primary'
            },
            {
              label: 'Secondary',
              value: 'secondary'
            }
          ],
          defaultValue: 'primary'
        }
      ]
    }
  ],
};

