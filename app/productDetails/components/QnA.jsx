import React from 'react'

export default function QnA({ question, answer }) {
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

const questionStyles = {
    fontSize: "12px",
    color: "#333",
    fontWeight: "600",
}
