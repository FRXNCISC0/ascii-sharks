import { OceanEngine, type SharkKind, type SharkSpec } from "./src";

// ?sharks=thresher,hammerhead,mako,nurse — first is biggest, the rest step down. No param: the default pack.
const kinds = new URLSearchParams(location.search).get("sharks")?.split(",").filter(Boolean) as SharkKind[] | undefined;
const sharks: SharkSpec[] | undefined = kinds?.map((kind, i) => ({ kind, size: Math.max(0.3, 1 - i * 0.13) }));

new OceanEngine(document.querySelector("canvas")!, sharks);
