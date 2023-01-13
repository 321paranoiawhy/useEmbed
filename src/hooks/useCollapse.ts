export const useCollapse = () =>{
    const details = document.createElement("details");
    details.classList.add("custom-details");
    // details.style.cssText = `
    // border: 0.05rem solid #448aff;
    // background-color: #fff;
    // border-radius: 0.2rem;
    // margin: 1.5625em 0;
    // padding: 0 0.6rem;
    // page-break-inside: avoid;
    // `;
    const summary = document.createElement("summary");
    details.classList.add("custom-summary");
    // summary.style.cssText = `
    // background-color: #448aff1a;
    // border-radius: 0.2rem;
    // margin: 1.5625em 0;
    // padding: 0 0.6rem;
    // page-break-inside: avoid;
    // `;
    details.appendChild(summary);
    return details;
};