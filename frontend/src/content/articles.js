// Add an item here, then copy `frontend/articles/template/index.html` to
// `frontend/articles/<your-slug>/index.html`. That creates a new static page.
export const articles = [
  {
    slug: 'low-cost-eeg-motor-intention',
    kind: 'Research',
    date: '2026-11-12',
    title: 'Decoding motor intention from low-cost EEG systems',
    excerpt: 'A practical study from our neuroengineering group on signal quality, interfaces, and accessible research hardware.',
    body: [
      'Reliable brain-computer interfaces should not be limited to specialist laboratories. Our group is studying practical EEG acquisition and signal-processing approaches that make research systems more accessible.',
      'The work brings together experimental design, machine learning, and human-centred interface research. We are particularly interested in robust methods that perform well outside tightly controlled laboratory conditions.'
    ]
  },
  {
    slug: 'bci-neurotechnology-lab-launch',
    kind: 'Lab news',
    date: '2026-10-28',
    title: 'BCI & Neurotechnology Lab begins at Kathmandu University',
    excerpt: 'A new home for collaborative research at the intersection of brain science, computation, and human-centred technology.',
    body: [
      'The Brain Computer Interface and Neurotechnology Lab has begun its work at Kathmandu University, creating a space for students and researchers to investigate the relationship between neural activity and technology.',
      'Our initial programme connects neuroengineering, artificial intelligence, and assistive technology. We welcome conversations with academic, clinical, and industry partners who share this purpose.'
    ]
  },
  {
    slug: 'neurotechnology-research-mou',
    kind: 'Partnership',
    date: '2026-10-09',
    title: 'Memorandum of understanding for neurotechnology research',
    excerpt: 'The lab expands its research network through a new academic collaboration.',
    body: [
      'The laboratory has entered a new academic collaboration to support knowledge exchange in neurotechnology research, training, and innovation.',
      'The memorandum creates opportunities for joint activities, researcher exchange, and future project development. Further details will be shared as the collaboration develops.'
    ]
  }
]

export const articleHref = (slug) => `${import.meta.env.BASE_URL}articles/${slug}/`
