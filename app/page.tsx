import fs from 'fs';
import path from 'path';
import style from './pageCustom.module.css';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
  const filePath = path.join(process.cwd(), 'app/page.tsx');
  const myself = fs.readFileSync(filePath, 'utf-8');
  const renderResults = () =>{
    let contents = [];
    return(
      contents.map((element)=>{
        return <p>{element}</p>
      })
    )
  }
  return (
    <div className={style.container}>
      <div className={style.results}>
        {renderResults()}
      </div>
      <SyntaxHighlighter language="javascript" style={tomorrowNightEighties}>
        {myself}
      </SyntaxHighlighter>
    </div>
  );
}
