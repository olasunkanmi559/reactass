import React from 'react'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'
import Place from './Place'
import './App.css'

const list = () => {
    let details = [
        {
            photo: p1,
            capital: "Abuja",
            course: "Frontend",
            age: 34,
            class: "100 level",
            speech: "Build strong Relationships. Building relationships with peers, teachers, and mentors can enrich your academic experience. Participate in group studies, join ..."
        },
        {
            photo: p2,
            capital: "Lagos",
            course: "App development",
            age: 24,
            class: "600 level",
            speech: "Extracurricular activities are a big part of what defines many students' experiences on campus. It's not only the friends and memories you make, but these ..."
        },
        {
            photo: p3,
            capital: "Ibadan",
            course: "UI/UX",
            age: 30,
            class: "200 level",
            speech: "Look after your health and pace yourself. Current students' advice to incoming students relates to having realistic expectations about what you can manage and ..."
        },
        {
            photo: p4,
            capital: "Abeokuta",
            course: "Graphics design",
            age: 29,
            class: "300 level",
            speech: "Time management is crucial for balancing schoolwork, extracurricular activities, and personal life. Use tools like planners or digital calendars to schedule ..."
        },
        {
            photo: p5,
            capital: "Ikeja",
            course: "Computer science",
            age: 34,
            class: "400 level",
            speech: "Stay Organized. You can organize your study plan by identifying your goals and objectives, and writing them down. This way, you can avoid procrastinating ..."
        }
    ]

    return (
        <div>

            <div className='olasunkanmi'>
                {
                    details.map((eachperson, i) => (
                        <Place
                            key={i}
                            photo={eachperson.photo}
                            course={eachperson.course}
                            capital={eachperson.capital}
                            age={eachperson.age}
                            class={eachperson.class}
                            speech={eachperson.speech}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default list
