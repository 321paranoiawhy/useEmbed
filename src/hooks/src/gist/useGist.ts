import { ref } from "vue";

import fetchJSONP from "fetch-jsonp";

import { useGistOptions, GistResponse } from "./types";

const Gist_PREFIX_URL = "https://gist.github.com/";

const initialUseGistOptions: useGistOptions = {
  loading: "lazy",
  collapse: true,
};

/**
 *
 * @param GistID 5149b8848cb05f20efbc21fa750d7d2e
 * @param el 被插入的元素, 默认值为 body
 * @param customStylesheet 自定义 iframe 样式
 */
export const useGist = async (
  GistID: string,
  el: HTMLElement,
  // el: HTMLElement = document.body,
  useGistOptions?: useGistOptions,
  customStylesheet?: StyleSheet
) => {
  const iframe = document.createElement("iframe");

  const GistOptions = { ...initialUseGistOptions, ...useGistOptions };

  // for(const option in GistOptions) {
  //   iframe[option] = GistOptions[option];
  // }

  iframe.style.border = "none";

  // iframe.frameBorder = "no"; // Deprecated: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-frameborder

  const isLightTheme = ref(true);
  const isLoading = ref(true);
  const isError = ref(false);

  const response = await fetchJSONP(`${Gist_PREFIX_URL}${GistID}.json`);
  //   console.log("response", response, response.ok);

  if (response.ok) {
    const result: GistResponse = await response.json();
    console.log("result", result);

    // 1. reset stylesheet
    // 重置 iframe 中 HTML 和 body 样式
    const resetStylesheet = `
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        div.gist .gist-file {
          border-color: #448aff;
          border-radius: 0;
          border-top: none;
          border-bottom: none;
          box-sizing: border-box;
        }
        div.gist .gist-meta {
          border-radius: 0;
        }
      </style>
    `;

    // 2. Gist stylesheet
    // Gist 样式表
    const stylesheetLink = document.createElement("link");
    stylesheetLink.rel = "stylesheet";
    stylesheetLink.href = result.stylesheet;

    // 2. Gist stylesheet
    // Gist 样式表
    const details = document.createElement("details");
    details.classList.add("custom-details");
    const summary = document.createElement("summary");
    summary.classList.add("custom-summary");
    const detailsStylesheetLink = document.createElement("link");
    detailsStylesheetLink.rel = "stylesheet";
    // detailsStylesheetLink.href = `
    //     summary {
    //       position: relative;
    //     }
    //     summary::after {
    //       position: absolute;
    //       content: " ";
    //       background-image: url("https://api.iconify.design/mdi:chevron-right.svg");
    //       width: 30px;
    //       height: 30px;
    //     }
    // `;
    // detailsStylesheetLink.href = result.stylesheet;

    GistOptions.collapse ? (details.open = false) : (details.open = true);

    // 3. user custom stylesheet
    // 用户自定义样式表
    let customStylesheet = "";

    // 4. adjust iframe height
    // 高度自适应
    iframe.onload = () => {
      const firstElementChild =
        iframe.contentWindow?.document.body.firstElementChild;
      iframe.height = firstElementChild?.scrollHeight + "px";

      firstElementChild?.querySelectorAll("a").forEach((element) => {
        element.target = "_blank";
      });

      //   iframe.width = "800px";
      const elWidth: string = getComputedStyle(el).getPropertyValue("width");
      iframe.width = elWidth;
    };

    // 5. Inject stylesheet and content into the iframe
    // 注入样式和内容
    iframe.srcdoc = `
      <html>
        <head>
          <!-- reset stylesheet -->
          ${resetStylesheet}

          <!-- gist stylesheet -->
          ${stylesheetLink.outerHTML}

          <!-- custom stylesheet -->
          <style>
            ${customStylesheet}
          </style>
        </head>

        <body>
          ${result.div}
        </body>
      </html>
    `;
    details.appendChild(summary);
    details.appendChild(iframe);
    details.ontoggle = (e) => {
      console.log(e, 2222);
      const firstElementChild =
        iframe.contentWindow?.document.body.firstElementChild;
      iframe.height = firstElementChild?.scrollHeight + "px";
    };
    // onMounted(()=>{
    //   el.appendChild(iframe);

    // });
    // el.appendChild(iframe);
    el.appendChild(details);
    return iframe;
  } else {
    console.log("error");
    return "error";
  }
};
