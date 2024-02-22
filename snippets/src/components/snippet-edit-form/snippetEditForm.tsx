'use client';

import React, { useState } from 'react'
import { Snippet } from '@prisma/client'
import { Editor } from '@monaco-editor/react';

import * as actions from '@/actions'
import { redirect } from 'next/navigation';

interface SnippetEditFormProps {
    snippet: Snippet
}
const SnippetEditForm = (snippetProps: SnippetEditFormProps) => {
    const { snippet } = snippetProps;
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = '') => {
        setCode(value);
    };

    const editSnippetActions = actions.updateSnippetCode.bind(null, snippet?.id, code);

    return (
        <div className='h-screen'>
            <div className='text-4xl h-[5%]'>{snippet.title}</div>
            <div >
                <Editor
                    height="40vh"
                    theme="vs-dark"
                    language="javascript"
                    defaultValue={snippet?.code}
                    options={{ minimap: { enabled: false } }}
                    onChange={handleEditorChange}
                    className='border-4 rounded-lg my-4'
                />
                <form action={editSnippetActions}>
                    <button className='border-2 px-4 py-2 rounded-lg my-2 mr-1' type='submit'>Save</button>
                    <button onClick={() => redirect(`/snippets/${snippet.id}`)} className='border-2 px-4 py-2 rounded-lg my-2 ml-1' type='submit'>Back</button>
                </form>
            </div>
        </div>
    );
}

export default SnippetEditForm