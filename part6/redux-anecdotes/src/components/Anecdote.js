const Anecdote = ({ anecdote, onVote }) => {
  return (
    <>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => onVote(anecdote.id, anecdote.content)}>vote</button>
      </div>
    </>
  )
}

export default Anecdote;
