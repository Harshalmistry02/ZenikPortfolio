import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { getServiceDetail, serviceDetails } from "../../../data/serviceDetailsData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Zenik Studio`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Zenik Studio`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
