const DUMMY_DONATIONS = [
  {
    id: "1",
    image: "/images/donate2.jpeg",
    heading: "Feed 60 Kids for a month",
    subHeading: "RAISING R30 000 BY 21 AUG",
    description: "Feed-a-child, Cape Town",
    aboutImg: "assets/food.jpg",
    cta: false,
    cta_url: "",
    isPopular: false,
    isEnding: false,
    goal: "R30 000",
    days: 30,
    progress: 10,
    contributions: 150,
  },
  {
    id: "2",
    image: "/images/donate3.jpeg",
    heading: "Buy 5000 Blankets",
    subHeading: "RAISING R150 000 BY 02 JUN",
    description: "Drought fund, Durban",
    aboutImg: "/images/donate7.jpg",
    cta: false,
    cta_url: "",
    isPopular: true,
    isEnding: false,
    goal: "R150 000",
    days: 8,
    progress: 40,
    contributions: 50,
  },
  {
    id: "3",
    image: "/images/donate5.jpeg",
    heading: "Sponsor a farm with 1000 litres of water",
    subHeading: "RAISING R750 000 BY 08 SEP",
    description: "SPCA, Johannesburg",
    aboutImg: "/images/donate4.jpg",
    cta: true,
    cta_url: "/about",
    isEnding: true,
    isPopular: false,
    goal: "R750 000",
    days: 30,
    progress: 70,
    contributions: 250,
  },
  {
    id: "4",
    image: "/images/donate7.jpeg",
    heading: "Buy 5000 Blankets",
    subHeading: "RAISING R50 000 BY 21 MAY",
    description: "Drought fund, Durban",
    aboutImg: "/images/blankets.jpg",
    cta: false,
    cta_url: "",
    isPopular: true,
    isEnding: false,
    goal: "R50 000",
    days: 8,
    progress: 20,
    contributions: 30,
  },
];

export function getAllDonations() {
  return DUMMY_DONATIONS;
}

export function getDonationById(id) {
  return DUMMY_DONATIONS.find((donation) => donation.id === id);
}

export function getPopularDonations() {
  return DUMMY_DONATIONS.filter((donation) => donation.isPopular);
}

export function getEndingDonations() {
  return DUMMY_DONATIONS.filter((donation) => donation.isEnding);
}
