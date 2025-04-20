"use client"
import { useSearchParams } from "next/navigation";

export default function SingleDetailsPage({ params }) {
  const searchParams = useSearchParams();

  return (
    <div className="min-h-screen py-24 text-2xl  flex justify-center items-center">
      <p> Detail page content are comming soon for :  </p>
    </div>
  );
}
