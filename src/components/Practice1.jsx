// import * as React from 'react';
// import { CssBaseline } from '@mui/material';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import DoDisturbIcon from '@mui/icons-material/DoDisturb';
// import Alert from '@mui/material/Alert';
// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomId,
//   randomArrayItem,
// } from '@mui/x-data-grid-generator';

// const roles = ['Marketing', 'Finance', 'Development', 'Research', 'Design', 'Testing'];

// const initialRows = [];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
//     }));
//   };

//   return (
//     <GridToolbarContainer style={{ paddingLeft: '325px' }}>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});
//   const [alertOpen, setAlertOpen] = React.useState(false);
//   const [suspendedId, setSuspendedId] = React.useState(null);

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const handleEditClick = (id) => () => {
//     if (suspendedId === id) {
//       setAlertOpen(true);
//       return;
//     }
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleSuspendClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//     setSuspendedId(id);
//     setAlertOpen(true);
//   };

//   const handleResumeAccount = (id) => () => {
//     setSuspendedId(null);
//     setAlertOpen(false);
//   };

//   const handleDeleteClick = (id) => () => {
//     if (suspendedId === id) {
//       setAlertOpen(true);
//       return;
//     }
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const handleRowDoubleClick = (params) => {
//     const { id } = params;
//     if (suspendedId === id) {
//       handleResumeAccount(id)();
//     }
//   };

//   const columns = [
//     { field: 'name', headerName: 'Name', width: 180, editable: true },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 80,
//       align: 'left',
//       headerAlign: 'left',
//       editable: true,
//     },
//     {
//       field: 'joinDate',
//       headerName: 'Join date',
//       type: 'date',
//       width: 180,
//       editable: true,
//     },
//     {
//       field: 'role',
//       headerName: 'Department',
//       width: 220,
//       editable: true,
//       type: 'singleSelect',
//       valueOptions:  ['Marketing', 'Finance', 'Development', 'Research', 'Design', 'Testing']
//     },
//     {
//       field: 'actions',
//       type: 'actions',
//       headerName: 'Actions',
//       width: 100,
//       cellClassName: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: 'primary.main',
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//             <GridActionsCellItem
//               icon={<DoDisturbIcon />}
//               label="Suspend"
//               className="textPrimary"
//               onClick={handleSuspendClick(id)}
//               color="inherit"
//             />
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//             disabled={suspendedId === id}
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//             disabled={suspendedId === id}
//           />,
//           <GridActionsCellItem
//             icon={<DoDisturbIcon />}
//             label="Suspend"
//             onClick={handleSuspendClick(id)}
//             color="inherit"
//           />
//         ];
//       },
//     },
//   ];

//   return (
//     <Box 
//       sx={{
//         height: 500,
//         width: '100%',
//         borderRadius: 8, 
//         '& .actions': {
//           color: 'text.secondary',
//         },
//         '& .textPrimary': {
//           color: 'text.primary',
//         },
//       }}
//     >
//       <DataGrid style={{ paddingLeft:'20px', paddingRight:'20px', border: '1px solid black', marginLeft: '420px',  }}
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         onRowDoubleClick={handleRowDoubleClick}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: { setRows, setRowModesModel },
//         }}
//       />
//       <Sidebar />
//       <Footer />
//       {alertOpen && (
//         <Alert severity="warning" onClose={() => setAlertOpen(false)} sx={{position: 'fixed', bottom: 16, right: 16}}>
//           {suspendedId ? "User Account Suspended. You cannot edit or delete this record." : "User Account Suspended"}
//         </Alert>
//       )}
//     </Box>
//   );
// }

import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import Sidebar from './Sidebar';
import Footer from './Footer';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Alert from '@mui/material/Alert';
import FormModal from './FormModal';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

const initialRows = [];

function EditToolbar(props) {
  const { setRows, setRowModesModel, setOpenModal } = props;

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <GridToolbarContainer style={{ paddingLeft: '325px' }}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [suspendedId, setSuspendedId] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    if (suspendedId === id) {
      setAlertOpen(true);
      return;
    }
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleSuspendClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    setSuspendedId(id);
    setAlertOpen(true);
  };

  const handleResumeAccount = (id) => () => {
    setSuspendedId(null);
    setAlertOpen(false);
  };

  const handleDeleteClick = (id) => () => {
    if (suspendedId === id) {
      setAlertOpen(true);
      return;
    }
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowDoubleClick = (params) => {
    const { id } = params;
    if (suspendedId === id) {
      handleResumeAccount(id)();
    }
  };

  const handleFormSubmit = (formData) => {
    const id = randomId();
    const newRow = { id, ...formData, isNew: true };
  
    setRows((oldRows) => [...oldRows, newRow]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  
    setOpenModal(false); // Close the modal after submission
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'email', headerName: 'Email', width: 200, editable: true },
    { field: 'phone', headerName: 'Phone', width: 150, editable: true },
    { field: 'collegeName', headerName: 'College Name', width: 250, editable: true },
    { field: 'degree', headerName: 'Degree', width: 180, editable: true },
    { field: 'specialization', headerName: 'Specialization', width: 220, editable: true },
    { field: 'passedOutYear', headerName: 'Passed Out Year', type: 'number', width: 180, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 200,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DoDisturbIcon />}
              label="Suspend"
              className="textPrimary"
              onClick={handleSuspendClick(id)}
              color="inherit"
            />
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
            disabled={suspendedId === id}
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
            disabled={suspendedId === id}
          />,
          <GridActionsCellItem
            icon={<DoDisturbIcon />}
            label="Suspend"
            onClick={handleSuspendClick(id)}
            color="inherit"
          />
        ];
      },
    },
  ];

  return (
    <Box 
      sx={{
        height: 500,
        width: '100%',
        borderRadius: 8, 
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid style={{ paddingLeft:'20px', paddingRight:'20px', border: '1px solid black', marginLeft: '420px',  }}
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onRowDoubleClick={handleRowDoubleClick}
        slots={{
          toolbar: (props) => <EditToolbar {...props} setOpenModal={setOpenModal} />,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
      <Sidebar />
      <Footer />
      {alertOpen && (
        <Alert severity="warning" onClose={() => setAlertOpen(false)} sx={{position: 'fixed', bottom: 16, right: 16}}>
          {suspendedId ? "User Account Suspended. You cannot edit or delete this record." : "User Account Suspended"}
        </Alert>
      )}
      <FormModal open={openModal} onClose={() => setOpenModal(false)} onSubmit={handleFormSubmit} />
    </Box>
  );
}
