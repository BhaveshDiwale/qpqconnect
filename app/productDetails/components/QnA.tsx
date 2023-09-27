import React from 'react'

interface QnAProps {
    question: string;
    answer: string;
}

export default function QnA({ question, answer }: QnAProps) {
    return (
        <div className='mt-3'>
            <div style={questionStyles}>
                {question}
            </div>
            <div style={questionStyles}>
                {answer}
            </div>
        </div>
    )
}

const questionStyles: React.CSSProperties | undefined = {
    fontSize: "12px",
    color: "#333",
    fontWeight: "600",
}
