import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./TextEditor.module.scss";

interface TextEditorProps {
  textEditorValue: string;
  setTextEditorValue: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({
  textEditorValue,
  setTextEditorValue,
}) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={textEditorValue}
        onChange={setTextEditorValue}
        className={styles.textEditorWrapper}
      />
    </div>
  );
};

export default TextEditor;
