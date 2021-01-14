import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeHighlighter from './CodeHighlighter';

const Blog = (props: any) => {
  const codeString =
    "import React from 'react';\n\
import SyntaxHighlighter from 'react-syntax-highlighter';\n\
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';\n\
const Blog = (props: any) => {\n\
    return (\n\
    <div className='mainContainer container-fluid'>\n\
      <div className='col'>\n\
        <div className='row d-flex'>\n\
          <h1>Blog Will Go Here</h1>\n\
        </div>\n\
      </div>\n\
      <div className='col'>\n\
        <div className='row d-flex'>\n\
          <h2>Code Snipet Test</h2>\n\
        </div>\n\
        <div className='col'>\n\
          <div className='row d-flex justify-content-center'>\n\
            <SyntaxHighlighter language='jsx'>\n\
            {codeString}\n\
            </SyntaxHighlighter>\n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  );";

  return (
    <div className='mainContainer container-fluid'>
      <div className='col'>
        <div className='row d-flex'>
          <h1>Blog Will Go Here</h1>
        </div>
      </div>
      <div className='col'>
        <div className='row d-flex'>
          <h2>Code Snipet Test</h2>
        </div>
        <div className='col'>
          <div className='row d-flex justify-content-center'>
            <CodeHighlighter code={codeString}></CodeHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
