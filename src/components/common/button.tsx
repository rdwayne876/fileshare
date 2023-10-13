import React from "react";

export default function Button({ btnClass, label, onClick }: Button) {
    return <button onClick={onClick} className={`btn ${btnClass}`}>{label}</button>
}