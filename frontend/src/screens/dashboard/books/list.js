import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBooks } from '../../../actions/bookAction';
import TableFrame from '../../../components/ui/TableFrame';

function BooksList() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  useEffect(() => {
    dispatch(listBooks());
  }, [dispatch]);

  return (
    <TableFrame>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Photo
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              products
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Created at
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              QRT
            </th>
            <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => {
            return (
              <tr key={book._id}>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  {book.image}
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {book.category}
                  </p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {book.title}
                  </p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {`${book.price}€`}
                  </p>
                </td>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                  <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                      aria-hidden
                      className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Activo</span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableFrame>
  );
}

export default BooksList;
