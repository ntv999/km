import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin';

const validateFirstName = [required(), minLength(2), maxLength(15)];
const validateLastName = [required(), minLength(2), maxLength(15)];
const validateRoomNumber = [number(), maxLength(4)];
 const validatePhone = [required(), regex(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/ , 'Must be a valid Phone Number')];


