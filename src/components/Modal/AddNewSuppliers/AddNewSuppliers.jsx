import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { format } from 'date-fns';
import * as yup from 'yup';
import { createSupplier } from '../../../redux/pharmacy/pharmacyOperations';
import {
  ButtonContainer,
  DatePickerStyled,
  Form,
  ModalContent,
} from '../Modal.styled';
import { FormInputWrapper, StyledInput } from 'components/Auth/Auth.styled';
import Button from 'components/SharedComponents/Button/Button';

const supplierSchema = yup.object({
  name: yup.string().trim().required('Suppliers is required field'),
  address: yup.string().trim().required('Address is required field'),
  suppliers: yup.string().trim().required('Company is required field'),
  date: yup.string().required('Delivery is required field'),
  amount: yup.string().required('Amount is required field'),
  status: yup
    .string()
    .oneOf(['Active', 'Deactive'], 'Invalid Job Type')
    .required('Status is required field'),
});

export const AddNewSuppliers = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = data => {
    dispatch(createSupplier(data));
    reset();
    onRequestClose();
  };

  const dateFormat = 'MMMM d, yyyy';

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'Deactive', label: 'Deactive' },
  ];

  return (
    <ModalContent>
      <h2>Add a new suppliers</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && '#E85050' }}
          />
          <p>{errors.name?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('address', { autoComplete: 'off' })}
            placeholder="Address"
            style={{ borderColor: errors.address && '#E85050' }}
          />
          <p>{errors.address?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && '#E85050' }}
          />
          <p>{errors.suppliers?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="date"
            rules={{ required: 'Delivery is required field' }}
            render={({ field, fieldState }) => {
              return (
                <DatePickerStyled
                  status={fieldState.error ? 'error' : undefined}
                  ref={field.ref}
                  name={field.name}
                  onBlur={field.onBlur}
                  placeholder="Delivery date"
                  value={field.value ? format(field.value, dateFormat) : ''}
                  format={dateFormat}
                  onChange={date => {
                    field.onChange(date ? date.valueOf() : null);
                  }}
                />
              );
            }}
          />
          <p>{errors.date?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('amount', { autoComplete: 'off' })}
            placeholder="Amount"
            style={{ borderColor: errors.amount && '#E85050' }}
          />
          <p>{errors.amount?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="status"
            rules={{ required: 'Status is required field' }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? 'error' : undefined}
                name={name}
                ref={ref}
                options={options}
                placeholder="Status"
                value={options.find(option => option.value === value)}
                onChange={selectedOption => onChange(selectedOption?.value)}
              />
            )}
          />
          <p>{errors.status?.message}</p>
        </FormInputWrapper>

        <ButtonContainer>
          <Button prop="Add" $variant="add" />
          <Button prop="Cancel" $variant="cancel" onClick={() => reset()} />
        </ButtonContainer>
      </Form>
    </ModalContent>
  );
};
