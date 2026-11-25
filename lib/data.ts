
export type Dish = {
  act: string;
  name: string;
  description: string;
  price: string;
  format: string;
  image: string;
  pairing: string;
};

export const signatureDishes: Dish[] = [
  {
    act: 'Act IV · Land',
    name: 'A5 Miyazaki Wagyu & Périgord Truffle',
    description: 'Binchotan-charred wagyu, black truffle shaved tableside, smoked bone-marrow jus.',
    price: '£95',
    format: 'Grand Tasting',
    image: '/images/dish-wagyu.jpg',
    pairing: '2015 Domaine Jean Grivot, Vosne-Romanée',
  },
  {
    act: 'Act V · Ocean',
    name: 'Glacier 51 Toothfish & Brown Butter Dashi',
    description: 'Poached over hinoki embers, brown butter dashi, sea herbs from the Cornish coast.',
    price: '£78',
    format: 'À la Carte',
    image: '/images/dish-toothfish.jpg',
    pairing: '2020 Domaine Leflaive, Puligny-Montrachet',
  },
  {
    act: 'Act IX · Flora',
    name: 'Golden Hive & Smoked Meadow Hay',
    description: 'Wildflower honey set three ways, meadow-hay cream, beeswax tuile.',
    price: '£34',
    format: 'Dessert Course',
    image: '/images/dish-hive.jpg',
    pairing: '2009 Château d’Yquem, Sauternes',
  },
];

export const tastingActs = [
  { act: 'Act 01', name: 'Smoked Quail Egg & Kaluga Hybrid Caviar', note: 'Opening amuse' },
  { act: 'Act 03', name: 'Orkney Scallop, Carrot & Sea Buckthorn', note: 'Cold platter' },
  { act: 'Act 05', name: 'Brittany Blue Lobster over White Oak', note: 'Ocean hearth' },
  { act: 'Act 07', name: 'Ember-Charred Rhug Estate Venison', note: 'Prime game' },
  { act: 'Act 10', name: 'Single-Origin Dark Cocoa & Peat Whisky Soufflé', note: 'Grand finale' },
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  origin: string;
  tags?: string[];
};

export const alaCarte: { id: string; title: string; note: string; items: MenuItem[] }[] = [
  {
    id: 'starters',
    title: 'Ember-Fired Starters & Raw Bar',
    note: 'Order 2 minimum',
    items: [
      { name: 'Tartare of Dry-Aged Rubia Gallega', description: 'Smoked egg yolk, pickled shallot, brioche crisp.', price: '£36', origin: 'Galicia, Spain', tags: ['GF'] },
      { name: 'Hand-Dived Cornish Scallop', description: 'White truffle, cauliflower, toasted hazelnut.', price: '£38', origin: 'Falmouth Bay, Cornwall' },
      { name: 'Glazed Sweetbreads & Morels', description: 'Madeira glaze, wild garlic, veal reduction.', price: '£34', origin: 'Limousin, France' },
      { name: 'Smoked Heritage Beetroot Tart', description: 'Cultured goat curd, walnut, aged balsamic.', price: '£28', origin: 'Wiltshire organic estate', tags: ['V', 'GF'] },
    ],
  },
  {
    id: 'mains',
    title: 'Plates of Fire & Ocean',
    note: 'Hearth crafted',
    items: [
      { name: 'Wild Turbot on the Bone', description: 'Beurre blanc, charred leek, oyster leaf.', price: '£68', origin: 'North Sea line-caught' },
      { name: 'Salt Marsh Welsh Lamb Saddle', description: 'Smoked aubergine, anchovy, rosemary jus.', price: '£62', origin: 'Gower Peninsula' },
      { name: 'Ibérico Pork Secreto', description: 'Fermented quince, crackling, smoked paprika.', price: '£54', origin: 'Jabugo, Andalucía', tags: ['GF'] },
      { name: 'Foraged Forest Morels & Winter Squash', description: 'Hazelnut, sage brown butter, aged parmesan.', price: '£44', origin: 'Highland forage', tags: ['V'] },
    ],
  },
];

export const wines = [
  { region: 'Champagne · Brut Grand Cru', year: '2008', name: 'Dom Pérignon Vintage Rosé', note: 'Wild strawberry, toasted brioche, a long saline finish.', price: '£85' },
  { region: 'Bourgogne Blanc · Meursault', year: '2017', name: 'Domaine des Comtes Lafon', note: 'Hazelnut, ripe pear and polished oak.', price: '£95' },
  { region: 'Bordeaux · Pauillac 1er Grand Cru', year: '2005', name: 'Château Mouton Rothschild', note: 'Cassis, cedar and graphite; firm, elegant tannins.', price: '£140' },
];

export const artisans = [
  { name: 'Julian Vance', role: 'Chef Patron & Co-Founder', image: '/images/chef-julian.jpg', bio: 'Trained in Lyon and San Sebastián, Julian builds every menu around a single open fire.', quote: 'We do not cook ingredients; we listen to them.' },
  { name: 'Hélène Laurent', role: 'Head Sommelier', image: '/images/sommelier-helene.jpg', bio: 'Curator of a 3,200-label cellar, focused on growers who farm by hand.', quote: 'The best pairing is the one you remember on the way home.' },
  { name: 'Matteo Rossi', role: 'Botanical & Forage Director', image: '/images/forager-matteo.jpg', bio: 'Leads our seasonal forage and works with two partner farms in Kent and Devon.', quote: 'The menu is written by the weather, not by us.' },
];

export const principles = [
  { label: 'Biodynamic · 18 acres', title: 'The Sussex Farmstead', text: 'Heritage vegetables and herbs harvested at dawn and on our pass by lunch.' },
  { label: 'Cornish coast · hand-dived', title: 'Diver Scallops & Day-Boat Fishers', text: 'We buy only what small boats land that morning: no trawlers, no freezers.' },
  { label: 'Studio guild · Devon', title: 'Ceramicists & Blade-smiths', text: 'Plates, knives and linens are made for us by independent British craftspeople.' },
];

export type GalleryCategory = 'Cuisine' | 'Interior' | 'Cellar';

export const gallery: { src: string; title: string; category: GalleryCategory; wide?: boolean }[] = [
  { src: '/images/gallery-fire.jpg', title: 'Binchotan Hearth', category: 'Cuisine', wide: true },
  { src: '/images/gallery-salon.jpg', title: 'Midnight Salon Table', category: 'Interior' },
  { src: '/images/gallery-cocktail.jpg', title: 'Smoked Botanical Aperitif', category: 'Cuisine' },
  { src: '/images/gallery-lobster.jpg', title: 'Blue Lobster, Sea Broth & Oscietra', category: 'Cuisine' },
  { src: '/images/gallery-dining.jpg', title: 'The Mayfair Grand Salon at Dusk', category: 'Interior', wide: true },
  { src: '/images/gallery-cellar.jpg', title: 'Curzon Crypt & Rare Cave', category: 'Cellar' },
];

export const salons = [
  { id: 'main', name: 'Main Dining Room', price: 245, description: 'Candlelit velvet banquettes surrounded by curated British art.', courses: 'Ten courses' },
  { id: 'counter', name: "The Chef's Counter", price: 295, description: 'Front-row view of the binchotan embers. Limited to 8 seats.', courses: 'Twelve courses', featured: true },
  { id: 'garden', name: 'Garden Conservatory', price: 275, description: 'Heated glass canopy amid botanical orchids and a marble hearth.', courses: 'Botanical flight' },
];

export const timeSlots = [
  { period: 'Early', times: ['17:45', '18:15'] },
  { period: 'Prime', times: ['19:30', '20:15'] },
  { period: 'Late', times: ['21:30'] },
];

export const occasions = ['Anniversary', 'Birthday', 'Business entertaining', 'Wine pairing (+£140)'];
