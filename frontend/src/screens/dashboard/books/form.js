import React from 'react';
import { useForm } from 'react-hook-form';

function BookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='flex items-center justify-center p-12'>
      <div className='mx-auto w-full'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 w-full gap-3'>
            <div className='mb-5'>
              <label
                htmlFor='title'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Title
              </label>
              <input
                type='text'
                {...register('name')}
                id='title'
                placeholder="book's title"
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='price'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Price
              </label>
              <input
                type='text'
                {...register('price')}
                id='price'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='category'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Category
              </label>
              <input
                type='text'
                {...register('category')}
                id='category'
                placeholder='Enter your subject'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='stock'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Stock
              </label>
              <input
                type='number'
                {...register('inStock')}
                id='stock'
                placeholder='Enter your subject'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='released_date'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Released date
              </label>
              <input
                type='date'
                {...register('released_date')}
                id='released_date'
                placeholder='Enter your subject'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='image'
                className='mb-3 block text-base font-medium text-[#07074D]'
              ></label>
              <input
                type='file'
                {...register('image')}
                id='image'
                placeholder='upload image'
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='description'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                Discription
              </label>
              <textarea
                rows='4'
                {...register('description')}
                id='description'
                placeholder='book discription'
                className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              ></textarea>
            </div>
          </div>
          <div>
            <button className='hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
