export const d = [
  {
    country: "AD",
    "hot dog": 84,
    "hot dogColor": "hsl(359, 70%, 50%)",
    burger: 191,
    burgerColor: "hsl(298, 70%, 50%)",
    sandwich: 85,
    sandwichColor: "hsl(255, 70%, 50%)",
    kebab: 156,
    kebabColor: "hsl(123, 70%, 50%)",
    fries: 34,
    friesColor: "hsl(98, 70%, 50%)",
    donut: 28,
    donutColor: "hsl(305, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 168,
    "hot dogColor": "hsl(210, 70%, 50%)",
    burger: 160,
    burgerColor: "hsl(100, 70%, 50%)",
    sandwich: 40,
    sandwichColor: "hsl(280, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(226, 70%, 50%)",
    fries: 163,
    friesColor: "hsl(226, 70%, 50%)",
    donut: 135,
    donutColor: "hsl(150, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 19,
    "hot dogColor": "hsl(290, 70%, 50%)",
    burger: 147,
    burgerColor: "hsl(314, 70%, 50%)",
    sandwich: 93,
    sandwichColor: "hsl(69, 70%, 50%)",
    kebab: 173,
    kebabColor: "hsl(141, 70%, 50%)",
    fries: 167,
    friesColor: "hsl(323, 70%, 50%)",
    donut: 69,
    donutColor: "hsl(263, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 34,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(123, 70%, 50%)",
    sandwich: 68,
    sandwichColor: "hsl(44, 70%, 50%)",
    kebab: 56,
    kebabColor: "hsl(257, 70%, 50%)",
    fries: 123,
    friesColor: "hsl(310, 70%, 50%)",
    donut: 47,
    donutColor: "hsl(27, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 150,
    "hot dogColor": "hsl(199, 70%, 50%)",
    burger: 194,
    burgerColor: "hsl(213, 70%, 50%)",
    sandwich: 77,
    sandwichColor: "hsl(3, 70%, 50%)",
    kebab: 51,
    kebabColor: "hsl(268, 70%, 50%)",
    fries: 0,
    friesColor: "hsl(286, 70%, 50%)",
    donut: 151,
    donutColor: "hsl(34, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 8,
    "hot dogColor": "hsl(261, 70%, 50%)",
    burger: 61,
    burgerColor: "hsl(4, 70%, 50%)",
    sandwich: 134,
    sandwichColor: "hsl(325, 70%, 50%)",
    kebab: 84,
    kebabColor: "hsl(262, 70%, 50%)",
    fries: 87,
    friesColor: "hsl(68, 70%, 50%)",
    donut: 138,
    donutColor: "hsl(334, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 97,
    "hot dogColor": "hsl(294, 70%, 50%)",
    burger: 29,
    burgerColor: "hsl(43, 70%, 50%)",
    sandwich: 18,
    sandwichColor: "hsl(149, 70%, 50%)",
    kebab: 36,
    kebabColor: "hsl(156, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(334, 70%, 50%)",
    donut: 182,
    donutColor: "hsl(279, 70%, 50%)",
  },
];

export const week = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return Array(7).fill(0).map((_, i) => (
    {
      value: (Math.random() * 100).toFixed(),
      date: days[i],
    }
  ));
};

export const month = () => {
  return Array(30)
    .fill(0)
    .map((_, i) => ({
      value: (Math.random() * 100).toFixed(),
      date: `${i + 1}`,
    }));
};