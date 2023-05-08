import React from 'react'
import { Student } from './StudentsPanel'

type StudentProps = {
    student: Student
}

export default function StudentElement(props: StudentProps) {
    const grades_bg: Array<string> = ["red", "orange", "yellow", "green", "dark-green"]

    return (
        <div className='student'>
            <h3>{props.student.name} {props.student.surname}</h3>
            <div className="student__grades">
                {props.student.grades.map((grade: number) => <div className={`student__grade ${grades_bg[grade - 1]}`}>{grade}</div>)}
                <p>Avg. {props.student.grades.reduce((part: number, n: number) => part + n, 0) / props.student.grades.length}</p>
            </div>
        </div>
    )
}
