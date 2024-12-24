import React from 'react'

const ProfileMainPage = () => {
  return (
    <>
      <div className="flex justify-center pt-10 pb-64 min-h-screen - font-poppins bg-slate-50">
  <div className="w-full max-w-4xl p-6 rounded-lg bg-gradient-to-r from-gray-50  to-gray-100 shadow-lg ">
    <h1 className="text-3xl font-semibold text-violet-500 text-center mb-6">
      Company Profile
    </h1>

    <div className="flex flex-col lg:flex-row lg:space-x-8">

      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 mb-6 lg:mb-0">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src="https://via.placeholder.com/150" 
            alt="Profile"
            id="profilePreview"
            className="w-full h-full object-cover"
          />
          <label
            htmlFor="photoUpload"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold opacity-0 hover:opacity-100 cursor-pointer transition-opacity duration-200"
          >
            Upload Photo
          </label>
          <input
            type="file"
            id="photoUpload"
            className="hidden"
            accept="image/*"
     
          />
        </div>
        <p className="text-sm mt-3 text-center lg:text-left">
          Upload a company logo or profile photo .
        </p>
      </div>

 
      <div className="w-full lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter company name"
            className="p-2 w-full rounded-md outline-none border border-gray-200"
          />
          <input
            type="text"
            placeholder="Enter recruiter name"
            className="p-2 w-full rounded-md outline-none border border-gray-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Company location"
            className="p-2 w-full rounded-md outline-none border border-gray-200"
          />
          <input
            type="text"
            placeholder="Important links"
            className="p-2 w-full rounded-md outline-none border border-gray-200"
          />
        </div>

        <textarea
          placeholder="Description"
          className="p-3 w-full rounded-md outline-none mb-4 border border-gray-200"
          rows="5"
        ></textarea>

        <div className="flex justify-center">
          <button className="px-6 py-2 text-white bg-violet-500 rounded-md hover:bg-violet-600 hover:scale-105 ">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default ProfileMainPage
