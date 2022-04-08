export default function FormError({error}){
    return <div>

        {error && <>
            {error.type === "required" && <span>El campo es requerido</span>}
            {error.type === "minLength" && <span>El campo tiene que tener más caracteres</span>}
        </>}

    </div>
}