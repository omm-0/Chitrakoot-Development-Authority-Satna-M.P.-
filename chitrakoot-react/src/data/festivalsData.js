export const festivals = [
  {
    id: 1,
    image: '/images/festival-ram-navami.jpg',
    title: 'Ram Navami',
    month: 'March-April',
    description: "Grand celebrations marking Lord Rama's birth with special pujas, processions, and cultural programs at Ramghat and Kamadgiri."
  },
  {
    id: 2,
    image: '/images/festival-amavasya.jpg',
    title: 'Amavasya Parikrama',
    month: 'Every Month',
    description: 'Lakhs of devotees gather every new moon to perform Kamadgiri Parikrama and take holy dip at Ramghat.'
  },
  {
    id: 3,
    image: '/images/festival-deepavali.jpg',
    title: 'Deepavali',
    month: 'Oct-Nov',
    description: 'The grandest celebration — entire Ramghat and Mandakini banks illuminated with thousands of diyas creating a divine spectacle.'
  },
  {
    id: 4,
    image: '/images/festival-makar-sankranti.jpg',
    title: 'Makar Sankranti',
    month: 'January',
    description: 'Special bathing festival at Ramghat with devotees taking holy dips in the Mandakini. Cultural programs and religious gatherings.'
  },
  {
    id: 5,
    image: '/images/festival-sharad-purnima.jpg',
    title: 'Sharad Purnima',
    month: 'October',
    description: 'Full moon celebrations with special evening aarti. The moonlit Mandakini River creates a magical atmosphere.'
  },
  {
    id: 6,
    image: '/images/festival-navratri.jpg',
    title: 'Navratri',
    month: 'Apr & Oct',
    description: 'Celebrated with great passion at Sati Anusuya Ashram with special pujas, bhandaras, kirtans, and cultural programs.'
  }
];

export const festivalsHomePreview = festivals.slice(0, 3).map((f, i) =>
  i === 2 ? { ...f, month: 'October-November', description: 'The grandest celebration — entire Ramghat and Mandakini banks illuminated with thousands of diyas.' } :
  i === 0 ? { ...f, description: "Grand celebrations marking Lord Rama's birth with special pujas, processions, and cultural programs at Ramghat." } :
  i === 1 ? { ...f, description: 'Lakhs gather every new moon to perform Kamadgiri Parikrama. Somwati Amavasya is most significant.' } :
  f
);
