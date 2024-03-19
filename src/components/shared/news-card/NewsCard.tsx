import { BaseTag } from "@/components/ui";
import { NewsModel } from "@/typings";

interface NewsCardProps {
  news: NewsModel;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { title, description, publishedAt, urlToImage, source } = news;

  return (
    <>
      <div className="border p-3 rounded-xl" data-testid="news-card">
        <div className="grid grid-cols-12 gap-x-4">
          <img
            className="h-full min-h-40 w-full object-cover rounded-xl col-span-3"
            src={urlToImage}
          />
          <div className="col-span-9">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <div className="flex justify-between gap-x-2 mt-1">
              <div>
                <BaseTag title={source?.name || ""} color="secondary" />
              </div>
              <div>
                <BaseTag title={publishedAt?.slice(0, 10) || ""} color="gray" />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
