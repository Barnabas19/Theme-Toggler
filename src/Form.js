import {React, useState} from 'react';
import './Form.css';

const Form = ()=>{
    const [topic, setTopic] = useState("Topic");
    const [content, setContent] = useState("Content");
    const changeTopicState = (event)=>{
        setTopic(event.target.value);
    }
    const changeContentState = (event)=>{
        setContent(event.target.value);
    }

    return (
        <div className="container">
            <form>
                <label htmlFor="topic" id="topic-label">
                    <span className="label">Topic</span>
                    <input id="topic" type="text" value={topic} onChange={changeTopicState} />
                </label>
                <label htmlFor="content" id="content-label">
                    <span className="label">Content</span>
                    <textarea id="content" type="text" value={content} onChange={changeContentState} />
                </label>
            </form>
            <button id="button">Submit</button>
        </div>
    )
}
export default Form;