export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'materials' | 'process' | 'care';
}

export const faqItems: FaqItem[] = [
  {
    id: 'lead-time',
    category: 'process',
    question: 'How long does a custom ring actually take?',
    answer:
      'Collection styles with standard options usually ship in 3–4 weeks after you approve the final quote. Fully custom designs run 4–6 weeks because of the extra CAD revision rounds. Rush orders are sometimes possible for an additional fee — we\'ll tell you upfront if your date is realistic.',
  },
  {
    id: 'lab-vs-mined',
    category: 'materials',
    question: 'Are lab-grown diamonds really the same as mined?',
    answer:
      'Chemically and optically, yes — same carbon crystal structure, same hardness, same grading standards (cut, color, clarity, carat). The difference is origin and price. We carry both; about 70% of our clients choose lab-grown for the value and traceability.',
  },
  {
    id: 'see-before-buy',
    category: 'ordering',
    question: 'Can I see the ring before I pay in full?',
    answer:
      'You approve a 3D rendering before production starts. A 50% deposit kicks off casting; the balance is due before shipping or pickup. If you\'re local, you can try similar sample settings in the studio during consultation.',
  },
  {
    id: 'resize',
    category: 'care',
    question: 'What if the size is wrong?',
    answer:
      'One complimentary resize within 60 days of delivery. Some designs — full eternity bands, certain tension settings — can only be adjusted within a limited range. We\'ll flag that during design so you\'re not surprised later.',
  },
  {
    id: 'return',
    category: 'ordering',
    question: 'Do you accept returns?',
    answer:
      'Collection styles in unworn condition can be returned within 30 days. Custom commissions are made to order and non-refundable once production begins, but we work through unlimited design revisions before that point.',
  },
  {
    id: 'budget',
    category: 'ordering',
    question: 'What should I budget for a custom ring?',
    answer:
      'Most of our work falls between $2,000 and $6,000 all-in. The live calculator on each collection page gives you a ballpark; the consultation refines it based on stone grade, setting complexity, and metal weight.',
  },
  {
    id: 'moissanite',
    category: 'materials',
    question: 'When does moissanite make sense over diamond?',
    answer:
      'If budget is tight or you want a larger stone for the same price, moissanite is a strong option — more fire, slightly less hardness. We\'ll show you both side by side if you\'re undecided. It\'s a legitimate choice, not a consolation prize.',
  },
  {
    id: 'virtual-consult',
    category: 'process',
    question: 'Do you work with clients outside the city?',
    answer:
      'Most of our clients are remote. Consultations happen over video, shipping is insured, and we send progress photos at casting and pre-polish stages. Sizing kits are available by mail.',
  },
];

export const faqCategories = [
  { id: 'all', label: 'All' },
  { id: 'ordering', label: 'Ordering' },
  { id: 'materials', label: 'Materials' },
  { id: 'process', label: 'Process' },
  { id: 'care', label: 'Care' },
] as const;
