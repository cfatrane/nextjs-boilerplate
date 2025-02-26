import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
  /*
   * Resolve and load conventional-changelog-atom from node_modules.
   * Referenced packages must be installed
   */
  parserPreset: "conventional-changelog-atom",
  /*
   * Resolve and load @commitlint/format from node_modules.
   * Referenced package must be installed
   */
  formatter: "@commitlint/format",
};

export default Configuration;
