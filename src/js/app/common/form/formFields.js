import formField from './FormField';
import InputControl from './Input';
import SelectControl from '../form/Select';
import MultiselectControl from "./Multiselect";
import FileInputControl from "./FileInput";

export const Input = formField(InputControl);
export const Select = formField(SelectControl);
export const Multiselect = formField(MultiselectControl);
export const FileInput = formField(FileInputControl);