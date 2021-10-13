import React from 'react';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./vistahogar.css";
  import { makeStyles } from '@material-ui/core/styles';

import { userRows } from "../../dummyData";
import { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



import {itemData} from '../../dummyData';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: 500,
        height: 450,
      },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Habitacion 1', 25, "Si", "Si", "Si"),
    createData('Habitacion 2', 20, "Si","Si", "Si"),
    createData('Habitacion 3', 9, "No", "No", "Si"),
    createData('Habitacion 4', 30, "Si","Si", "No"),
    createData('Habitacion 5', 36, "Si","No", "No"),
  ];
  
  
  export default function VistaHogar() {

    const classes = useStyles();
    const [data, setData] = useState(userRows);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
      };


      const columns = [
        { field: "id", headerName: "habitacion", width: 140},

        { field: "metros2", headerName: "metros2", width: 140 },
         {
          field: "Compartida",
          headerName: "Compartida",
          width: 150,
        },
        {
          field: "Baño",
          headerName: "Baño",
          width:120,
        },
    
        {
          field: "action",
          headerName: "Fotos",
          width: 160,
          renderCell: (params) => {
            return (
              <> 
                <button type="button" onClick={handleOpen}>
                    Ver
                </button>                        
              </>
            );
          },
        },
      ];

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Vista Hogar</h1>        
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="/fortaleza_logo.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Fortezza</span>
                <span className="userShowUserTitle">cuatro estrellas</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Detalles de la Cuenta</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Kr 18A #134A-66</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+57 3209477954</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Bogota | Col</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">fortezza@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>

            </div>
          </div>
          <div className="userUpdate">
           
          <span className="userShowUsername">Habitaciones</span>
            <div className="userList "> 
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            </div>
          </div>
        </div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
            <Fade in={open}>
                <div className={classes.paper}>
                <h2 id="transition-modal-title">Habitacion</h2>                        
              
                    <div className={classes.root}>
                        <div rowHeight={160} className={classes.imageList} cols={3}>
                            {itemData.map((item) => (
                            <div key={item.img} cols={item.cols || 1}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>  
        
      </div>
    );
  }
  