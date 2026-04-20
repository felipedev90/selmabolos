import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Selma Bolos | Confeitaria Artesanal",
    short_name: "Selma Bolos",
    description:
      "Bolos artesanais decorados para festas e eventos em Várzea Paulista e Jundiaí.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf8f5",
    theme_color: "#c97b5a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
