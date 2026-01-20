import ToolsCards from "@/components/tools-cards";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Streaming Demo | Next.js Framework Tools",
  description:
    "Interactive streaming demo showcasing popular frameworks and tools with real-time updates.",
};

export default function StreamingDemo() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <ToolsCards />
    </div>
  );
}
