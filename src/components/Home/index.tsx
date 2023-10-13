import React from "react";
import { signIn, signOut } from "next-auth/react"
import { useFetchSession } from "@/hooks/useSession";
import Button from "../common/button";
import styles from "./home.module.scss"

export default function HomeComponent() {

    let { session } = useFetchSession()

    return (
        <div className={styles.authBtn}>
            {session ?
                <Button
                    onClick={() => signOut()}
                    btnClass="btn-primary"
                    label="Sign Out"
                /> :
                <Button
                    onClick={() => signIn()}
                    btnClass="btn-primary"
                    label="Sign In"
                />
            }
        </div>
    )
}