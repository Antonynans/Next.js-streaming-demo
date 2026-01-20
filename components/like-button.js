"use client";

import { Heart } from "lucide-react";
import { useOptimistic, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "liked_tools";

async function toggleLike(toolId, isLiked) {
  // Simulate server action delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (isLiked) {
    return stored.filter((id) => id !== toolId);
  } else {
    return [...stored, toolId];
  }
}

export default function LikeButton({ toolId }) {
  const [optimisticLiked, addOptimisticLike] = useOptimistic(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const isLiked = stored.includes(toolId);
    if (isLiked) {
      addOptimisticLike(true);
    }
  }, [toolId, addOptimisticLike]);

  async function handleClick(e) {
    e.stopPropagation();

    // Optimistic update
    addOptimisticLike(!optimisticLiked);

    // Update storage
    try {
      const updated = await toggleLike(toolId, optimisticLiked);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  }

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="h-10 w-10"
      aria-label={optimisticLiked ? "Unlike" : "Like"}
    >
      <Heart
        className={`h-5 w-5 transition-colors ${
          optimisticLiked ? "fill-red-500 text-red-500" : "text-gray-500"
        }`}
      />
    </Button>
  );
}
