import { useForm } from 'react-hook-form';


export default function RegForm() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
          firstName: "",
          lastName: "",
          age: 0,
          telegram: "",
          whatsApp: "",
        }
      });

      function submitForm(data) {
        console.log(data);
        
      }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} class="w-full max-w-lg mx-auto">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-2/5 px-3 mb-3 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              {...register("firstName", { required: true, maxLength: 20 })}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errors.firstName ? 'border-red-500'"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            {/* border-red-500 */}
            {errors.firstName?.type === "required" && (
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
            {errors.firstName?.type === "maxLength" && (
              <p class="text-red-500 text-xs italic">
                First Name Cannot contain more than 20 characters
              </p>
            )}
            
          </div>
          <div class="w-full md:w-2/5 mb-3 md:mb-0 px-3">
            <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              {...register("lastName", { required: true, maxLength: 20 })}
              class="appearance-none block w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
            {errors.lastName?.type === "required" && (
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
            {errors.lastName?.type === "maxLength" && (
              <p class="text-red-500 text-xs italic">
                Last Name Cannot contain more than 20 characters
              </p>
            )}
          </div>

          <div class="w-full md:w-1/5 px-3 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
              Age
            </label>
            <input
              {...register("age", { min: 18, max: 99 })}
              class="appearance-none block w-full bg-gray-200 mb-3 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-age"
              type="number"
              placeholder="18+"
            />
            {errors.age?.type === "min" && (
              <p class="text-red-500 text-xs italic">
                You have to be at least 18 years old.
              </p>
            )}
            {errors.age?.type === "max" && (
              <p class="text-red-500 text-xs italic">
                Please, enter your actual age.
              </p>
            )}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="custom-width-30 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
              Telegram @
            </label>
            <input
              {...register("telegram")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-telegram"
              type="text"
              placeholder="@GlanceAgency"
            />
          </div>

          <div class="custom-width-10 mb-6 md:mb-0 flex items-center justify-center">
            <span class="md:pt-5 text-gray-100 text-xs font-bold">OR</span>
          </div>

          <div class="custom-width-60 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
              Whats App
            </label>
            <input
              {...register("whatsApp")}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="text"
              placeholder="+38 (067) 123 45 67"
            />
          </div>
        </div>

        <div className="my-10 mx-auto">
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-14 py-3 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
            >
              <span>Become a model!</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
