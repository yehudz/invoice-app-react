function App(): JSX.Element {
  function test(): void {}
  test()
  return (
    <main 
      className="
        bg-light 
        dark:bg-dark
        h-screen
        w-screen
      "
    >
    </main>
  )
}

export default App
