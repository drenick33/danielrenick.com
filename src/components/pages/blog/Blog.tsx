import React from 'react';
import CodeHighlighter from './CodeHighlighter';
import ParsePost from './ParsePost';
import Post from './Post';

interface ICodeStrings {
  startIndex: number;
  endIndex: number;
  isCode: boolean;
  stringStart?: number;
  stringEnd?: number;
}

const Blog = (ICodeStrings: any) => {
  let post = [];
  // let codeString =
  //     "Hi this is my test! \n\
  //     <CODE>import React from 'react';\n\
  // import SyntaxHighlighter from 'react-syntax-highlighter';\n\
  // import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';\n\
  // const Blog = (props: any) => {\n\
  //     return (\n\
  //     <div className='mainContainer container-fluid'>\n\
  //       <div className='col'>\n\
  //         <div className='row d-flex'>\n\
  //           <h1>Blog Will Go Here</h1>\n\
  //         </div>\n\
  //       </div>\n\
  //       <div className='col'>\n\
  //         <div className='row d-flex'>\n\
  //           <h2>Code Snipet Test</h2>\n\
  //         </div>\n\
  //         <div className='col'>\n\
  //           <div className='row d-flex justify-content-center'>\n\
  //             <SyntaxHighlighter language='jsx' code = {codeString}>\n\
  //             </SyntaxHighlighter>\n\
  //             <CodeHighlighter code={codeString} /> \n\
  //           </div>\n\
  //         </div>\n\
  //       </div>\n\
  //     </div>\n\
  //   );</CODE> \n\
  //   End of my Test :) ";

  let codeString =
    'LINE 1 \n\
<CODE> \n\
First Line of Code \n\
2nd Line \n\
</CODE> \n\
Restart Text \n\
<CODE> \n\
CODE #2 \n\
</CODE> \n\
Finished Code 2 \n\
<CODE> \n\
Third and final code block \n\
</CODE> \n\
TEXT ENDS HERE';

  // let codeStart = codeString.indexOf('<Code>') + 6;
  // let codeEnd = codeString.indexOf('</Code>');

  // post.push(new ICodeStrings());

  // console.log(codeString.length);
  // console.log(codeString.indexOf('<Code>', codeEnd));

  // let isFinished = false;
  // do {
  //   if (codeString.indexOf('<Code>', codeEnd) === -1) {
  //     console.log('Made it inside the block');
  //     post.push([codeEnd + 7, codeString.length]);
  //     isFinished = true;
  //   } else {
  //     console.log(codeString.indexOf('<Code>', codeEnd) === -1);
  //     isFinished = true;
  //   }
  //   console.log(codeString.indexOf('<Code>', codeEnd));
  // } while (!isFinished);

  // let Strings = [];

  // for (let i in post) {
  //   Strings.push(codeString.substring(post[i][0], post[i][1]));
  // }

  // console.log(Strings);

  // let CODE = codeString.substring(codeStart, codeEnd).substring(7);

  ParsePost(codeString);

  return (
    <div>
      <div className='col' style={{ marginTop: '50px' }}>
        <div className='row d-flex justify-content-center'>
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Blog;
