import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import webExtension from "vite-plugin-web-extension";

export default defineConfig({
    base: "",
    build: {
        minify: false,
    },
    plugins: [
        vue(),
        webExtension({
            browser: process.env.TARGET || "chrome",
            // useDynamicUrlWebAccessibleResources: false,
            additionalInputs: ["conversation.html"],
            disableAutoLaunch: true,
        }),
    ],
})
