import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { parse } from 'date-fns';
import Select from 'react-select';
import * as yup from 'yup';
import { modifySupplier } from '../../../redux/pharmacy/pharmacyOperations';
import {
  ButtonContainer,
  DatePickerStyled,
  Form,
  ModalContent,
} from '../Modal.styled';
import { FormInputWrapper, StyledInput } from 'components/Auth/Auth.styled';
import { formatDate } from 'helpers/formatDate';
import Button from 'components/SharedComponents/Button/Button';

const supplierSchema = yup.object({
  name: yup.string().trim(),
  address: yup.string().trim(),
  suppliers: yup.string().trim(),
  date: yup.date(),
  amount: yup
    .number()
    .typeError('Amount must be a number')
    .required('Amount is required field'),
  status: yup.string(),
});

export const EditSuppliers = ({ onRequestClose, item }) => {
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

  const id = item._id;

  const onSubmit = data => {
    dispatch(modifySupplier({ id, supplierData: data }));
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
      <h2>Edit data</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Suppliers Info"
            style={{ borderColor: errors.name && '#E85050' }}
            defaultValue={item.name}
          />
          <p>{errors.name?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('address', { autoComplete: 'off' })}
            placeholder="Address"
            style={{ borderColor: errors.address && '#E85050' }}
            defaultValue={item.address}
          />
          <p>{errors.address?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Company"
            style={{ borderColor: errors.suppliers && '#E85050' }}
            defaultValue={item.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="date"
            render={({ field }) => {
              return (
                <DatePickerStyled
                  selected={
                    field.value
                      ? parse(field.value, dateFormat, new Date())
                      : parse(item.date, dateFormat, new Date())
                  }
                  onChange={date => field.onChange(date)}
                  dateFormat={dateFormat}
                  placeholderText={formatDate(item.date)}
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
            defaultValue={item.amount}
          />
          <p>{errors.amount?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Select
                classNamePrefix="custom-select"
                name={field.name}
                ref={field.ref}
                options={options}
                placeholder={item.status}
                value={
                  options.find(option => option.value === field.value) ||
                  options.find(option => option.value === item.status)
                }
                onChange={selectedOption =>
                  field.onChange(selectedOption.value)
                }
              />
            )}
          />
          <p>{errors.status?.message}</p>
        </FormInputWrapper>

        <ButtonContainer>
          <Button prop="Save" $variant="save" />
          <Button prop="Cancel" $variant="cancel" onClick={() => reset()} />
        </ButtonContainer>
      </Form>
    </ModalContent>
  );
};
