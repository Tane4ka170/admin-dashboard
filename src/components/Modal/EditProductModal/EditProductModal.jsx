import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { modifyProduct } from 'redux/pharmacy/pharmacyOperations';
import * as yup from 'yup';
import { ButtonContainer, Form, ModalContent } from '../Modal.styled';
import { FormInputWrapper, StyledInput } from 'components/Auth/Auth.styled';
import Button from 'components/SharedComponents/Button/Button';

const productSchema = yup.object({
  name: yup.string().trim(),
  category: yup.string(),
  suppliers: yup.string().trim(),
  stock: yup.number(),
  price: yup.number(),
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

export const EditProductModal = ({ onRequestClose, product }) => {
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
    dispatch(modifyProduct({ id: product._id, productData: data }));
    reset();
    onRequestClose();
  };

  return (
    <ModalContent>
      <h2>Edit data</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputWrapper>
          <StyledInput
            {...register('name', { autoComplete: 'off' })}
            placeholder="Product Info"
            style={{ borderColor: errors.name && '#E85050' }}
            defaultValue={product.name}
          />
          <p>{errors.name?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <Controller
            control={control}
            name="category"
            rules={{ required: 'Category is a required field' }}
            render={({ fieldState, field: { onChange, name, ref, value } }) => (
              <Select
                classNamePrefix="custom-select"
                status={fieldState.error ? 'error' : undefined}
                name={name}
                ref={ref}
                options={categoryOptions}
                placeholder={product.category}
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
            defaultValue={product.suppliers}
          />
          <p>{errors.suppliers?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('stock', { autoComplete: 'off' })}
            placeholder="Stock"
            style={{ borderColor: errors.stock && '#E85050' }}
            defaultValue={product.stock}
          />
          <p>{errors.stock?.message}</p>
        </FormInputWrapper>

        <FormInputWrapper>
          <StyledInput
            {...register('price', { autoComplete: 'off' })}
            placeholder="Price"
            style={{ borderColor: errors.price && '#E85050' }}
            defaultValue={product.price}
          />
          <p>{errors.price?.message}</p>
        </FormInputWrapper>

        <ButtonContainer>
          <Button prop="Save" $variant="save" />
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
