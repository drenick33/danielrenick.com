import React from 'react';
import { get } from 'lodash';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

const CodeHighlighter = (props: any) => {
  let code = get(props, 'code', '');
  let language = get(props, 'language', 'jsx'); //Get this as a prop later

  const copyCodeToClipboard = () => {
    try {
      navigator.clipboard.writeText(code);
      message.success('Code Copied', 1);
    } catch {
      message.error('Unable to copy Code', 1);
    }
  };

  return (
    <div className='container' style={{ position: 'relative' }}>
      <Button
        onClick={copyCodeToClipboard}
        type='default'
        style={{ position: 'absolute', right: '10%', bottom: '3%' }}
      >
        <CopyOutlined />
      </Button>
      <SyntaxHighlighter
        showLineNumbers={true}
        language={language}
        style={monokai}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlighter;
