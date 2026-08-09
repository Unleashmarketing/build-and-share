import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const routes = [
  "/",
  "/404.html",
  "/impressum",
  "/datenschutz",
  "/event/1",
  "/event/2",
  "/event/3",
];

const { default: server } = await import("../dist/server/index.mjs");
const outputDir = ".output/public";

await rm(".output", { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const context = {
  passThroughOnException() {},
  waitUntil() {},
};

for (const route of routes) {
  const response = await server.fetch(
    new Request(new URL(route, "https://laras-kantinchen.de")),
    {},
    context,
  );

  if (!response.ok && route !== "/404.html") {
    throw new Error(`Export of ${route} failed with HTTP ${response.status}`);
  }

  const html = await response.text();
  const target = route === "/"
    ? join(outputDir, "index.html")
    : route === "/404.html"
      ? join(outputDir, "404.html")
      : join(outputDir, route.slice(1), "index.html");

  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

console.log(`Exported ${routes.length} static routes to ${outputDir}`);