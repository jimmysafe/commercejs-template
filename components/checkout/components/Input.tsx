import { FC } from 'react';
import { useDispatch } from '../../../store';
import { updateInputValue } from '../../../store/checkout';
import Select from 'react-select';

type Location = {
	value: string;
	label: string;
};

type InputProps = {
	label: string;
	type: string;
	id: string;
	options?: Location[];
	placeholder?: string;
	isDisabled?: boolean;
};

const Input: FC<InputProps> = ({ label, id, type, options, placeholder, isDisabled }) => {
	const dispatch = useDispatch();

	const handleChange = (key: string, value: string | Location) => {
		dispatch(
			updateInputValue({
				key,
				value,
			})
		);
	};

	const renderInput = (type: string) => {
		switch (type) {
			case 'select':
				return (
					<Select
						id={id}
						classNamePrefix='input'
						placeholder={placeholder}
						options={options}
						isDisabled={isDisabled}
						onChange={(e) => handleChange(id, e)}
						className='mt-1 border border-gray-300 h-12 flex justify-center items-center'
					/>
				);
			case 'textarea':
				return (
					<textarea
						onChange={(e) => handleChange(e.target.id, e.target.value)}
						name={id}
						id={id}
						cols={30}
						rows={7}
						className='mt-1 border border-gray-300 px-4'
					></textarea>
				);
			default:
				return (
					<input
						onChange={(e) => handleChange(e.target.id, e.target.value)}
						type={type}
						id={id}
						className='mt-1 border border-gray-300 h-12 px-4'
					/>
				);
		}
	};

	return (
		<>
			<label htmlFor={id} className='text-gray-300 text-xs'>
				{label}
			</label>
			{renderInput(type)}
		</>
	);
};

export default Input;