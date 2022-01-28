import React from "react"


const Header = ({ name }) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

const TotalExcercises = ({ parts }) => {
    const excercises = parts.map(part => part.exercises)
    const total = excercises.reduce((previousValue, currentValue) => previousValue + currentValue)

    return (
        <div>
            <p>
                <b>total of {total} exercises</b>
            </p>
        </div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <TotalExcercises parts={course.parts} />
        </div>
    )
}

export default Course