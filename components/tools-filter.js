"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function ToolsFilter({ tools, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handleSearch = useCallback(
    (value) => {
      setSearchTerm(value);
      const filtered = tools.filter((tool) =>
        tool.toLowerCase().includes(value.toLowerCase()),
      );

      const sorted = [...filtered].sort((a, b) => {
        if (sortBy === "name") {
          return a.localeCompare(b);
        }
        return 0;
      });

      onFilterChange(sorted);
    },
    [tools, sortBy, onFilterChange],
  );

  const handleSort = useCallback(
    (newSortBy) => {
      setSortBy(newSortBy);
      const filtered = tools.filter((tool) =>
        tool.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      let sorted = [...filtered];
      if (newSortBy === "name") {
        sorted.sort((a, b) => a.localeCompare(b));
      }

      onFilterChange(sorted);
    },
    [tools, searchTerm, onFilterChange],
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            aria-label="Search tools"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition"
          aria-label="Sort tools by"
        >
          <option value="name">Sort by Name</option>
          <option value="added">Recently Added</option>
        </select>
      </div>
    </div>
  );
}
