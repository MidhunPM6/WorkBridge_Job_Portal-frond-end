import React from 'react'
import DatePicker from 'rsuite/DatePicker'
import 'rsuite/DatePicker/styles/index.css'
import { axiosInstance } from '../../../../Axios/Axios-instance'
import { format } from 'date-fns'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const ExperiencePopup = () => {
  const [formData, setFormData] = React.useState('')
  const navigate = useNavigate()

  const handleChange = (value, name) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const formattedData = {
        ...formData,
        StartDate: formData.StartDate
          ? format(new Date(formData.StartDate), 'MMM yyyy')
          : '',
        EndDate: formData.EndDate
          ? format(new Date(formData.EndDate), 'MMM yyyy')
          : ''
      }

      const response = await axiosInstance.post(
        '/api/candidate/experience',
        formattedData,
        {
          withCredentials: true
        }
      )
      console.log(response)

      toast.success(response.data.message, {
        duration: 2000
      })
      setTimeout(() => {
        navigate(0)
      }, 2100)
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000
      })
    }
  }

  return (
    <div>
      <div className=' h-auto w-auto  flex flex-col justify-center items-center'>
        
        <div className='flex justify-center'>
          <h1 className='text-xl font-semibold'>Add Experience</h1>
        </div>
        <div className='flex flex-col text-sm pt-8'>
          <form action=''>
            <div className='flex justify-center items-center mt-4 gap-6'></div>
            <div className='flex gap-4  '>
              <input
                type='text'
                name='position'
                onChange={e => handleChange(e.target.value, e.target.name)}
                placeholder='Current Position'
                className='py-2 lg:w-[18vw] p-2 w-full    border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
              />
              <input
                type='text'
                name='company'
                onChange={e => handleChange(e.target.value, e.target.name)}
                placeholder='Company Name '
                className='py-2 lg:w-[18vw] p-2 w-full    border-2 border-transparent shadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  focus:border-2 focus:border-slate-600   outline-none rounded-sm  bg-gray-50'
              />
            </div>
            <div className='flex  mt-4 gap-4 text-xs'>
              <div className='flex flex-col'>
                <label htmlFor=''>Start Date</label>
                <DatePicker
                  className=' mt-1 lg:w-[18vw]  w-full  '
                  name='startdate'
                  format='MMM-yyyy'
                  shouldDisableDate={date => date > new Date()}
                  onChange={date => handleChange(date, 'StartDate')}
                ></DatePicker>
              </div>
              <div className='flex flex-col'>
                <label htmlFor=''>End Date</label>
                <DatePicker
                  className='lg:w-[18vw]  w-full mt-1'
                  name='enddate'
                  shouldDisableDate={date => date > new Date()}
                  format='MMM-yyyy'
                  onChange={date => handleChange(date, 'EndDate')}
                ></DatePicker>
              </div>
            </div>
            <div className='flex gap-5 mt-4'>
              <textarea
                name='tasks'
                onChange={e => handleChange(e.target.value, e.target.name)}
                placeholder='Your work history and key tasks...'
                id=''
                rows={5}
                className='w-full h-28 max-h-40 border-2 focus:border-2 focus:border-slate-600  outline-none rounded-sm hadow-[0px_0px_3px_0px_rgba(0,0,0,0.3)]  p-2'
              ></textarea>
            </div>

            <div className='flex flex-col gap-5 mt-4'></div>
            <div className='flex flex-col justify-center  items-center mt-3'>
              <button
                type='button'
                onClick={handleSubmit}
                className=' bg-violet-900 text-white mt-8 text-md px-10 p-2 rounded shadow-xl hover:bg-violet-800  '
              >
                Add
              </button>
              <div>
                <p className='text-xs mt-4 text-gray-600'>
                  Make sure all your details are accurate before saving
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePopup
