import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { FaPlusCircle, FaWindowClose,FaFileExport,FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineGridView } from "react-icons/md";
import userimg from '../assets/Images/adicon.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import './userdash.css'
import { toast } from 'react-toastify';
const UserDashboard = () => {
    const [tabName, setTabName] = useState('viewMarks')
    const [open, setOpen] = useState('false')
    const [project, setProject] = useState('false')
    
    const navigate = useNavigate()
     const logout = () => {
         navigate('/')
         toast.success('Logging out!!')
     }
        const handleExport = () => {
            const doc = new jsPDF();
    
            // Optional: Add some text to the PDF
            doc.text("This is First Month Intern Marks", 10, 10);
    
            // Define the table data
            const columns = ["S.no", "Task", "Marks","Remarks"];
            const rows = [
                [1, "Attendence", "70%","Good"],
                [2, "Project Review", "50%","Good"],
                [3, "Assessment","40%", "Poor"],
                [4, "Project Submission","100%", "Good"],
                [5, "LinkedIn post","50%", "Good"]
            ];
    
            // Generate the table using jsPDF-AutoTable
            doc.autoTable({
                head: [columns],
                body: rows,
                startY: 20, // Move table down to avoid overlapping the text
            });
    
            // Save the PDF
            doc.save("table.pdf");
        };
    return (
        <div className="">
            <header className='bg-gray-500 p-1'>
                <h1 className='flex flex-row items-center text-white'><RiDashboardFill className='text-3xl text-black flex flex-row items-center' />Dash <span className='text-red-500'>board</span></h1>
                {/* <img src={userimg} className='w-[50px] text-3xl flex float-right mt-[-53px] items-center rounded-full' alt="user" /> */}
             
<button id="dropdownUserAvatarButton" onClick={() => setOpen(!open)} data-dropdown-toggle="dropdownAvatar" class="text-sm relative float-right mt-[-53px] me-5 justify-center items-center bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
<span class="sr-only">Open user menu</span>
<img class=" w-8 h-8 rounded-full" src={userimg} alt="user" />
</button>


<div id="dropdownAvatar" class={`z-10  ${open ? 'hidden' : 'absolute'} absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Hari</div>
      <div class="font-medium truncate">hari12@gmail.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Profile
      </li>
      <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Earnings
      </li>
    </ul>
    <div class="py-2">
      <p onClick={()=>logout()} className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100  dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</p>
    </div>
</div>

               

            </header>
            <div className="w-[100%]">



                <div className="mb-4 border-b w-[100%] flex items-center justify-center border-gray-200 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                        <li className="me-2" role="presentation">
                            <button className={`inline-block p-4 ${tabName === 'viewMarks' ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}
                            flex flex-row items-center border-b-2 rounded-t-lg`} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" onClick={() => setTabName('viewMarks')} aria-selected="false"><MdOutlineGridView /> View Marks</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button className={`inline-block p-4 ${tabName === 'projectSubmission' ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} 
                            flex flex-row items-center border-b-2 rounded-t-lg `} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
                                onClick={() => setTabName('projectSubmission')} aria-selected="false"><FaProjectDiagram /> Project Submission</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button className={`inline-block p-4 ${tabName === 'exportMarks' ? 'border-b-2 border-blue-600 text-blue-600' : 'border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} 
                           flex flex-row items-center rounded-t-lg`} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
                                onClick={() => setTabName('exportMarks')} aria-selected="false"><FaFileExport />Export Marks</button>
                        </li>
                    </ul>
                </div>
                {/* <div id="default-tab-content">
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                </div> */}
                <div className="w-[100%] flex items-center justify-center h-[110vh]">
                    {tabName === 'viewMarks' ? <div>
                        <ul>
                            <h3 className='pt-3'>First Month Intern</h3>
                            <table className={`table table-auto border pt-2 border-dark-500 cursor-pointer border-dark-500`}>

                                <thead>
                                    <tr className='bg-purple-500'>
                                        <th>S.no</th>
                                        <th>Task</th>
                                        <th>Marks</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Attendence</td>
                                        <td>70%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Project Review</td>
                                        <td>50%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Assesment</td>
                                        <td>40%</td>
                                        <td>Poor</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Project submission</td>
                                        <td>100%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>LinkedIn post</td>
                                        <td>50%</td>
                                        <td>Good</td>
                                    </tr>
                                </tbody>
                            </table>


                            <h3 className='pt-3'>Second Month Intern</h3>
                            <table className={`table table-auto border pt-2 border-dark-500 cursor-pointer border-dark-500`}>

                                <thead>
                                    <tr className='bg-purple-500'>
                                        <th>S.no</th>
                                        <th>Task</th>
                                        <th>Marks</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Attendence</td>
                                        <td>100%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Project Review</td>
                                        <td>40%</td>
                                        <td>Bad</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Assesment</td>
                                        <td>100%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Project submission</td>
                                        <td>100%</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>LinkedIn post</td>
                                        <td>50%</td>
                                        <td>Good</td>
                                    </tr>
                                </tbody>
                            </table>

                        </ul>
                    </div> : tabName === 'projectSubmission' ? <div>
                        {/* <button className='bg-blue-500 text-white p-2 hover:bg-orange-500 rounded-[15px]'>Export Assessment</button> */}
                         {/* <!-- Modal toggle --> */}
                         <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="flex flex-row items-center justify-center  text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setProject(!project)} type="button">
                                Add Project <FaPlusCircle className='text-2xl text-green-600 border b-3 hover:bg-green-100' />
                            </button>

                            {/* <!-- Main modal --> */}
                            <div id="crud-modal" tabindex="-1" aria-hidden="true" class={` ${project ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                                <div class="relative p-4 w-full max-w-md max-h-full">
                                    {/* <!-- Modal content --> */}
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* <!-- Modal header --> */}
                                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                                 Project
                                            </h3>
                                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setProject(!open)} data-modal-toggle="crud-modal">
                                                <FaWindowClose className='text-2xl' />
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        {/* <!-- Modal body --> */}
                                        <form class="p-4 md:p-5 bg-white">
                                            <div class="grid gap-4 mb-4 grid-cols-2">
                                                <div class="col-span-2">
                                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type student name" required="" />
                                                </div>
                                                <div class="col-span-2">
                                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project link</label>
                                                    <input type="url"id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter a url" required="" />
                                                </div>
                                                <div class="col-span-2 sm:col-span-1">
                                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">StudentId</label>
                                                    <input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter a studentId" required="" />
                                                </div>
                                                <div class="col-span-2 sm:col-span-1">
                                                    <label for="category" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Class</label>
                                                    <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                        <option selected="">Select category</option>
                                                        <option value="TV">Bsc Computer Science</option>
                                                        <option value="PC">Msc Computer Science</option>
                                                        <option value="GA">BE Computer Science</option>
                                                        <option value="PH">MBA</option>
                                                    </select>
                                                </div>
                                               
                                            </div>
                                            <button type="submit" class="text-white w-40 flex flex-row items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <FaPlusCircle className='text-2xl text-white' />
                                                Add Project
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </div> : tabName === 'exportMarks' ? <div>
                        <button onClick={()=>handleExport()} className='bg-blue-500 text-white p-2 hover:bg-orange-500 rounded-[15px]'>Export Marks</button>
                    </div> : null}
                </div>

            </div>
        </div>
    )
}

export default UserDashboard