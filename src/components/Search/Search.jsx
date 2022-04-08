import { useForm } from "react-hook-form";

export default function Search({onSubmit}){
    const {register, handleSubmit} = useForm();

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={"Buscate algo..."} className="b-input" {...register("title")} type="text" />
        {/* <input onInput={e => onSubmit(e.target.value)}type="text" /> */}
    </form>
}