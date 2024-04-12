export default function LoginForm({usernameRef, passwordRef, handleSubmit}) {
  return (
    <>
      <h2>Login</h2>

      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
        <input type="text" name="email" ref={usernameRef} />
        <input type="password" name="password" ref={passwordRef} />
        <button type="submit">Login</button>
      </form>
      
    </>
  )
}
