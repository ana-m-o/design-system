import React from "react";
import { useParameter } from "@storybook/api";
import {  DocsContent, DocsPageWrapper } from "@storybook/components";

export const Tab = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const uxDocs = useParameter('uxDocs', null);
  const generateIdFromTitle = (title) => {
    const docsStoryId = `${String(title.split(' ').join('-').split('/').join('-')).toLowerCase()}--page`
    // Ex: 'iframe.html?id=ux-patterns-emptyview--page&viewMode=docs'
    const uxDocsURL = `iframe.html?id=${docsStoryId}&viewMode=docs`
    return uxDocsURL
  }
  const uxDocsSrc = (uxDocs && uxDocs.title) ? generateIdFromTitle(uxDocs.title) : null

  return (active && uxDocsSrc) ? 
    <DocsContent style={{"width": "100%", "height": "100%", "max-width": "100%"}}>
      <iframe style={{"width": "100%", "height": "100%", "border": "none"}} src={uxDocsSrc}></iframe>
    </DocsContent>
    : 
    <DocsPageWrapper>
      <p>Sorry, the Ussage tab is not available for this page. </p>
      <p>Please switch to <b>Canvas</b> or <b>Docs</b> tab</p>
    </DocsPageWrapper>;
};
