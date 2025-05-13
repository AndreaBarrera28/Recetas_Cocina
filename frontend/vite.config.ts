import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import plugin from "@vitejs/plugin-react";
import fs from "fs";
import * as https from "https";

export default ({ mode }: { mode: string }) => {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

    const options: https.ServerOptions = {
        cert: process.env.SSL_CRT_FILE
            ? fs.readFileSync(process.env.SSL_CRT_FILE)
            : "",
        key: process.env.SSL_KEY_FILE
            ? fs.readFileSync(process.env.SSL_KEY_FILE)
            : "",
    };
    // https://vitejs.dev/config/
    return defineConfig({
        plugins: [plugin()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        server: {
            proxy: {
                "/api": {
                    target: "http://localhost:8000", //debe dee estar igual al .env en cuanto a http o https
                    secure: false,
                    changeOrigin: true,
                    //rewrite: (path) => path.replace(/^\/api/, ""), //esto no ... da error
                },
            },
            port: 5173,
            https: options,
        },
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: "static/js/[name].js", // Custom name for entry files
                    chunkFileNames: "static/js/[name].js", // Custom name for chunks
                    assetFileNames: "static/assets/[name].[ext]", // Custom name for assets
                },
            },
        },
        css: {
            devSourcemap: false,
          },
    });
};
