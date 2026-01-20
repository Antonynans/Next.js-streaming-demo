import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Next.js Streaming Masterclass",
  description:
    "Learn how to build performant applications with Next.js streaming",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-24">
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Next.js Streaming
        </h1>
        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          Experience fast, responsive UI with server-side rendering and
          real-time streaming updates
        </p>
      </div>
      <Link href="/streaming-demo" prefetch={false}>
        <Button
          size="lg"
          className="cursor-pointer"
          aria-label="Navigate to streaming demo page"
        >
          Streaming Demo
        </Button>
      </Link>
    </div>
  );
}
