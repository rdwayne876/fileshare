import React from "react";
import styles from "./uploadFiles.module.scss"
import Button from "../common/button";

export default function UploadFilesComponent() {
    return (
        <div>
            <Button label="Add File" btnClass="btn-primary m-2" />
            <Button label="Add Folder" btnClass="btn-primary m-2" />

        </div>
    )
}