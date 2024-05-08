import { listIcon, listImg } from "../assets/assets";
import { dataPopularProductsProps } from "./interfaceDataCar";

const dataLogo = [
  {
    logo: "All",
    brand: "All",
  },
  {
    logo: listIcon.logo1,
    brand: "Porsche",
  },
  {
    logo: listIcon.logo2,
    brand: "Audi",
  },
  {
    logo: listIcon.logo3,
    brand: "Tesla",
  },
];

const dataFeatureLuxury: dataPopularProductsProps[] = [
  {
    brand: "Tesla",
    name: "Model X",
    price: "298900",
    priceRange: "$200.000 - $299.999",
    img: listImg.featured1,
    year: 2021,
    energy: "Electric",
    km: 280,
    mode: "Automatic",
    productType: "Family",
  },
  {
    brand: "Tesla",
    name: "Model 3",
    price: "453900",
    priceRange: "$400.000 - $499.999",
    img: listImg.featured2,
    year: 2023,
    energy: "Electric",
    km: 290,
    mode: "Automatic",
    productType: "Family",
  },
  {
    brand: "Audi",
    name: "E-tron",
    price: "875800",
    priceRange: "$500.000+",
    img: listImg.featured3,
    year: 2022,
    energy: "Electric",
    km: 300,
    mode: "Automatic",
    productType: "Luxury",
  },
  {
    brand: "Porsche",
    name: "Porsche 911",
    price: "523900",
    priceRange: "$500.000+",
    img: listImg.popular2,
    year: 2022,
    energy: "Electric",
    km: 280,
    mode: "Automatic",
    productType: "Luxury",
  },
  {
    brand: "Porsche",
    name: "Whikar",
    price: "413900",
    priceRange: "$400.000 - $499.999",
    img: listImg.offer,
    year: 2022,
    energy: "Electric",
    km: 280,
    mode: "Automatic",
    productType: "Sports",
  },
];

export { dataLogo, dataFeatureLuxury };
