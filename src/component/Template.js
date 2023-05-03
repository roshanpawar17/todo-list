import React, { useState } from "react";
import '../css/template.css'

function Template(){

    const [value, setValue] = useState()
    const [note, setNote] = useState([])

    function inputValue(e){
        setValue(e.target.value)
    }

    function addNote(){
        setNote((oldNote)=>{
            return [...oldNote, value]
        })
        setValue("")
    }

    function deleteNote(id){
        setNote((oldNote)=>{
            return oldNote.filter((arrEle, index)=>{
                return index !== id
            })
        })
    }

    return (
        <>
            <div className="container">
                <h2 className="title">ToDO LIST</h2>
                <div className="input-box">
                    <input type="text" placeholder="Note" onChange={inputValue} value={value}/><br/>
                </div>
                <div className="input-box">
                    <button id="addNote" onClick={addNote}>Add Note</button>
                </div>
                <div className="list-notes">

                    {
                        note.map((item,i)=>{
                            return (
                                <div className="list-note" key={i}>
                                    <h3 className="note">{item}</h3>
                                    <button id="delete" onClick={()=>{deleteNote(i)}}>X</button>    
                                </div>
                            )
                        })
                    }
                                      
                </div>
            </div>
        </>
    )
}

export default Template;