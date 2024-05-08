import { useState } from "react";
import { ListLogo } from "./ListLogo";
import { ListFeatureLuxuryCar } from "./ListFeatureLuxuryCar";
import { dataFeatureLuxury } from "../../data/dataFeatureLuxuryCar";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
export function FeatureLuxuryCar() {
  const [logo, setLogo] = useState("All");
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div className="container-width">
      <div>
        <h2 className="font-semibold text-center py-8 text-3xl">
          {lang === "English" ? "Feature Luxury Car" : "Xe hơi sang trọng"}
        </h2>
        <ListLogo logo={logo} setLogo={setLogo} />
        <div className="mt-8">
          <ListFeatureLuxuryCar data={dataFeatureLuxury} logo={logo} />
        </div>
      </div>
    </div>
  );
}