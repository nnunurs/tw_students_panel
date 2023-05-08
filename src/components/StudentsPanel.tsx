import React, { useState } from 'react'
import StudentElement from './Student'
import "./StudentsPanel.css"

export type Student = {
    name: string
    surname: string
    grades: Array<number>
}

export default function StudentsPanel() {
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [grades, setGrades] = useState<string>("")

    const [students, setStudents] = useState<Array<Student>>([])

    function Submit() {
        setStudents([...students, { name: name, surname: surname, grades: grades.split(",").map(Number) } as Student])
    }

    return (
        <div className="panel__wrapper">
            <div className='main-panel'>
                <div className='panel panel__add'>
                    <h1>Add student</h1>
                    <input type="text" name="name" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}></input>
                    <input type="text" name="name" placeholder='Surname' onChange={(e) => setSurname(e.target.value)} value={surname}></input>
                    <input type="text" name="grades" placeholder='Grades (comma separated)' onChange={(e) => setGrades(e.target.value)} value={grades}></input>
                    <button className='panel__submit-button' onClick={Submit}>Add</button>
                </div>
                <div className="panel panel__list">
                    <h1>Students</h1>
                    <ul className='panel__list-ul'>
                        {students.map((student: Student, index: number) => <li><StudentElement student={student} key={index} /></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
