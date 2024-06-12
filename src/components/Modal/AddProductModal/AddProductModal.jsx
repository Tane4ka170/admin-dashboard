import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { createProduct } from '../../../redux/pharmacy/pharmacyOperations';
import * as yup from 'yup';
import { ButtonContainer, Form, ModalContent } from '../Modal.styled';
import { FormInputWrapper, StyledInput } from 'components/Auth/Auth.styled';
import Button from 'components/SharedComponents/Button/Button';

const productSchema = yup.object({
  name: yup.string().trim().required('Name is required field'),
  category: yup
    .string()
    .oneOf(
      [
        'Medicine',
        'Head',
        'Hand',
        'Dental Care',
        'Skin Care',
        'Eye Care',
        'Vitamins & Supplements',
        'Orthopedic Products',
        'Baby Care',
      ],
      'Invalid Job Type'
    )
    .required('Category is required field'),
  suppliers: yup.string().trim().required('Suppliers is required field'),
  stock: yup.number().required('Stock is required field'),
  price: yup.number().required('Price is required field'),
});

const categoryOptions = [
  { value: 'Medicine', label: 'Medicine' },
  { value: 'Head', label: 'Head' },
  { value: 'Hand', label: 'Hand' },
  { value: 'Dental Care', label: 'Dental Care' },
  { value: 'Skin Care', label: 'Skin Care' },
  { value: 'Eye Care', label: 'Eye Care' },
  { value: 'Vitamins & Supplements', label: 'Vitamins & Supplements' },
  { value: 'Orthopedic Products', label: 'Orthopedic Products' },
  { value: 'Baby Care', label: 'Baby Care' },
];

export const AddProductModal = ({ onRequestClose }) => {
  const dispatch = useDispatch();

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = data => {
    dispatch(createProduct(data));
    reset();
    onRequestClose();
  };

  return (
    <ModalContent>
      <h2>Add a new product</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && '#E85050' }}
          />
          <p>{errors.name?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="category"
            rules={{ required: 'Status is required field' }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? 'error' : undefined}
                name={name}
                ref={ref}
                options={categoryOptions}
                placeholder="Category"
                value={categoryOptions.find(option => option.value === value)}
                onChange={selectedOption => onChange(selectedOption?.value)}
              />
            )}
          />
          <p>{errors.category?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('suppliers', { autoComplete: 'off' })}
            placeholder="Suppliers"
            style={{ borderColor: errors.suppliers && '#E85050' }}
          />
          <p>{errors.suppliers?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('stock', { autoComplete: 'off' })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && '#E85050' }}
          />
          <p>{errors.stock?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('price', { autoComplete: 'off' })}
            placeholder="Price"
            style={{ borderColor: errors.price && '#E85050' }}
          />
          <p>{errors.price?.message}</p>
        </FormInputWrapper>

        <ButtonContainer>
          <Button prop="Add" $variant="add" />
          <Button
            prop="Cancel"
            $variant="cancel"
            onClick={() => {
              reset();
              onRequestClose();
            }}
          />
        </ButtonContainer>
      </Form>
    </ModalContent>
  );
};
