import { Shadow } from "./examples/shadow";
import { Button } from "./examples/button";
import { Icon } from "./examples/icon";
import { IconButton } from "./examples/icon-button";
import { SVG } from "./examples/svg";
import Home from "./Home.svelte";

export default {
  "/": Home,
  "/shadow": Shadow,
  "/button": Button,
  "/icon": Icon,
  "/icon-button": IconButton,
  "/svg": SVG,
};