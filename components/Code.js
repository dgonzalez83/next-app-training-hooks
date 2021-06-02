import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";
// import "prismjs/themes/prism.css";

/*
const prismjsTheme = {
  PRISM_COY: "prism-coy.css",
  PRISM_OKAIDIA: "prism-okaidia.css",
};
*/

const Code = ({ children, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="w-100">
      <pre>
        <code className={`lang-${language}`}>{children}</code>
      </pre>
    </div>
  );
};

export default Code;
