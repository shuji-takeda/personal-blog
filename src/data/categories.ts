export const OTHER_SUBCATEGORY_SLUGS = ['travel', 'gadget', 'life', 'book'] as const;

export const OTHER_SUBCATEGORIES = [
  {
    slug: 'travel',
    icon: '✈️',
    label: 'Travel / 旅',
    description: '旅行記、観光スポット、温泉宿、ご当地グルメ',
  },
  {
    slug: 'gadget',
    icon: '🎧',
    label: 'Gadget / モノ',
    description: 'PC周辺機器、愛用ツール、買ってよかった生活雑貨',
  },
  {
    slug: 'life',
    icon: '☕',
    label: 'Life / 雑記',
    description: '日々の気づき、コラム、思考の整理、日課',
  },
  {
    slug: 'book',
    icon: '📚',
    label: 'Book / 学び',
    description: '読んだ本の感想、勉強したこと',
  },
] as const;
