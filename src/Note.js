import './Note.css';
const Note = ()=>{
    return (
        <div className="note">
            <h2 className="note-heading">Your Notes</h2>
            <div>
                <h3 className="note-topic">Topic goes here</h3>
                <article className="entry">NOTE GOES HERE</article>
            </div>
        </div>
    )
}
export default Note;