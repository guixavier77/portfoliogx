import React from 'react'

const Typewriter = (props: any) => {
  const [text, setText] = React.useState('')
  const [showCursor, setShowCursor] = React.useState(false)

  const writeOnScreen = (text: string, i = 0) => {
    if (i < text.length) {
      setShowCursor(true)

      setText(text.slice(0, i + 1))
      setTimeout(() => writeOnScreen(text, i + 1), 100)
    } else if (i >= text.length && props?.hideCursor) {
      setShowCursor(false)
    }
  }

  React.useEffect(() => {
    setTimeout(() => writeOnScreen(props.text), props?.delay ?? 200)
  }, [])

  return (
    <div>
      {text}
      {showCursor && (
        <span className="animate-animated-cursor text-xl t:text-2xl ml-1 font-medium">
          |
        </span>
      )}
    </div>
  )
}

export default Typewriter
