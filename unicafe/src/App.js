import React, {useState} from 'react'


const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({ name, value }) => {
  return (
    <tr>
      <td>
        {name} {value}
      </td>
    </tr>
  )
}

const Statistics = ({ feedback }) => {
  const average = (feedback.good * 1 + feedback.bad * -1) / feedback.all
  const positive = (feedback.good / feedback.all) * 100 + ' %'

  if (feedback.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticsLine name='good' value={feedback.good} />
        <StatisticsLine name='neutral' value={feedback.neutral} />
        <StatisticsLine name='bad' value={feedback.bad} />
        <StatisticsLine name='average' value={average} />
        <StatisticsLine name='positive' value={positive} />
      </tbody>
    </table>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  })

  const handleGoodFeedback = () => {
    const newFeedback = {
      ...feedback,
      good: feedback.good + 1,
      all: feedback.all + 1
    }
    setFeedback(newFeedback)
  }

  const handleNeutralFeedback = () => {
    const newFeedback = {
      ...feedback,
      neutral: feedback.neutral + 1,
      all: feedback.all + 1
    }
    setFeedback(newFeedback)
  }

  const handleBadFeedback = () => {
    const newFeedback = {
      ...feedback,
      bad: feedback.bad + 1,
      all: feedback.all + 1
    }
    setFeedback(newFeedback)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodFeedback} text='good' />
        <Button handleClick={handleNeutralFeedback} text='neutral' />
        <Button handleClick={handleBadFeedback} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics feedback={feedback} />
      </div>
    </div>
  )
}

export default App;
