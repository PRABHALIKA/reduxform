import React from 'react'
const reduxFormText= ({input,type,name,l,meta:{touched,error}})=>{
   return <div class="row form-group">
            <div className="col-sm-5 text-right">
               <label>{l}:</label>
            </div>
            <div className="col-sm-3">
            <input {...input} type={type} name={name} className="form-control" />
            </div>
            <div className="col-sm-4">
              {
                touched && error && <span className="text-danger">{error}</span>
              }
            </div>
          </div>
}

export default reduxFormText;