import { defineConfig } from "vite";
// インストールが必要
import viteImagemin from "vite-plugin-imagemin";

import { resolve } from "path";

const root = "src";

export default defineConfig({
    root,
    base: "/",
    publicDir: "../public",
    plugins: [
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                // htmlを追加する場合にはこちらに追記
                index: resolve(root, "index.html"),
            },
        },
    },
    server: {
        host: true,
    },
});
