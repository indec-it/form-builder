import {ArrowRight, ArrowLeft, Cancel, Plus, View, Edit, Trash, ArrowUp, ArrowDown} from '../Icons';

export function AddButton(props) {
  return (
    <button
      type="button"
      data-testid="add-new"
      className="flex items-center gap-2 text-blue-600 border border-blue-600 p-2 rounded-md hover:bg-blue-100 ps-6 pe-6 uppercase text-sm"
      {...props}
    >
      <Plus />
      Agregar nuevo
    </button>
  );
}

export function BackButton(props) {
  return (
    <button
      type="button"
      className=" flex items-center gap-2 text-blue-600 border border-blue-600 p-2 rounded-md hover:bg-blue-50 ps-6 pe-6 text-sm disabled:opacity-40 disabled:hover:bg-inherit disabled:text-gray-600 disabled:border-gray-300 disabled:borderuppercase"
      {...props}
    >
      <ArrowLeft />
      Anterior
    </button>
  );
}

export function NextButton(props) {
  return (
    <button
      type="submit"
      className="flex gap-2 text-white bg-blue-600 p-2 rounded-md hover:bg-blue-800 ps-6 pe-6 text-sm items-center uppercase"
      {...props}
    >
      Siguiente
      <ArrowRight />
    </button>
  );
}

export function InterruptButton(props) {
  return (
    <button
      type="button"
      data-testid="interrupt-survey"
      className="flex gap-2 text-red-600 border border-red-600 p-2 rounded-md hover:bg-red-100 ps-6 pe-6 uppercase text-sm"
      {...props}
    >
      <Cancel />
      Interrumpir encuesta
    </button>
  );
}

export function ViewButton(props) {
  return (
    <button
      type="button"
      data-testid="interrupt-survey"
      className="text-orange-500 rounded-full border-2 p-2 border-orange-200 hover:bg-orange-300"
      {...props}
    >
      <View />
    </button>
  );
}

export function EditButton(props) {
  return (
    <button
      type="button"
      data-testid="interrupt-survey"
      className="text-blue-800 rounded-full border-2 p-2 border-blue-200 hover:bg-blue-300"
      {...props}
    >
      <Edit />
    </button>
  );
}

export function DeleteButton(props) {
  return (
    <button
      type="button"
      data-testid="interrupt-survey"
      className="text-red-900 rounded-full border-2 p-2 border-red-200 hover:bg-red-300"
      {...props}
    >
      <Trash />
    </button>
  );
}

export function MoveButton({position, ...props}) {
  return (
    <button
      type="button"
      data-testid="interrupt-survey"
      className="text-teal-900 rounded-full border-2 p-2 border-teal-200 hover:bg-teal-300"
      {...props}
    >
      {position === 'up' ? <ArrowUp /> : <ArrowDown />}
    </button>
  );
}
