'use client';
import React from 'react';
import styles from './CodeBlock.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const CodeBlock = ({ code, language = 'javascript' }) => {
    return (
        <>
            <div className={styles.CodeBlock}>
                <SyntaxHighlighter
                    language={language}
                    style={oneDark}
                    showLineNumbers
                    customStyle={{
                        background: 'transparent',
                        fontSize: '12px',
                        lineHeight: '1.5',
                        borderRadius: '5px',
                        padding: '5px',
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}

export default CodeBlock
