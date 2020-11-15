import React,{useState} from 'react'
import axios from 'axios'


const CreatePoll = () =>{
    let compTitle ="";
    let compEmail ="";
    let compRoom_code="";
    let compItem1={name:"",description:"",yay_userId:[],nay_userID:[]};
    let compItem2={name:"",description:"",yay_userId:[],nay_userID:[]};
    let compItem3={name:"",description:"",yay_userId:[],nay_userID:[]};
    let compItem4={name:"",description:"",yay_userId:[],nay_userID:[]};

    const [formData,setFormData] = useState({title:"Test",room_code:"TEST69",items:[{name:"TestNavn",description:"TestDescription",yay_userId:[1],nay_userID:[1]}]})

    const setTitle =(bonk)=> compTitle=bonk;
    const setEmail =(bonk)=> compEmail=bonk;
    const setRoom_code =(bonk)=> compRoom_code=bonk;
    const setItem1 =(bonk)=> {
        compItem1={
            name: bonk,
            description: "Temp",
            yay_userId:[1],
            nay_userId:[1]
        }
    }

    const setItem2 =(bonk)=> {
        compItem2={
            name: bonk,
            description: "Temp",
            yay_userId:[1],
            nay_userId:[1]
        }
    }
    const setItem3 =(bonk)=> {
        compItem3={
            name: bonk,
            description: "Temp",
            yay_userId:[1],
            nay_userId:[1]
        }
    }
    const setItem4 =(bonk)=> {
        compItem4={
            name: bonk,
            description: "Temp",
            yay_userId:[1],
            nay_userId:[1]
        }
    }
    const form = ()=> {
        let retur = {
            title: compTitle,
            room_code: compRoom_code,
            items: [compItem1,compItem2,compItem3,compItem4]
        }
        return retur;
    }
    

    const handleSubmit = async (event) => {
        setFormData(form)
        console.log(formData)

      const result =  await axios.post('http://localhost:5000/api/v1/polls/',formData).then(res => {
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
                    <label htmlFor="email">Epost</label>
                    <input onChange={(e) => { setEmail(e.target.value)}}  id="email" className="form-control" type="text" placeholder="example@example.no" pattern='[^\S+@\S+$]'/>
                
                </div>
                <div className="form-row">
                    <label htmlFor="roomcode">Rom kode</label>
                    <input onChange={(e) => { setRoom_code(e.target.value)}} id="roomcode" className="form-control" type="text"/>
                </div>
                <div className="form-row">
                    <label htmlFor="question1">Spørsmål 1</label>
                    <input onChange={(e) => { setItem1(e.target.value)}} id="question1"  className="form-control" type="text"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password">Spørsmål 2</label>
                    <input onChange={(e) => { setItem2(e.target.value)}} id="password" className="form-control"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password2">Spørsmål 3</label>
                    <input onChange={(e) => { setItem3(e.target.value)}} id="password2" className="form-control"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password3">Spørsmål 4</label>
                    <input onChange={(e) => { setItem4(e.target.value)}} id="password3" className="form-control"/>
                </div>
                <button onClick={(e) => handleSubmit()} className="btn btn-primary" type="submit" >Lag poll</button>
            </form>
        </div>
        )
}

export default CreatePoll;