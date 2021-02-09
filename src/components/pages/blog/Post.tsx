import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import CodeHighlighter from './CodeHighlighter';
import ParsePost from './ParsePost';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { get as GET } from '../../../utils/httpMethods';

// interface ICodeStrings {
//   startIndex: number;
//   endIndex: number;
//   isCode: boolean;
//   stringStart?: number;
//   stringEnd?: number;
// }

const Post = (props: any) => {
  let [rawText, setRawText] = useState('');
  let text = [{ string: '', isCode: false }];
  let title = get(props, 'title', 'Title');
  let [dark, setDark] = useState(false);
  let language = 'jsx';
  const { currentTheme } = useThemeSwitcher();

  console.log(props);

  useEffect(() => {
    //Handle style change
    switchTheme();
  }, [currentTheme]);

  useEffect(() => {
    //Get post text
    getTextById();
  }, []);

  const getTextById = async () => {
    console.log(props);
    let _id = props.match.params.postId;
    let data = await GET({ url: '/post/' + _id });
    console.log(data);
    setRawText(data.text);
  };

  const switchTheme = () => {
    switch (currentTheme) {
      case 'default':
      case 'light':
      case 'breeze':
        setDark(false);
        break;
      case 'dracula':
      case 'dark':
      case 'nord':
      case 'monokai':
        setDark(true);
        break;
      default:
        break;
    }
  };

  let codeString =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \n\
<CODE>First Line of Code \n\
2nd Line</CODE> \n\
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? \n\
<CODE>import React from 'react';\n\
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
            <SyntaxHighlighter language='jsx' code = {codeString}>\n\
            </SyntaxHighlighter>\n\
            <CodeHighlighter code={codeString} /> \n\
          </div>\n\
        </div>\n\
      </div>\n\
    </div>\n\
  );</CODE> \n\
  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. \n\
<CODE>Third and final code block</CODE> \n\
I LOVE SASHA!";

  text = ParsePost(rawText);

  return (
    <div
      className='mainContainer container-fluid'
      style={{ marginTop: '50px' }}
    >
      <div
        className='col'
        style={{
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          backgroundColor: dark ? '#36373a' : 'white',
          minWidth: '90%',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div className='row d-flex justify-content-center'>
          <h1>{title}</h1>
        </div>
        {text.map((el: any) => (
          <div className='row d-flex justify-content-center'>
            {el.isCode ? (
              <div style={{ minWidth: '75%', maxWidth: '75%' }}>
                <CodeHighlighter code={el.string} language={language} />
              </div>
            ) : (
              <p
                style={{
                  minWidth: '80%',
                  maxWidth: '80%',
                  justifyContent: 'left',
                  textAlign: 'left',
                  fontSize: '18px',
                }}
              >
                {el.string}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
