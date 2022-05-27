import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const handleUpdate = async data => {
        data.preventDefault()
        const newName = data.target.name.value;
        const newEmail = data.target.email.value;
        const education = data.target.education.value;
        const location = data.target.location.value;
        const phone = parseFloat(data.target.phone.value);
        const linkedin = data.target.linkedin.value;
        const photo = data.target.photo.value;

        await updateProfile({
            displayName: newName ? newName : user.displayName,
            photoURL: photo,
            phoneNumber: phone,
            education,
            email: newEmail ? newEmail : user.email,
            location,
            linkedin
        });

    }
    if (updating) {
        return <Loading />
    }
    if (error) {
        console.log(error)
    }


    return (
        <div className='mx-auto'>
            <h2 className='text-2xl text-center font-bold text-secondary'>Update Your Profile</h2>
            <div className='ml-20 lg:ml-96 mt-8'>
                <form onSubmit={handleUpdate}>
                    <div className="mx-auto">
                        <input type="text" name="name" className="input input-bordered my-2 pr-12" placeholder={user.displayName} />

                    </div>

                    <label className="block">
                        <input type="email" name="email" className="input input-bordered my-2 pr-12" placeholder={user.email} />
                    </label>

                    <label className="block">

                        <input required type="text" name="education" className="input input-bordered my-2 pr-12" placeholder="college/university" />
                    </label>

                    <label className="block">

                        <input required type="text" name="location" className="input input-bordered my-2 pr-12" placeholder="City, Country" />
                    </label>

                    <label className="block">

                        <input required type="text" name="phone" className="input input-bordered my-2 pr-12" placeholder="01*****" />
                    </label>

                    <label className="block">

                        <input required type="text" name="linkedin" className="input input-bordered my-2 pr-12" placeholder="linkedin profile link" />
                    </label>

                    <label className="block">
                        <input required type="text" name="photo" className="input input-bordered my-2 pr-12" placeholder="photo link" />
                    </label>

                    <input type="submit" value="update profile" className='btn btn-primary  mt-3 text-white' />
                </form>
            </div>
        </div>

    );
};

export default MyProfile;