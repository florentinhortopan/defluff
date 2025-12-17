import { w as writable } from "./index.js";
const products = writable([
  {
    id: "puxa-ai",
    name: "Puxa.ai",
    slug: "puxa-ai",
    tagline: "Transform attention into understanding, and understanding into action",
    description: 'Puxa.ai helps people transform social media and web content into structured knowledge and actionable insights. Built from the core mission of helping people "defluff" information overload.',
    features: [
      "Content intelligence and analysis",
      "Knowledge extraction from media",
      "Structured information architecture",
      "Actionable insights generation"
    ],
    capabilities: [
      "Analyze video, audio, and web content",
      "Extract key concepts and definitions",
      "Create structured knowledge cards",
      "Generate guided learning paths"
    ]
  }
]);
export {
  products as p
};
