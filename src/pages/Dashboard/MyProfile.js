import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";


const MyProfile = () => {
  const [user] = useAuthState(auth);

  const [profile, setProfile] = useState({});
  const { education, number, address, linkedin } = profile;
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [user.email, profile]);

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const address = e.target.address.value;
    const education = e.target.education.value;
    const linkedin = e.target.linkedin.value;
    const profile = { name, email, number, address, education, linkedin };

    fetch(`http://localhost:5000/user/${email}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Update profile successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
        console.log(data);
      });
  };

  return (
    <div className="">
      <p className="text-3xl text-center text-secondary font-semibold my-3">My Profile</p>
      <div className="md:flex justify-between items-center">
        <div className="w-1/2">
          <form onSubmit={handleForm}>
            <div class="card-body">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  class="input input-bordered"
                  value={user?.displayName}
                  disabled
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  class="input input-bordered"
                  value={user?.email}
                  disabled
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  name="education"
                  placeholder="Education"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="number"
                  placeholder="Phone"
                  name="number"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Address"
                  class="input input-bordered"
                  name="address"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="linkedin"
                  class="input input-bordered"
                  name="linkedin"
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary text-white">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold pb-3"><span className="mr-4">Name:</span> {user?.displayName}</h1>
          <h1 className="pb-3">
            <span className=" text-xl  font-semibold mr-4">Email:</span>
            {user?.email}
          </h1>
          <h1 className="pb-3">
            <span className=" text-xl  font-semibold mr-4">Education:</span>
            {education || "Not found"}
          </h1>
          <h1 className="pb-3">
            <span className=" text-xl  font-semibold mr-4">Address:</span>
            {address || "Not found"}
          </h1>
          <h1 className="pb-3">
            <span className=" text-xl  font-semibold mr-4">Linkedin:</span>
            {linkedin || "Not found"}
          </h1>
          <h1 className="pb-3">
            <span className=" text-xl  font-semibold mr-4">Number:</span>
            {number || "Not found"}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;