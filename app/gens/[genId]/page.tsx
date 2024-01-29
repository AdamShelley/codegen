import { Room } from "@/components/room";
import Loading from "./_components/gen-loading";
import { Skeleton } from "@/components/ui/skeleton";

interface GenIdPageProps {
  params: {
    genId: string;
  };
}

export default function Page({ params }: GenIdPageProps) {
  return (
    <Room roomId={params.genId} fallback={<Loading />}>
      <div>My Gen: </div>
      <div></div>
    </Room>
  );
}

Page.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
