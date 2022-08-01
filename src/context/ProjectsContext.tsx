import React, { createContext, ReactNode } from "react";
import ColorFlipper from "../pages/ColorFlipper";

const initProjects = [
  {
    name: "Color Flipper",
    image:
      "https://www.vanillajavascriptprojects.com/_next/image?url=https%3A%2F%2Fdl.airtable.com%2F.attachments%2Fa339b9249dc2cce4b4c1fb4738a7a23c%2F8cee7da4%2FScreen_Shot_2020-04-13_at_8.57.42_PM.png%3Fts%3D1658425599%26userId%3DusrQMwWEPx18KgLcP%26cs%3Df71dc75c7f19f0f6&w=1920&q=75",
    status: false,
    element: ColorFlipper,
  },
];

export const ProjectsContext = createContext<{
  projects: Array<{
    name: string;
    image: string;
    status: boolean;
    element: JSX.Element;
  }>;
}>({
  projects: initProjects,
});
