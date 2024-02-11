import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    { field: 'phone', headerName: 'Phone number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'access',
      headerName: 'Access level',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            m='0 auto'
            p='5px'
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[400]
                : access === 'user'
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            <Typography sx={{ ml: '5px' }} color={colors.grey[100]}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]
  return (
    <Box m='20px'>
      <Header title='Team' subtitle='Manage your team' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}
export default Team
