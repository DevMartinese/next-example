import React from "react";
import { useRouter } from "next/router";

export default function User(){
    const router = useRouter();
    const { user, description } = router.query;

    return (
        <div> Estamos en la pagina de {user} y es {description}</div>
    )
}