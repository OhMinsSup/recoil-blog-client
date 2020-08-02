import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { HelmetData } from 'react-helmet-async';

export type HtmlProps = {
  content: string;
  styledElement: React.ReactNode; // styled-components
  extractor: ChunkExtractor;
  helmet: HelmetData;
};

function Html({ content, styledElement, extractor, helmet }: HtmlProps) {
  return (
    <html lang="en">
      <head>
        {helmet.title.toComponent()}
        {helmet.link.toComponent()}
        {helmet.meta.toComponent()}
        {styledElement}
        {extractor.getLinkElements()}
        {extractor.getStyleElements()}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }}></div>
        {extractor.getScriptElements()}
      </body>
    </html>
  );
}

export default Html;
