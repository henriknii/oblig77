import React,{useState} from 'react'
import axios from 'axios'


const CreatePoll = () =>{
    
    const [poll,setPoll] = useState([])
    const [formData,setFormData] = useState({title:"",roomcode:"",items:[{name:"",description:"",yay_userId:[],nay_userID:[]}]})

    const handleSubmit = async (event) => {
        event.preventDefault();

        setPoll({formData})
        console.log(poll)

      const result =  await axios.post('http://localhost:5000/api/v1/polls',{poll}).then(res => {
            console.log(res);
            console.log(res.data);
        })
       };

     
       

    


    const updateValue = (event) => {
        const value = event.target.value;
        setFormData({...formData,
        [event.target.name]:value})
            
       
       
    };


    return(
        <div className="col-sm-1 mx-auto">
            <form className=" col-sm-1 needs-validation" onSubmit={handleSubmit} noValidate>
            <h1>Lag en poll</h1>
                <div className="form-row">
                    <label htmlFor="email">Epost</label>
                    <input id="email" className="form-control" type="text" placeholder="example@example.no" pattern='[^\S+@\S+$]'/>
                
                </div>
                <div className="form-row">
                    <label htmlFor="roomcode">Rom kode</label>
                    <input id="roomcode" value={formData.roomcode}  onChange={updateValue} className="form-control" type="text"/>
                </div>
                <div className="form-row">
                    <label htmlFor="question1">Spørsmål 1</label>
                    <input id="question1"   className="form-control" type="text"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password">Spørsmål 2</label>
                    <input id="password" className="form-control"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password">Spørsmål 3</label>
                    <input id="password" className="form-control"/>
                </div>
                <div className="form-row mb-3">
                    <label htmlFor="password">Spørsmål 4</label>
                    <input id="password" className="form-control"/>
                </div>
                <button className="btn btn-primary" type="submit" >Lag poll</button>
            </form>
        </div>
        )
}

export default CreatePoll;