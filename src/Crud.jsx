import React, { useState } from 'react'
import Jobs from './Jobs.json'
import './App.css'

const Crud = () => {

    const handleNewName = () => {
        setNewList([...newlist, newName])
        setNewName("")
    }
    const listofNames = ["ola", "sunkanmi", "james", "khalid", "malik", "waris", "victor"]
    const [text, setText] = useState("")

    const [newlist, setNewList] = useState(listofNames)
    const [newName, setNewName] = useState("")

    const [job, setJob] = useState(Jobs)
    const [adds, setAdds] = useState({
        type: "",
        title: "",
        description: "",
        salary: "",
        location: ""
    })
    const addjobs = () => {
        setJob([...job, adds])
        setAdds({
            type: "",
            title: "",
            description: "",
            salary: "",
            location: ""
        })
    }
    
    const deletemenu = (index) => {
        const newlistafterdel = newlist.filter((item, kilo) =>
            kilo !== index)
        setNewList(newlistafterdel)
    }
    const deletejobs = (inter) => {
        const newdel = job.filter((item, kg) =>
            kg !== inter)
        setJob(newdel)
    }
    const editjobs =(index) =>{
        const afteredit = job.map((current, sm)=>(
            sm === index ? {...current, ...adds} : current
        ))
        setJob(afteredit)
        setAdds({
            type: "",
            title: "",
            description: "",
            salary: "",
            location: ""
        })
    }

    return (
        <div>
            <p> {text} </p>
            <ol className='ol'>
                {job.map((eachdel, kemi) => (
                    <li key={kemi} className='li'>
                        <p className='sec'>
                            {eachdel.type} <br /> <br /> 
                        </p>
                        Job title: {eachdel.title} <br /><br />
                        Job description: {eachdel.description} <br /><br />
                        Job salary: {eachdel.salary} <br /><br />
                        Job location: {eachdel.location} <br /><br />
                        <button onClick={() => deletejobs(kemi)} className='buttsss'>Delete Job</button>
                        <button onClick={() => editjobs(kemi)} className='buttsss'>Edit Job</button>
                    </li>
                ))}
            </ol>
            <label> Type</label> <br />
            <input type="text" value={adds.type} onChange={(ppp) => setAdds({...adds,  type: ppp.target.value})}/> <br /> <br />
            <label> Title</label> <br />
            <input type="text" value={adds.title} onChange={(ppp) => setAdds({...adds,  title: ppp.target.value})}/> <br /> <br />
            <label> Description</label> <br />
            <input type="text" value={adds.description} onChange={(ppp) => setAdds({...adds,  description: ppp.target.value})}/> <br /> <br />
            <label> Salary</label> <br />
            <input type="text" value={adds.salary} onChange={(ppp) => setAdds({...adds,  salary: ppp.target.value})}/> <br /> <br />
            <label> Location</label> <br />
            <input type="text" value={adds.location} onChange={(ppp) => setAdds({...adds,  location: ppp.target.value})}/> <br /> <br />

                <button onClick={addjobs}>
                    ADD JOBS
                </button>
        </div>
    )
}

export default Crud
