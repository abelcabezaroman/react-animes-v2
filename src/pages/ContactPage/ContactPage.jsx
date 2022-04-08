import { useForm } from "react-hook-form";
import FormError from "../../components/FormError/FormError";

export default function ContactPage() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();

  const submit = (data) => {
    console.log(data);
  };
  console.log(watch("name"))
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label>
          Name
          <input type="text" {...register("name",  { required: true })} />
        </label>
        <FormError error={errors.name}/>
      </div>

      <div>
        <label>
          Surname
          <input type="text" {...register("surname")} />
        </label>
      </div>

      <div>
          <label>
              <select {...register("gender")}>
                  <option value="">Selecciona un valor</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
              </select>
          </label>
      </div>

      <div>
          <textarea {...register("description",  { required: true, minLength: 10 })}></textarea>
          <FormError error={errors.description}/>
      
      </div>

      <button>Enviar</button>
    </form>
  );
}
