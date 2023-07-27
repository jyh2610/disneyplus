"use client";
import { useSearchParams, useParams } from "next/navigation";
import DetailMain from "../../../components/detail/Detail";

export default function Detail({ id }: { id: string }) {
  console.log(id);
  const param = useSearchParams();
  const movie = param.get("id");
  console.log(movie);
  return (
    <main>
      <DetailMain />
    </main>
  );
}
