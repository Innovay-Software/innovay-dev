'use client'
import React from 'react'
import { useState, useEffect } from 'react'

const useTypewriter = (words: Array<string>, speed = 50) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < words[0].length) {
        setDisplayText((prevText) => prevText + words[0].charAt(i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, speed)

    return () => {
      clearInterval(typingInterval)
    }
  }, [words[0], speed])

  return displayText
}

const Typewriter = (props: {
  classNames: Array<string>
  words: Array<string>
  speed: number
}) => {
  const displayText = useTypewriter(props.words, props.speed)

  return <p className={props.classNames.join(' ')}>{displayText}</p>
}

export default Typewriter
