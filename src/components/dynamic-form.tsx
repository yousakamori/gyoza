'use client'
import { useFieldArray, useForm } from 'react-hook-form'

export function DynamicForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numbers: [
        {
          value: '',
        },
      ],
    },
  })

  const { fields, insert, remove } = useFieldArray({
    control,
    name: 'numbers',
  })

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <form>
        <h2 className='mb-2'>数字たち</h2>
        <div className='space-y-2'>
          {fields.map((field, index) => (
            <div key={field.id}>
              <div className='flex items-center space-x-2'>
                <input
                  className='bg-transparent border rounded'
                  type='text'
                  autoComplete='off'
                  {...register(`numbers.${index}.value`, {
                    required: '必須入力です',
                    maxLength: {
                      value: 80,
                      message: '最大80文字です',
                    },
                  })}
                />
                {fields.length > 1 && (
                  <button type='button' onClick={() => remove(index)}>
                    まいなす
                  </button>
                )}
                <button
                  onClick={() =>
                    insert(index + 1, {
                      value: '',
                    })
                  }
                  type='button'
                >
                  ぷらす
                </button>
              </div>
              {errors.numbers?.[index]?.value && (
                <p className='text-sm text-red-500'>{errors.numbers?.[index]?.value?.message}</p>
              )}
            </div>
          ))}
        </div>
      </form>
      <div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  )
}
