const Carbon_PREFIX_URL = "https://carbon.now.sh/embed/";

export const useCarbon = (id: string, el: HTMLElement) => {
  const iframe = document.createElement("iframe");
  iframe.src = `${Carbon_PREFIX_URL}id`;
  // iframe.sandbox = "allow-scripts allow-same-origin"; // Cannot assign to 'sandbox' because it is a read-only property.ts(2540)
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");

  iframe.onload = () => {
    console.log(11111);
    // const firstElementChild =
    //   iframe.contentWindow?.document.body.firstElementChild;
    // iframe.height = firstElementChild?.scrollHeight + "px";

    // console.log(
    //   iframe.contentWindow?.document.body.querySelector(".CodeMirror-code")
    // );

    // firstElementChild?.querySelectorAll("a").forEach((element) => {
    //   element.target = "_blank";
    // });

    //   iframe.width = "800px";
    // const elWidth: string = getComputedStyle(el).getPropertyValue("width");
    // iframe.width = elWidth;
  };

  el.appendChild(iframe);
};
