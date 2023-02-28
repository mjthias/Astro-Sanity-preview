import { defineConfig } from "astro/config";
import sanity from "astro-sanity";

export default defineConfig({
    output: "server",
    integrations: [
        sanity({
            projectId: "...",
            dataset: "production",
            apiVersion: "2023-01-01",
            token: "Sanity read only token",
            useCdn: true,
        }),
    ],
});
