import MDEditor from "@uiw/react-md-editor"
import styled from "styled-components"

const MarkDownEditor = styled(MDEditor)`
    width: 1092px;

    min-height: 860px;

    background: none;

    .w-md-editor-toolbar {
        padding-left: 50px;
        padding-right: 50px;
        background: ${p => p.theme.colors.gray800};
        min-height: 56px;
        border-radius: 8px;
        border: none;
        decoration: none;
        margin-bottom: 32px;
    }

    .w-md-editor-toolbar ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .w-md-editor-toolbar li > button > svg {
        color: ${p => p.theme.colors.gray100};
        width: 12.89px;
        height: 16.73px;
    }
    .w-md-editor-toolbar li > button:hover {
        background: ${p => p.theme.colors.assetPrimary};
        width: 25px;
        height: 32px;
    }

    textarea.w-md-editor-text-input {
    }
    .w-md-editor-input {
        color: white !important;
        padding-top: 24px;
        padding-left: 24px;
        width: 100%;
    }
    .w-md-editor-text-pre,
    .w-md-editor-text-input {
        color: white;
    }
    .w-md-editor-preview {
        display: none;
    }
    .w-md-editor-toolbar-divider {
        display: none;
    }

    .w-md-editor-toolbar ul:nth-child(2) {
        display: none;
    }
    .w-md-editor-toolbar ul li:nth-child(1) {
        display: none;
    }
    .w-md-editor-text * {
        color: white !important;
    }
    .w-md-editor-content {
        background: none;
        border: 2px solid #222225;
        border-radius: 8px;
        min-height: 800px;
        width: 100%;
        color: white !important;
    }
`
export default MarkDownEditor
