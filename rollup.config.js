import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import copy from 'rollup-plugin-copy';

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/toool.esm.js",
      format: "es",
    },
    {
      file: "dist/toool.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/toool.umd.js",
      format: "umd",
      name: "toool",
      globals: {
        // libs
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    del({ targets: "dist/*" }), // 删除 dist 目录下的所有文件
    copy({
      targets: [
        // 定义需要复制的文件或文件夹
        // { src: "src/assets/*.png", dest: "dist/assets" },
        // { src: "LICENSE", dest: "dist" },
        // { src: "package.json", dest: "dist" },
        // 可以根据需要添加更多的复制规则
      ],
      // 可选参数
      verbose: true, // 打印详细的复制信息
      flatten: false, // 是否将源文件复制到目标文件夹而不保留目录结构
      watch: false, // 是否在 watch 模式下执行复制操作
    }),
  ],
};
