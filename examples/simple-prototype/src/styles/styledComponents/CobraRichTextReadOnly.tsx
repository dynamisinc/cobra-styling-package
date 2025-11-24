import Highlight from "@tiptap/extension-highlight";
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color'
import { FontFamily } from "@tiptap/extension-font-family";
import { FontSize, RichTextReadOnly, TableImproved } from 'mui-tiptap';

export const CobraRichTextReadOnly = (props) => {
  const { height, value } = props;
  return (
  <div style={{ overflow: 'auto', maxHeight: height }}>
    <RichTextReadOnly 
      content={value || ""}
      editorProps={{
        attributes: {
          style: 'overflow: visible; height: auto;'
        }
      }}
      extensions={[Color, FontFamily, FontSize, Highlight.configure({ multicolor: true }), StarterKit, 
        Subscript.extend({ excludes: 'superscript' }), Superscript.extend({ excludes: 'subscript' }), 
        TableCell, TableHeader, TableImproved.configure({ resizable: true }), TableRow, TaskItem, TaskList, 
        TextAlign.configure({ types: ['heading','paragraph']}), TextStyle, Underline]} />
  </div>
  );
}
