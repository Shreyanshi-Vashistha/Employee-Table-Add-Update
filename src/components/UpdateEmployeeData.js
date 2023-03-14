import Axios from 'axios'
import React, { useState } from 'react'
import GetEmployeeData from './getEmployeeData'

function UpdateEmployeeData() {
    const [initialValues, setInitialValue] = useState({
        id: '',
        Emp_Designation: '',
        Emp_Salary: '',
        Emp_Department:''
    })

    //3rd step - initial values gets updated with the ones entered in the form
    const newValues = event => {
        const target = event.target;
        const name = target.name;
        let obj = {
            [name]: target.value
        };
        setInitialValue(prevobj => ({
            ...prevobj,
            ...obj
        }))
    }

    //5th step - update the api data with the values entered in the form 
    const mySubmit = () => {
        let id = Number(initialValues.id)
        console.log(id)
        Axios.patch(`http://localhost:4567/employee/${id}`, {
            "Emp_Designation": initialValues.Emp_Designation,
            "Emp_Salary": initialValues.Emp_Salary,
            "Emp_Department": initialValues.Emp_Department
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    //1st step - enter data in a webform
    //2nd step - onchange method is called
    //4th step - button is clicked
    return (
        <div className='container'>
            <div className='text-center'>
                <h3> Employee Updation Form </h3>
            </div>
            <GetEmployeeData />
            
            <form onSubmit={() => mySubmit()}>
                <div class="form-group">
                    <label for="employeeID">Employee ID</label>
                    <input type="text" name="id" class="form-control" onChange={newValues} id="inputID" placeholder="Enter Employee ID" />
                </div>
                <div class="form-group">
                    <label for="designation">Designation</label>
                    <input type="text" name="Emp_Designation" class="form-control" onChange={newValues} id="desg" placeholder="Enter your Designation" />
                </div>
                <div class="form-group">
                    <label for="salary">Salary</label>
                    <input type="text" name="Emp_Salary" class="form-control" onChange={newValues} id="sal" placeholder="Enter your Salary" />
                </div>
                <div class="form-group">
                    <label for="department">Department</label>
                    <input type="text" name="Emp_Department" class="form-control" onChange={newValues} id="dept" placeholder="Enter your Department" />
                </div>
                <br></br>
                <div className='text-center'>
                    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateEmployeeData