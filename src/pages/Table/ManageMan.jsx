import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router';

import { MdModeEdit } from "react-icons/md";
import { MdDelete} from "react-icons/md";





const Managean = () => {
  

    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const [MaritalStatus, setMaritalStatus] = useState('');
    const [Church, setChurch] = useState('');
    const [Age, setAge] = useState('');
    const [Address, setAddress] = useState('');
    
  const [Realman, setRealman] = useState([]);

  const [selectedRowData, setSelectedRowData] = useState(null);


const handleEditClick = (rowData) => {
  setSelectedRowData(rowData);
 
};


  useEffect(() => {
    fetchRealman();
  }, []);


  const fetchRealman = async () => {
  
    const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');

    const { data, error } = await supabase.from('Realman').select('*');

    if (error) {
      console.error('Error fetching Table:', error);
    } else {
      setRealman(data);
    }
  };

  const handleDelete = async (id) => {
   
    const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');

    const { data, error } = await supabase.from('Realman').delete().eq('id', id);
   
    if (error) {
        console.error('Error deleting data:', error);
    } else {
        console.log('Realman deleted successfully:', data);
        fetchRealman(); // Fetch the updated smoothies data
    }
};

async function handleEdit(event) {
  event.preventDefault();
  const supabase = createClient('https://zpuplawsjodqxxfqxchz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwdXBsYXdzam9kcXh4ZnF4Y2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NjExOTMsImV4cCI6MjAxOTUzNzE5M30.90w9pY4C4uP9pa9V9nmt_9mRSOWUtIz_k-j82Aw6NmM');

  const { data, error } = await supabase
    .from('Takau')
    .update({
      PartName: selectedRowData.PartName,
      CarName: selectedRowData.CarName,
      Model: selectedRowData.Model,
      Year: selectedRowData.Year,
      SellingPrice: selectedRowData.SellingPrice,
      Barcode: selectedRowData.Barcode,
      ShelfNumber: selectedRowData.ShelfNumber,


   
    })
    .eq('id', selectedRowData.id)

    window.location.reload();

  if (error) {
    console.error('Error updating:', error);
  } else {
    console.log('Updated:', data);
  }
}





  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        Name,
        Surname,
        Email,
        Mobile,
        MaritalStatus,
        Church,
    };
    
    const supabase = createClient('https://nhgwlsmmqjlszkjncurg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZ3dsc21tcWpsc3pram5jdXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NzAyNzcsImV4cCI6MjAyNTI0NjI3N30.d_XWelkD4W4eo4R5eJybKzXfuG02WIemtAQwSU-oW1g');

    const { data, error } = await supabase.from('Takau').insert([formData]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      fetchRealman(); // Fetch the updated smoothies data
    }

    setName('');
    setSurname('');
    setEmail('');
    setMobile('');
    setMaritalStatus('');
    setChurch('');
    setAge('');
    setAddress('');
  };

  let navigate = useNavigate();

  return (
    <div className='flex w-full'>
      <form onSubmit={handleSubmit}>
        
        
      </form>

      <table className='w-full mr-6 bg-white'>
        <thead>
        <tr className='p-10'>
                  <th className='px-7' style={{ textAlign: 'start' }}>Surnmae</th>
                  <th className='px-7' style={{ textAlign: 'start' }} >Email</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Mobile</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>MaritalStatus</th>
            
                  <th className='' style={{ textAlign: 'start' }}>Church</th>
                  <th className='px-7' style={{ textAlign: 'start' }}>Age</th>
                    <th className='px-7' style={{ textAlign: 'start' }}>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
        </thead>
          <tbody className=''>
          {Realman.map((row, index) => (
            <tr key={row.id} className={index % 3 === 0 ? 'bg-[#D3948C]' : index % 3 === 1 ? 'bg-[#9B5C5E]' : 'bg-[#EFA9A9]'}>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Surname}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Email}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Mobile}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.MaritalStatus}</td>
                    <td sclassName='px-7' style={{ textAlign: 'start' }}>{row.Church}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Age}</td>
                    <td className='px-7' style={{ textAlign: 'start' }}>{row.Address}</td>
         
              <td>
    <button onClick={() => handleEditClick(Realman)}><MdModeEdit /></button>
  </td>
              
              <td>
                            <button onClick={() => handleDelete(Realman.id)}><MdDelete /></button>
                        </td>
                       
            </tr>
          ))}
        </tbody>
      </table>
      
    

      <form onSubmit={handleEdit} className='flex items-end w-full flex-col'>
      <input className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.PartName : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,PartName: e.target.value }); }} />

        <input  className='rounded-xl mb-4 py-2 px-4 w-3/4 '  type="text" value={selectedRowData ? selectedRowData.CarName : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,CarName: e.target.value }); }} />
        <input  className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.Model : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Model: e.target.value }); }} />
        <input  className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.Year : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Year: e.target.value }); }} />
        <input  className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.SellingPrice : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,SellingPrice: e.target.value }); }} />
        <input  className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.Barcode : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,Barcode: e.target.value }); }} />
        <input  className='rounded-xl mb-4 py-2 w-3/4  px-4 '  type="text" value={selectedRowData ? selectedRowData.ShelfNumber : ''} onChange={(e) => {setSelectedRowData({...selectedRowData,ShelfNumber: e.target.value }); }} />  
        <button className='rounded-xl mb-4 py-2 w-3/4 bg-purple-400 text-xl' type="submit">Submit</button>
      </form>


    </div>
  );



};

export default Managean;