'use client'

// TODO: container / primary secondary color
// TODO: change + blur event?
// TODO: use react-hook-form

import { ChangeEvent, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from '@/components/button'
import { DynamicForm } from '@/components/dynamic-form'

export default function EditorPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [previewText, setPreviewText] = useState('defaultName: \n defaultEmail: \n ')

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setPreviewText(`defaultName: ${e.target.value} \n defaultEmail: ${email} \n `)
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setPreviewText(`defaultName: ${name} \n defaultEmail: ${e.target.value} \n `)
  }

  const handleChangePreviewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPreviewText(e.target.value)
  }

  return (
    <main>
      <h1>Editor test</h1>
      <div>
        <Button tag='button'>1</Button>
        <Button tag='a' role='button'>
          +1
        </Button>
      </div>

      <div className='flex justify-between'>
        <div className='my-6'>
          <div>
            <label htmlFor='name'>name</label>
            <input
              id='name'
              type='text'
              className='px-2 py-4 border border-cyan-500'
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='email'>email</label>
            <input
              id='email'
              type='text'
              className='px-2 py-4 border border-cyan-500'
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
        </div>

        <div className='my-6'>
          <TextareaAutosize
            className='px-2 py-4 border border-cyan-500'
            minRows={15}
            value={previewText}
            onChange={handleChangePreviewText}
          />
        </div>
      </div>
      <div>
        <DynamicForm />
      </div>
    </main>
  )
}
