import getTools from "@/lib/getTools";
import { Suspense, use, memo } from "react";
import IconCard from "./icon-card";
import CardSkeleton from "./ui/card-skeleton";

const ToolsCard = memo(({ toolPromise }) => {
    const tool = use(toolPromise);

    return <IconCard tool={tool} />;
});

ToolsCard.displayName = "ToolsCard";

const ToolsCards = async () => {
    let toolsPromise;
    try {
        toolsPromise = await getTools();
    } catch (error) {
        console.error("Failed to fetch tools:", error);
        throw error;
    }

    if (!toolsPromise || toolsPromise.length === 0) {
        return (
            <div className="text-center text-gray-400">
                <p>No tools available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 py-6">
                {toolsPromise.map((toolPromise, index) => {
                    const key = `tool-${index}`;
                    return (
                        <Suspense fallback={<CardSkeleton />} key={key}>
                            <ToolsCard toolPromise={toolPromise} />
                        </Suspense>
                    );
                })}
            </div>
        </div>
    );
}

export default ToolsCards;
