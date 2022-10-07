const columns = [
   {
      field: 'id',
      headerName: 'Staff Id',
      width: 140,
      paddingLeft: "34rem"
   },
   {
      field: 'name',
      headerName: 'Name',
      width: 450
   },
   {
      field: 'contact',
      headerName: 'Contact',
      width: 350
   },
   {
      field: 'kot',
      headerName: 'KOT',
      width: 150
   },
   {
      field: 'Delete Selected',
      renderCell: (cellValues) => {
         return (
            <div>
               <button
                  variant="contained"
                  color="secondary"
                  className="btn btn-primary"
                  style={{
                     fontSize: '1.7rem',
                     padding: '0.5rem 1.5rem',
                     marginRight: '0.5rem'
                  }}
               >
                  Update
               </button>
               <button
                  variant="contained"
                  color="secondary"
                  className="btn btn-primary"
                  style={{
                     fontSize: '1.7rem',
                     padding: '0.5rem 1.5rem',
                     marginLeft: '0.5rem'
                  }}
               >
                  Delete
               </button>
            </div>
         )
      },
      width: 220,
   },
];

const rows = [
   {
      id: 1,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 2,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'No'
   },
   {
      id: 3,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 4,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 5,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 6,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'No'
   },
   {
      id: 7,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 8,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
   {
      id: 9,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'No'
   },
   {
      id: 10,
      name: 'Rahul',
      contact: '1234567890',
      kot: 'Yes'
   },
]


const department = ['All', 'Kitchen', 'Bar', 'Waiter', 'Manager', 'Cashier', 'Others']

// export { columns, rows };

export default { columns, rows, department };