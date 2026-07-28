import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { industryData } from "../Industry/industryData";

import IndustryHero from "../Industry/IndustryHero";
import IndustryWorks from "../Industry/IndustryWorks";
import IndustryBenefits from "../Industry/IndustryBenefits";
import IndustryCTA from "../Industry/IndustryCTA";

const IndustryDetails = () => {
  // Route se industrySlug lo
  const { industrySlug } = useParams();

  // Industry find karo
  const industry = useMemo(() => {
    return industryData.find(
      (item) => item.slug === industrySlug
    );
  }, [industrySlug]);

  // Agar industry nahi mili
  if (!industry) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Industry Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The requested industry does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-white">
      <IndustryHero industry={industry} />

      <IndustryWorks industry={industry} />

      <IndustryBenefits industry={industry} />

      <IndustryCTA industry={industry} />
    </main>
  );
};

export default IndustryDetails;