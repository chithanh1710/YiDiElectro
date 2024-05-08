import { listImg } from "../assets/assets";
import { dataPopularProductsProps } from "./interfaceDataCar";

const dataCarAll: dataPopularProductsProps[] = [
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
    name: "Eron",
    price: "275800",
    priceRange: "$200.000 - $299.999",
    img: listImg.featured4,
    year: 2022,
    energy: "Electric",
    km: 300,
    mode: "Automatic",
    productType: "Sports",
  },
  {
    brand: "Porsche",
    name: "Eon",
    price: "135800",
    priceRange: "$100.000 - $199.999",
    img: listImg.featured5,
    year: 2022,
    energy: "Electric",
    km: 300,
    mode: "Family",
    productType: "Family",
  },
  {
    brand: "Porsche",
    name: "Darkar",
    price: "346900",
    priceRange: "$300.000 - $399.999",
    img: listImg.popular1,
    year: 2024,
    energy: "Electric",
    km: 360,
    mode: "Automatic",
    productType: "Sport",
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
    name: "Lron",
    price: "175800",
    priceRange: "$100.000 - $199.999",
    img: listImg.popular3,
    year: 2022,
    energy: "Electric",
    km: 300,
    mode: "Automatic",
    productType: "Sports",
  },
  {
    brand: "Porsche",
    name: "Cayenne",
    price: "166900",
    priceRange: "$100.000 - $199.999",
    img: listImg.popular4,
    year: 2022,
    energy: "Electric",
    km: 310,
    mode: "Automatic",
    productType: "Luxury",
  },
  {
    brand: "Porsche",
    name: "Carrera T",
    price: "311900",
    priceRange: "$300.000 - $399.999",
    img: listImg.popular5,
    year: 2022,
    energy: "Electric",
    km: 280,
    mode: "Automatic",
    productType: "Sports",
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

export default dataCarAll;
