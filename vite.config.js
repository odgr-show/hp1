// vite.config.js

// import { defineConfig } from "vite";

// export default defineConfig({
//     root: "src",
//     build: {
//         outDir: "../dist/", // distフォルダ内に出力
//         emptyOutDir: true, // ビルド前に出力ディレクトリを空にする
//         rollupOptions: {
//             output: {
//                 entryFileNames: "[name].js", // JSファイル名を変更し、[hash]を使用してキャッシュ無効化を行う
//             },
//         },
//     },
//     css: {
//         fileName: "[name].css", // CSSファイル名を変更
//         chunkFileNames: "[name].css", // チャンクファイル名も変更
//     },
// });

import { defineConfig } from "vite";
import { resolve } from "path";

const root = "src";

export default defineConfig({
    root,
    base: "/",
    publicDir: "../public",
    plugins: [],
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                // htmlを追加する場合にはこちらに追記
                index: resolve(root, "index.html"),
            },
            output: {
                entryFileNames: "[name].js", // JSファイル名を変更し、[hash]を使用してキャッシュ無効化を行う
            },
        },
    },
    css: {
        fileName: "[name].css", // CSSファイル名を変更
        chunkFileNames: "[name].css", // チャンクファイル名も変更
    },
    server: {
        host: true,
    },
});
