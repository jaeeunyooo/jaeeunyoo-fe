import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import Prism from 'prismjs';
import { Editor } from '@toast-ui/react-editor';
import chartPlugin from "@toast-ui/editor-plugin-chart";
import umlPlugin from "@toast-ui/editor-plugin-uml";
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
import React, {useEffect} from 'react';

export  default class Edit extends React.Component{
  editorRef = React.createRef();
  handleClick = (() => {
    let instance = this.editorRef.current.getInstance();
    console.log(instance.getHTML());
  });

  render() {

    return (
      <>
        <Editor
          previewStyle="vertical"
          height="1000px"
          initialEditType="markdown"
          useCommandShortcut={false}
          usageStatistics={false}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          // [chartPlugin, umlPlugin, [codeSyntaxHighlightPlugin, {highlighter: Prism}]]}
          ref={this.editorRef}
        />
        <button onClick={this.handleClick}>발행</button>
      </>
    );
  }
}