export const projects = [
    {
      id: 1,
      title: "Profile",
      path: "/profile",
      icon:"AccountCircle",
      description: "Profile Page",
      tech: ["React","Node.js"]
    },
    {
      id: 2,
      title: "Accordion",
      path: "/accordion",
      icon:"UnfoldLess",
      description: "Accordion application with single, Multi selection",
      tech: ["React","Node.js"]
    },
    {
      id: 3,
      title: "Random Color",
      path: "/color-picker",
      icon:"ColorLens",
      description: "Random Color (Hex + RGB) Generator Application",
      tech: ["React", "Node.js"]
    },
    // Add more projects
  ];

// Update iconMap to use simple keys
export const iconMap = {
  AccountCircle: 'AccountCircleIcon',
  UnfoldLess: 'UnfoldLessIcon',
  ColorLens: 'ColorLensIcon',
};