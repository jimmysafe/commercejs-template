import { FC } from 'react';
import Input from './components/Input';

type Location = {
	value: string;
	label: string;
};

type ShippingOption = {
	value: string;
	label: string;
};

type Props = {
	shippingCountries: Location[];
	regions: Location[];
	selectedShippingOption: ShippingOption;
	shippingOptions: ShippingOption[];
};

const AddressForm: FC<Props> = ({
	shippingCountries,
	regions,
	selectedShippingOption,
	shippingOptions,
}) => {
	return (
		<form className='w-full'>
			<div className='my-8 font-semibold'>
				<h2>Customer and shipping details</h2>
			</div>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col flex-1 pr-2'>
					<Input label='First Name*' id='firstname' type='text' />
				</div>
				<div className='flex flex-col flex-1 pl-2'>
					<Input label='Last Name*' id='lastname' type='text' />
				</div>
			</div>
			<div className='flex justify-between items-center mt-4'>
				<div className='flex flex-col flex-1 pr-2'>
					<Input label='Address line 1*' id='address1' type='text' />
				</div>
				<div className='flex flex-col flex-1 pl-2'>
					<Input label='Address line 2*' id='address2' type='text' />
				</div>
			</div>

			<div className='flex justify-between items-center mt-4'>
				<div className='flex flex-col flex-1 pr-2'>
					<Input
						type='select'
						label='Country*'
						id='country'
						options={shippingCountries}
						placeholder='Country'
					/>
				</div>
				<div className='flex flex-col flex-1 pl-2'>
					<Input label='City*' id='city' type='text' />
				</div>
			</div>

			<div className='flex justify-between items-center mt-4'>
				<div className='flex flex-col flex-1 pr-2'>
					<Input
						type='select'
						label='State/County/Region*'
						id='region'
						options={regions}
						placeholder='Region'
						isDisabled={regions.length === 0}
					/>
				</div>
				<div className='flex flex-col flex-1 pl-2'>
					<Input label='Postal Code*' id='postcode' type='text' />
				</div>
			</div>

			<div className='flex justify-between items-center mt-4'>
				<div className='flex flex-col flex-1 pr-2'>
					<Input label='Telephone' id='telephone' type='text' />
				</div>
				<div className='flex flex-col flex-1 pl-2'>
					<Input label='Email*' id='email' type='text' />
				</div>
			</div>

			<div className='flex mt-4'>
				<div className='flex flex-col flex-1'>
					<Input
						type='select'
						label='Shipping Method*'
						id='shipping_method'
						options={shippingOptions}
					/>
				</div>
			</div>

			<div className='flex flex-col mt-4'>
				<Input label='Order Notes (Optional)' id='notes' type='textarea' />
			</div>
		</form>
	);
};

export default AddressForm;
