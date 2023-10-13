import React from "react";
import styles from "./home.module.scss"
import NavComponent from "../Nav";
import UploadFilesComponent from "../UploadFiles";

export default function HomeComponent() {

    return (
        <div>
            <NavComponent />
            <UploadFilesComponent />
        </div>
    )
}