import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { getServiceDetail, serviceDetails } from "../../../data/serviceDetailsData";
import { getIndividualServiceDetail, individualServiceDetails } from "../../../data/serviceIndividualData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categorySlugs = serviceDetails.map((s) => ({ slug: s.slug }));
  const individualSlugs = Array.from(individualServiceDetails.keys()).map((id) => ({ slug: id }));
  return [...categorySlugs, ...individualSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug) || getIndividualServiceDetail(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Zenik Tech`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Zenik Tech`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug) || getIndividualServiceDetail(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
