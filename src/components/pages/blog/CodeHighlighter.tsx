import React from 'react';
import { get } from 'lodash';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeHighlighter = (props: any) => {
  let code = get(props, 'code', '');

  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      language='javascript'
      style={monokai}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeHighlighter;
