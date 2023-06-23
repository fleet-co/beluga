import React from 'react'
import Button from "@mui/material/Button";
import { BlockData } from "../../blocks";
import "./EditBar.css";

const EditBar = ({ activeBlock }: BlockData) => {
  return (
    <div className="editBarContainer">
      {activeBlock}
    </div>
  )
}

export default EditBar