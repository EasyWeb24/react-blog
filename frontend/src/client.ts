import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '1pfenb7r',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-02-25',
});

export default client;
