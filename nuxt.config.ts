import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    app: {
        head: {
            // update Nuxt defaults
            charset: "utf-16",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
        },
    },
    css: ["./app/assets/css/tailwind.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    modules: ["shadcn-nuxt", "@pinia/nuxt"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./app/components/ui"
         */
        componentDir: "./app/components/ui",
    },
});
