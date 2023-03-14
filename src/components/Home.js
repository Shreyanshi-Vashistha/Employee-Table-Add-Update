import { Link } from "react-router-dom";
function Home (){
    return (
        <div>
                <br></br>
            <div className='text-center' style={{marginTop: 150, marginBottom: 50}}>
                <Link to="get" className="btn btn-primary btn-lg">Get Employee Details</Link>
            </div><br></br>
            <div className='text-center'>
                <Link to="update" className="btn btn-primary btn-lg">Update Employee Details</Link>
            </div>
        </div>
    )
}

export default Home