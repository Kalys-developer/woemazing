import  React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Категории
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
         className="Main" onClick={handleClose}>ТВ, АУДИО, ВИДЕО</MenuItem>
        <MenuItem onClick={handleClose}>ТЕХНИКА ДЛЯ ДОМА</MenuItem>
        <MenuItem onClick={handleClose}>БЫТОВАЯ ТЕХНИКА</MenuItem>
        <MenuItem onClick={handleClose}>ВСТРАИВАЕМАЯ ТЕХНИКА</MenuItem>
        <MenuItem onClick={handleClose}>КРАСОТА и ЗДОРОВЬЕ</MenuItem>
        <MenuItem onClick={handleClose}>КЛИМАТИЧЕСКАЯ ТЕХНИКА</MenuItem>
        <MenuItem onClick={handleClose}>ТЕЛЕФОНЫ и СВЯЗЬ</MenuItem>
        <MenuItem onClick={handleClose}>ПОСУДА</MenuItem>
        <MenuItem onClick={handleClose}>ФИЛЬТРЫ ДЛЯ ВОДЫ</MenuItem>
        <MenuItem onClick={handleClose}>СТРОЙКА И РЕМОНТ</MenuItem>
        <MenuItem onClick={handleClose}>АКСЕССУАРЫ ДЛЯ ТЕХНИКИ</MenuItem>
        <MenuItem onClick={handleClose}>АВТОТОВАРЫ</MenuItem>



      </Menu>
    </div>
  );
}
