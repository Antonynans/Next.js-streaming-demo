"use client";

import { Suspense, use, memo } from "react";
import IconCard from "./icon-card";
import CardSkeleton from "./ui/card-skeleton";

const ToolsCard = memo(({ toolPromise }) => {
  const tool = use(toolPromise);

  return <IconCard tool={tool} />;
});

ToolsCard.displayName = "ToolsCard";

export default function ToolsCardsView({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        <p>No tools available.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {tools.map((tool, index) => {
          const key = `tool-${tool}-${index}`;
          return (
            <Suspense fallback={<CardSkeleton />} key={key}>
              <IconCard tool={tool} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}
