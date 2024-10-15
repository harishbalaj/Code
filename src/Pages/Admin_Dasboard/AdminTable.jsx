import React from 'react'
import { toast } from 'react-toastify'

const AdminTable = (props) => {
    const {users,toggle,setToggle,popupFor,setPopupFor,editId,setEditId,filteredUsers,deleteId,setDeleteId} = props
  
    
    const handleEditResult = (id) => {
        setToggle(!toggle)
        setPopupFor('Edit Result')
        setEditId(id)
    }
    const handleDeleteResult = (id) => {
        toast.success('Deleted Successfully')
        setDeleteId(id) 
    }
  return (
    <div className="">
       

{filteredUsers.length > 0 && ( <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               
                <th scope="col" class="px-6 py-3">
                    Student Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Student Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Attendence
                </th>
                <th scope="col" class="px-6 py-3">
                    Project Review
                </th>
                <th scope="col" class="px-6 py-3">
                    Assessment
                </th>
                <th scope="col" class="px-6 py-3">
                    LinkedIn Post
                </th>
                <th scope="col" class="px-6 py-3">
                    Project Score
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {filteredUsers.map((user, index) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {user.name}
                </th>
                <td class="px-6 py-4">
                    {user.studentId}
                </td>
                <td class="px-6 py-4">
                    {user.result.attendence || '-'}
                </td>
                <td class="px-6 py-4">
                    {user.result.projectReview || '-'}
                </td>
                <td class="px-6 py-4">
                    {user.result.assessment || '-'}
                </td>
                <td class="px-6 py-4">
                    {user.result.linkedInPost || '-'}
                </td>
                <td class="px-6 py-4">
                    {user.result.projectMarks || '-'}
                    
                </td>
                <td class="flex items-center px-6 py-4">
                    <p onClick={() => handleEditResult(index)} class="font-medium mb-0 text-blue-600 cursor-pointer dark:text-blue-500 hover:underline ">Edit</p>
                    <p onClick={() => handleDeleteResult(index)} class="font-medium mb-0 text-red-600 cursor-pointer dark:text-red-500 hover:underline ms-3">Remove</p>
                </td>
            </tr>
 
            ))}
            
        </tbody>
    </table> 
    
</div>

)
}
</div>


  )
}

export default AdminTable
