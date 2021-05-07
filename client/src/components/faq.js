import React, {useState} from 'react';

import "../styles/faq.css";

const FAQ = () => {
    const [questions, setQuestions] = useState([
        {
            question: "What is a hackathon?",
            response: "Hackathons are often described as a hybrid between a career fair and a science fair. A creative community of programmers - from novices to experienced - come together for 36 hours to make amazing projects. The projects are then judged by tech professionals from the industry and from academia.",
            showResponse: false
        },
        {
            question: "When and where will SB Hacks VII take place?",
            response: "SB Hacks VII will start on Friday, January 15, 2021, and conclude on Sunday, January 17, 2021. We are going virtual this year and will be using Hopin as our main event platform and Discord for communications.",
            showResponse: false
        },
        {
            question: "When will acceptances come out?",
            response: "We plan on releasing acceptances in late December so keep an eye out.",
            showResponse: false
        },
        {
            question: "Who can attend?",
            response: "SB Hacks is accepting college students, graduate / PhD students, and high school students who are 18 or older. No matter where you are from or what you are studying, you are welcome at SB Hacks!",
            showResponse: false
        },
        {
            question: "What can I win?",
            response: "We have a lot of great prizes ready for this year. Think gadgets and cool techs. More details on prizes are in the works and will be announced shortly before the event!",
            showResponse: false
        },
        {
            question: "Can I compete in a team?",
            response: "Yes, the maximum is 4 people per team. If you do not enter with a team but would like to be in one, no worries! We are planning a team mixer before the event plus a team formation activity will also take place at the start of the hackathon.",
            showResponse: false
        }
    ]);

    const toggleQ = (index) => {
        console.log(index);
        let newQuestions = questions;
        newQuestions[index].showResponse = !questions[index].showResponse;
        setQuestions([...newQuestions]);    // spread it into a new array, so react recognizes it as different
    }

    return (
        <div className="faqTotal">
            <div className="miniTitle faqTitle">FAQ</div>
            <div className="faqContainer">
            {questions.map((question, index) => {
                return <div className="faqMiniBox">
                    <div className="question">{question.question} <div className="toggleBtn" onClick={() => {toggleQ(index)}}>{question.showResponse ? '\u2795' : '\u2796'}</div></div>
                    {question.showResponse && <div className="response">{question.response}</div>}
                </div>
            })}
            </div>
        </div>
    )
}

export default FAQ;