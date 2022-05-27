import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";
import * as yup from "yup"
function App() {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    gender:"",
    termsAndCondition:false,
    transportMode:""
  };

  const validationSchema=yup.object().shape({
  name:yup.string().required("enter the string only"),
  email:yup.string().required("pls enter the email").email("pls enter the valid email"),
  password:yup.string().required("pls enter the password"),
  gender:yup.string().required("please select the gender"),
  termsAndCondition:yup.boolean().oneOf([true],"please accept the terms n condition"),
  transportMode:yup.string().required("please select the transport mode")


    })


  const handleSubmit=(value)=>{
    console.log("values",value);
  }



  return (
    <div className="container">
      <div className="col-md-12 text-center  mt-3">
        <h1> FORM VALIDATION</h1>
        <Formik initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
          <Form>
            <div className="col-md-12">
              
              <Field type="text" placeholder="enter the name" name="name" className="form-control mt-3" autoComplete="off"/>
              <p className="text-danger">
                <ErrorMessage name="name"/>
              </p>
            </div>
            <div className="col-md-12">
              
              <Field type="email" placeholder="enter the email" name="email" className="form-control mt-3" autoComplete="off"/>
              <p className="text-danger">
                <ErrorMessage name="email"/>
              </p>
            </div>
            <div className="col-md-12">
              
              <Field
                type="password"
                placeholder="enter the password"
                name="password"
              className="form-control mt-3" autoComplete="off"/>
              <p className="text-danger">
                <ErrorMessage name="password"/>
              </p>
            </div>
            <div className="col-md-12 mt-3">
              <Field component="select" name="gender" placeholder="please select gender" className="form-select">
              <option value="" disabled>Please Select</option> 
              <option value="male">Male</option>
              <option value="female">Female</option>   
            </Field>
              <p className="text-danger">
                <ErrorMessage name="gender"/>
              </p>
              </div>
              <div className="col-md-12 mt-3">
                <label >
                  <Field type="checkbox" name="termsAndCondition"></Field>
                  I accept terms n condition
                </label>
                <p className="text-danger">
                <ErrorMessage name="termsAndCondition"/>
              </p>
              </div>
              <div className="col-md-12">
                <label className="form-inline ">
                  <Field type="radio" name="transportMode" value="bike"></Field>
                  Bike
                </label>
                <label className="form-inline ">
                  <Field type="radio" name="transportMode" value="car"></Field>
                 Car
                </label>
                <p className="text-danger">
                <ErrorMessage name="transportMode"/>
              </p>
              </div>


            <div className="d-grid gap-2">
              <button className="btn btn-primary " type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
