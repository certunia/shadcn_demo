import { ReactNode } from 'react';

interface ContentWrapperProps {
  children: ReactNode;
  title: string;
}

export default function ContentWrapper(props: ContentWrapperProps) {
  return (
    <div className="p-2">
      <h1 className='mb-4 text-2xl font-bold'>{props.title}</h1>
      <div className="flex flex-col gap-2">
        {props.children}
      </div>
    </div>
  )
}