"use client";

import { useState, useCallback } from "react";
import ToolsFilter from "./tools-filter";
import ToolsCardsView from "./tools-cards-view";

export default function ToolsCardsWrapper({ tools }) {
  const [filteredTools, setFilteredTools] = useState(tools);

  const handleFilterChange = useCallback((newTools) => {
    setFilteredTools(newTools);
  }, []);

  return (
    <div className="w-full">
      <ToolsFilter tools={tools} onFilterChange={handleFilterChange} />
      <ToolsCardsView tools={filteredTools} />
    </div>
  );
}
