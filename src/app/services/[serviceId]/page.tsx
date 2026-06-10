import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceDetailPage } from "../../../components/ServiceDetailPage";
import { getIndividualServiceDetail, individualServiceDetails } from "../../../data/serviceIndividualData";

interface Props {
  params: Promise<{ serviceId: string }>;
}

export async function generateStaticParams() {
  return Array.from(individualServiceDetails.keys()).map((serviceId) => ({ serviceId }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceId } = await params;
  const service = getIndividualServiceDetail(serviceId);
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
  const { serviceId } = await params;
  const service = getIndividualServiceDetail(serviceId);
  if (!service) notFound();
  return <ServiceDetailPage service={service} />;
}
