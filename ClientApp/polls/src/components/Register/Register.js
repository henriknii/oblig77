import React, { useEffect ,useState} from "react"


const Register = () => {

    useEffect(() => {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        event.target.className = "was-validated"
      }, false);
    });
},[])
    

    return(
    <div className="col-sm-1 mx-auto">
        <form className=" col-sm-1 needs-validation" noValidate>
        <h1>Registrer</h1>
            <div className="form-row">
                <label htmlFor="email">Epost</label>
                <input id="email" className="form-control" type="text" placeholder="example@example.no" pattern='[^\S+@\S+$]'/>
                <div className="invalid-feedback">
                    Vennligst oppgi gyldig E-post
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="password">Passord</label>
                <input id="password" className="form-control" type="password" placeholder="*****" pattern='[^\S+@\S+$]'/>
            </div>
            <div className="form-row mb-3">
                <label htmlFor="password">Gjenta Passord</label>
                <input id="password" className="form-control" type="password" placeholder="*****" pattern='[^\S+@\S+$]'/>
            </div>
            <button className="btn btn-primary" type="submit" >Registrer</button>
        </form>
    </div>
    )
}


export default Register