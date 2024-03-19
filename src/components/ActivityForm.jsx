/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';

const ActivityForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="flex flex-col justify-center items-center mt-20 gap-6 font-semibold" onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col text-center" htmlFor="date">
        Dátum:
        <input
          className="border border-black p-2 mt-2 rounded bg-sky-200 w-[200px]"
          type="date"
          {...register('date', {
            required: 'Kötelező megadni a dátumot',
          })}
        />
      </label>

      <label className="flex flex-col text-center" htmlFor="land-activity">
        Művelet:
        <select className="border border-black p-2 mt-2 rounded bg-emerald-200 w-[250px]" {...register('land-activity')} defaultValue="default">
          <option value="default" disabled>Válassz egy műveletet...</option>
          <option value="Tárcsázás">Tárcsázás</option>
          <option value="Metszés + Kötözés">Metszés + Kötözés</option>
          <option value="Kaszálás">Kaszálás</option>
          <option value="Bálázás">Bálázás</option>
          <option value="Rendsodrás">Rendsodrás</option>
          <option value="Hengerezés">Hengerezés</option>
          <option value="Kombinátorozás">Kombinátorozás</option>
          <option value="Permetezés">Permetezés</option>
          <option value="Műtrágyaszórás">Műtrágyaszórás</option>
          <option value="Aratás">Aratás</option>
          <option value="Kézi szüret">Kézi szüret</option>
          <option value="Gépi szüret">Gépi szüret</option>
          <option value="Zöldválogatás">Zöldválogatás</option>
          <option value="Gyomirtózás">Tárcsázás</option>
        </select>
      </label>

      <label className="flex flex-col text-center" htmlFor="land-block">
        Blokk-Terület:
        <label htmlFor="option1" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option1" id="option1" {...register('land-block')} />
          Option 1
        </label>
        <label htmlFor="option2" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option2" id="option2" {...register('land-block')} />
          Option 2
        </label>
        <label htmlFor="option3" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option3" id="option3" {...register('land-block')} />
          Option 3
        </label>
        <label htmlFor="option4" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option4" id="option4" {...register('land-block')} />
          Option 4
        </label>
        <label htmlFor="option5" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option5" id="option5" {...register('land-block')} />
          Option 5
        </label>
        <label htmlFor="option6" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option6" id="option6" {...register('land-block')} />
          Option 6
        </label>
        <label htmlFor="option7" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option7" id="option7" {...register('land-block')} />
          Option 7
        </label>
        <label htmlFor="option8" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option8" id="option8" {...register('land-block')} />
          Option 8
        </label>
        <label htmlFor="option9" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option9" id="option9" {...register('land-block')} />
          Option 9
        </label>
        <label htmlFor="option10" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option10" id="option10" {...register('land-block')} />
          Option 10
        </label>
        <label htmlFor="option11" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option11" id="option11" {...register('land-block')} />
          Option 11
        </label>
        <label htmlFor="option12" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option12" id="option12" {...register('land-block')} />
          Option 12
        </label>
        <label htmlFor="option13" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option13" id="option13" {...register('land-block')} />
          Option 13
        </label>
        <label htmlFor="option14" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option14" id="option14" {...register('land-block')} />
          Option 14
        </label>
        <label htmlFor="option15" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option15" id="option15" {...register('land-block')} />
          Option 15
        </label>
        <label htmlFor="option16" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option16" id="option16" {...register('land-block')} />
          Option 16
        </label>
        <label htmlFor="option17" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option17" id="option17" {...register('land-block')} />
          Option 17
        </label>
        <label htmlFor="option18" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option18" id="option18" {...register('land-block')} />
          Option 18
        </label>
        <label htmlFor="option19" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option19" id="option19" {...register('land-block')} />
          Option 19
        </label>
        <label htmlFor="option20" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option20" id="option20" {...register('land-block')} />
          Option 20
        </label>
        <label htmlFor="option21" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option21" id="option21" {...register('land-block')} />
          Option 21
        </label>
        <label htmlFor="option22" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option22" id="option22" {...register('land-block')} />
          Option 22
        </label>
        <label htmlFor="option23" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option23" id="option23" {...register('land-block')} />
          Option 23
        </label>
        <label htmlFor="option24" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option24" id="option24" {...register('land-block')} />
          Option 24
        </label>
        <label htmlFor="option25" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option25" id="option25" {...register('land-block')} />
          Option 25
        </label>
        <label htmlFor="option26" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option26" id="option26" {...register('land-block')} />
          Option 26
        </label>
        <label htmlFor="option27" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option27" id="option27" {...register('land-block')} />
          Option 27
        </label>
        <label htmlFor="option28" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option28" id="option28" {...register('land-block')} />
          Option 28
        </label>
        <label htmlFor="option29" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option29" id="option29" {...register('land-block')} />
          Option 29
        </label>
        <label htmlFor="option30" className="has-[:checked]:bg-violet-300">
          <input type="checkbox" value="option30" id="option30" {...register('land-block')} />
          Option 30
        </label>
      </label>
      <input className="border-2 border-black rounded py-1 px-2 bg-emerald-500" type="submit" value="Mentés" />
    </form>
  );
};

export default ActivityForm;
