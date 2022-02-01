const Start = ({setView}:{setView:any}) => {
  return (
    <div>
      <h1>What do you want to do?</h1>
      <button onClick={() => { setView({'view': 'JoinGame', 'data': {}})}}>join</button>
      <button onClick={() => { setView({'view': 'CreateGame', 'data': {}})}}>create</button>
    </div>
  )
}
export default Start;