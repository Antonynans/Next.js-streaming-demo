const TOOLS = [
  "JavaScript",
  "React",
  "Vue",
  "Svelte",
  "Preact",
  "Angular",
  "Astro",
  "Flutter",
  "Solid",
];

const DELAY = 3000;

async function generateToolsData(tool, delay) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * delay));

  return tool;
}

const getTools = async () => {
  "use server";

  try {
    if (!TOOLS || TOOLS.length === 0) {
      throw new Error("No tools available");
    }

    return TOOLS.map((tool) => generateToolsData(tool, DELAY));
  } catch (error) {
    console.error("Error fetching tools:", error);
    throw new Error("Failed to fetch tools. Please try again later.");
  }
};

export default getTools;
