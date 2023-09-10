import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



export default function Showmembers() {
    const [rows,setrows]=useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'dob', headerName: 'Date of Birth', width: 130 },
        { field: 'email', headerName: 'Last name', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        //role         | id | dob  | last_name | address  | email  | first_name | password   | phone
        
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];

    React.useEffect(()=>{
        chk1();
    },[])
    
    var chk1=async ()=>{
    
        const result1 =await fetch(`http://localhost:8080/owner/showmembers/${sessionStorage.getItem("id")}`,
        {headers:{'Authorization':`Bearer ${sessionStorage.getItem('jwt')}`}
    });
        const data= await result1.json();
        console.log(data);
        setrows(data);
    
    }


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
