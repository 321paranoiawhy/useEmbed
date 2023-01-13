/**
 * @typeParam description
 * @typeParam public
 * @typeParam created_at
 * @typeParam files
 * @typeParam owner
 * @typeParam div
 * @typeParam stylesheet
 */
export type GistResponse = {
  description: string;
  public: boolean;
  created_at: string;
  files: Array<string>;
  owner: string;
  div: string;
  stylesheet: string;
};

/**
 * @name useGistOptions
 * @typeParam width https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-width
 * @typeParam height https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-height
 * @typeParam loading https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-loading
 * @typeParam allowfullscreen https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowfullscreen
 * @typeParam allow https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-allowfullscreen
 */
export type useGistOptions = {
  width?: string;
  height?: number | string;
  allowfullscreen?: boolean;
  allow?: string;
  loading?: string;
  collapse?: boolean;
};

export type exportFunction = {
  [key: string]: Function;
};
