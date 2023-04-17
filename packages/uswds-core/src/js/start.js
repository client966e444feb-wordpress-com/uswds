window.uswdsPresent = true; // GLOBAL variable to indicate that the uswds.js has loaded in the DOM.

/**
 * The 'polyfills' define key ECMAScript 5 methods that may be missing from
 * older browsers, so must be loaded first.
 */
require("./polyfills");

const uswds = require("./config");

const banner = require("../../../usa-banner/src/index");
const svg4everybody = require("./polyfills/svg4everybody");

// uswds.components = components;

const initComponents = () => {
  const target = document.body;
  banner.on(target);
  svg4everybody();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComponents, { once: true });
} else {
  initComponents();
}

exports.default = uswds;
exports.initComponents = initComponents;
