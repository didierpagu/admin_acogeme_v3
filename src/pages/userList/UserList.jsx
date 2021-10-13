import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(3),
  },
}));


export default function UserList() {
  const classes = useStyles();
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "user",
      headerName: "Hogares",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "habitaciones", headerName: "Cupos Totales", width: 210 },
    {
      field: "disponibles",
      headerName: "Disponibles",
      width: 140,
    },
    {
      field: "ciudad",
      headerName: "Ciudad",
      width: 130,
    },
    {
      field: "localidad",
      headerName: "localidad",
      width: 130,
    },

    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <> 
            <Link to={"/ver_hogar/" + params.row.id}>
              <button className="userListEdit">Ver</button>
            </Link>            
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
  <>
  

      <div> 

  <h1  className="title_tabla">Hogares</h1>   
    <div className="userList "> 
   
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
    
    <Link to="/newUser">  
      <Tooltip title="Add" aria-label="add">  
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>  
      </Tooltip>     
    </Link>
    </div>  
    
    </>
  );
}
