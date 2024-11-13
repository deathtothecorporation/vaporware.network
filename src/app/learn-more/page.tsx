import React from "react";
import fs from 'fs';
import path from 'path';

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function LearnMore() {

  const filePath = path.join(process.cwd(), 'src', 'app', 'learn-more', 'content.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div>
      <main className="content-zone">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </main>
    </div>
  );
}
