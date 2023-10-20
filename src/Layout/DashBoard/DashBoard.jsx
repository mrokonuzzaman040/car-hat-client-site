import { useContext } from 'react';
import { AuthContex } from '../../Auth/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const { user } = useContext(AuthContex);

    return (
        <div className=" flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-10 mt-5">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </div>
                <div className="">
                    <h2 className='font-normal'>Name: {user.displayName}</h2>
                    <h2 className='font-normal'>Email: {user.email}</h2>
                </div>
            </div>
            <div className="flex gap-7 mt-10">
                <Link className='btn btn-secondary' to="/addItems">Add Car</Link>
                {/* <Link className='btn btn-secondary' to="/update">Update</Link> */}
                <Link className='btn btn-secondary' to="/allcars">All Cars</Link>
            </div>
        </div>
    );
};

export default DashBoard;