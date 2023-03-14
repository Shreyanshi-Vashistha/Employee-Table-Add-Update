import React from 'react'

//2nd step - to pass data received into this.state using props, mydata will have full data from get request
class GetEmployeeData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mydata: []
        }
    }

    //1st step - to get data from json-server
    componentDidMount() {
        fetch(' http://localhost:4567/employee')
            .then((myjson) => myjson.json())
            .then((result) => {
                this.setState({ mydata: result })
               
            })
            .catch((error) => { console.log(error) })
    }
    

    //3rd step - to show data on webpage
    render() {
        const data = this.state.mydata
        return (
            <div>                
                <br></br>
                <div className='text-left'>
                    <a href="/" className="btn btn-primary btn-sm">Go Back</a>
                </div>  
                <br></br>
                <div><table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Emp ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Joining Date</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((mykey) => (
                            <tr key={mykey.id}>
                                <th scope="row">{mykey.id}</th>
                                <th >{mykey.Emp_Name}</th>
                                <td>{mykey.Emp_Designation}</td>
                                <td>{mykey.Emp_Salary}</td>
                                <td>{mykey.Emp_Joining_Date}</td>
                                <td>{mykey.Emp_Department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> </div>                   
                              
            </div>
        )
    }
}

export default GetEmployeeData
