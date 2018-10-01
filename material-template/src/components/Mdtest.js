import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class ReactMarkdownExample extends Component {
  render() {
    const input = '# this is a header\n\nAnd this is a paragraph'


    return(
      <ReactMarkdown source={input} />
    )
  }
}


export default ReactMarkdownExample
