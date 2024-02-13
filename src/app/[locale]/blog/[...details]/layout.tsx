import { utilityApi } from "@/lib/api/GetApi";
import { RemoveHtmlTags } from "@/lib/utils/htmlFormatter";

export async function generateMetadata({
  params,
}: {
  params: { details: string; locale: string };
}) {
  const id = decodeURIComponent(params.details[0]);
  const res = await utilityApi.getBlogById(Number(id));

  const title = decodeURIComponent(params.details[1]);
  const description = RemoveHtmlTags(res.data.data.topic);
  const image = res.data.data.resized_file.thumbnail_url;

  return {
    title,
    description,
    openGraph: {
      images: [{ url: image, width: 1200, height: 630 }],
    },
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
