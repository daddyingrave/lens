// Global configuration setup for external packages.
// Should be imported at the top of app's entry points.
import { configure } from "mobx";
import { enableMapSet, setAutoFreeze } from "immer";

// Mobx
configure({
  isolateGlobalState: true, // might allow to use different versions of mobx in extensions
  enforceActions: "never", // skip usage of @action for class methods
});

// Immer
setAutoFreeze(false); // allow to merge observables
enableMapSet(); // allow merging maps and sets
