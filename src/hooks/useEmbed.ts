import { exportFunction } from "./src/gist/types";

import { useGist } from "./src/gist/useGist";

/**
 *
 * @param type embed type: gist / codesandbox / github
 * @param options
 * @returns function
 */
export const useEmbed = (type: string, options: object = {}) => {
  const typeMap: exportFunction = { gist: useGist };
  return typeMap[type];
};
