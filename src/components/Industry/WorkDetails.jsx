import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { industryData } from "../Industry/industryData";

import WorkHero from "../Industry/WorkHero";
import WorkDescription from "../Industry/WorkDescription";
import WorkGallery from "../Industry/WorkGallery";
import WorkProducts from "../Industry/WorkProducts";
import RelatedProjects from "../Industry/RelatedProjects";
import IndustryCTA from "../Industry/IndustryCTA";

const WorkDetails = () => {
  const { industrySlug, workSlug } = useParams();

  // ================= Find Industry =================

  const industry = useMemo(() => {
    return industryData.find(
      (item) => item.slug === industrySlug
    );
  }, [industrySlug]);

  // ================= Find Work =================

  const work = useMemo(() => {
    if (!industry) return null;

    return industry.works.find(
      (item) => item.slug === workSlug
    );
  }, [industry, workSlug]);

  // ================= Not Found =================

  if (!industry || !work) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900">
            Work Not Found
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            The requested project could not be found.
          </p>
        </div>
      </main>
    );
  }

  // ================= Page =================

  return (
    <main className="overflow-hidden bg-white">

      <WorkHero
        industry={industry}
        work={work}
      />

      <WorkDescription
        industry={industry}
        work={work}
      />

      <WorkGallery
        industry={industry}
        work={work}
      />

      <WorkProducts
        industry={industry}
        work={work}
      />

      <RelatedProjects
        industry={industry}
        work={work}
      />

      <IndustryCTA
        industry={industry}
      />

    </main>
  );
};

export default WorkDetails;