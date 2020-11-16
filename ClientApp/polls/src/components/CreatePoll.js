import React,{useState} from 'react'
import axios from 'axios'


const CreatePoll = () =>{
    let compTitle ="";
    let compRoom_code="";
    let compQuestion="";


    const [formData,setFormData] = useState({})
    

    const setTitle =(bonk)=> compTitle=bonk;
    const setRoom_code =(bonk)=> {
        compRoom_code=bonk;
        console.log(bonk)
    }
    const setQuestion =(bonk)=> {
        compQuestion = bonk
    }

    const handleSubmit = async (event) => {
      let variable={
          title:compTitle,
          room_code:compRoom_code,
          question:compQuestion,
          answeredYesBy:[],
          answeredNoBy:[]
        }
    
        console.log(variable)
            const result =  await axios.post('http://localhost:5000/api/v1/polls/',variable).then(res => {
            console.log(res);
            console.log(res.data);
        })
       };



    return(
        <div className="col-sm-1 mx-auto">
            <form className=" col-sm-1 needs-validation" noValidate>
            <h1>Lag en poll</h1>
                <div className="form-row">
                    <label htmlFor="email">Titel</label>
                    <input onChange={(e) => { setTitle(e.target.value)}}  id="titel" className="form-control" type="text" placeholder="example@example.no" pattern='[^\S+@\S+$]'/>
                
                </div>

                <div className="form-row">
                    <label htmlFor="roomcode">Rom kode</label>
                    <input onChange={(e) => { setRoom_code(e.target.value)}} id="roomcode" className="form-control" type="text"/>
                </div>
                <div className="form-row">
                    <label htmlFor="question1">Hva vil du avklare med dine medmennesker? (ingen garanti for at roboter kan forflaske resultatene)</label>
                    <input onChange={(e) => { setQuestion(e.target.value)}} id="question1"  className="form-control" type="text"/>
                </div>
                <button onClick={(e) => handleSubmit()} className="btn btn-primary" type="submit" >Lag poll</button>
            </form>
        </div>
        )
}

export default CreatePoll;