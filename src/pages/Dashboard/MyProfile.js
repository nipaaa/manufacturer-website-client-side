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
       <div className='sm:mr-px justify-center items-center'>
            <h2 className='text-2xl font-bold text-purple-500'>Please Update Your Profile</h2>
            <div className=''>
                <form onSubmit={handleUpdate} >
                    <span className='grid lg:grid-cols-2'>
                        <label class="block">
                            <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Name
                            </span>
                            <input type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder={user.displayName} />
                        </label>

                        <label class="block">
                            <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email
                            </span>
                            <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder={user.email} />
                        </label>

                        <label class="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                                Education
                            </span>
                            <input required type="text" name="education" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="BBA/MBAschool/college/university" />
                        </label>

                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                                Location
                            </span>
                            <input required type="text" name="location" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="City, Country" />
                        </label>

                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                                Phone Number
                            </span>
                            <input required type="text" name="phone" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="01*****" />
                        </label>

                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Linkedin
                            </span>
                            <input required type="text" name="linkedin" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="linkedin profile link" />
                        </label>

                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Photo URL
                            </span>
                            <input required type="text" name="photo" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="photo link" />
                        </label>
                    </span>
                    <input type="submit" value="update profile" className='btn btn-primary  mt-3 text-white' />
                </form>
            </div>
        </div>
 
    );
};

export default MyProfile;