import './App.css';
import {Formik} from 'formik';
// import {useFormik} from 'formik'
import * as Yup from 'yup';


// const validate = values =>{
//   const errors = {};
//   if(!values.firstName){
//     errors.firstName='Required';
//   }else if(values.firstName.length>15){
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if(!values.lastName){
//     errors.lastName = 'Required';
//   }else if(values.lastName.length>20){
//     errors.lastName = "Must be 20 character or less";
//   }

//   if(!values.email){
//     errors.email = 'Required';
//   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//     errors.email = 'Invalid email address'     
//   }

//   return errors;
// };

function App() {


  
  return (
    <>


<Formik
    initialValues={{
      firstName:'',
      lastName:'',
      email:''
    }}
    validationSchema={Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      lastName: Yup.string()
      .max(20, 'Must be 20 character or less')
      .required('required'),
      email:Yup.string().email('Invalid email address').required('Required'),
    })}
    onSubmit={
      (values,{setSubmitting})=>{
        setTimeout(()=>{
          alert(JSON.stringify(values,null,2));
          setSubmitting(false)
        },400)
      }
    }
  >
    {formik=>(
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">firstName</label>
            <input
              id="firstName"
              type="text"
              
              {...formik.getFieldProps('firstName')}

            />
           {formik.touched.firstName && formik.errors.firstName? (<div>{formik.errors.firstName}</div>): null}
    
            <label htmlFor='lastName'>lastName</label>
            <input
              id="lastName"
              type="text"
              {...formik.getFieldProps('lastName')}
              // type="text"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName? <div>{formik.errors.lastName}</div>:null} 
    
          
            <label htmlFor='email'>Email Address</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email &&formik.errors.email?<div>{formik.errors.email}</div>:null}
            <button type="submit">Submit</button>
          </form> 
    )}
  </Formik>

    </>
  );
}

export default App;
